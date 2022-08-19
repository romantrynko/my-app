export interface Storage {
  getItem<T>(key: string, ...args: Array<unknown>): T;
  setItem<T>(key: string, value: T, ...args: Array<unknown>): void;
  removeItem(key: string, ...args: Array<unknown>): void;
}

export interface NoopStorage {
  getItem(): void;
  setItem(): void;
  removeItem(): void;
}

const noop = () => {};

const noopStorage: NoopStorage = {
  getItem: noop,
  setItem: noop,
  removeItem: noop,
};

const getStorage = (): Storage => {
  const storageType = 'localStorage';

  if (typeof self !== 'object' || !(storageType in self)) {
    return noopStorage as Storage;
  }

  try {
    return self?.[storageType] as unknown as Storage;
  } catch {
    return noopStorage as Storage;
  }
};

export const createLocalStorage = () => {
  const storage = getStorage();
  return {
    getItem: <T>(key: string): T => {
      try {
        return JSON.parse(storage.getItem(key));
      } catch {
        return storage.getItem(key);
      }
    },
    setItem: <T>(key: string, item: T): void => {
      storage.setItem(key, JSON.stringify(item));
    },
    removeItem: (key: string): void => {
      storage.removeItem(key);
    },
  };
};
