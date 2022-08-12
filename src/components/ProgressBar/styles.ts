export const styles = {
  root: {
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  label: (color: 'red' | 'green') => ({
    color: color === 'red' ? '#FF4081' : '#1DE9B6',
    position: 'absolute',
    fontSize: {
      xs: 28,
      md: 40,
    },
    fontWeight: 600,
  }),

  progress: (color: 'red' | 'green') => ({
    zIndex: 1,
    color: color === 'red' ? '#FF4081' : '#1DE9B6',
    width: {
      xs: 96,
      md: 128,
    },
    height: {
      xs: 96,
      md: 128,
    },
  }),

  backCircular: {
    position: 'absolute',
    zIndex: 0,
    color: '#EEEEEE',
  },
} as const;
