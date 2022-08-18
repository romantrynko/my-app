export default class AuthError extends Error {
  constructor(public message: string, public status = 400) {
    super(message);
  }
}
