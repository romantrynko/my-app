export const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    mt: {
      xs: 9.2,
      md: 15.5,
    },
    width: {
      xs: 343,
      md: 800,
    },
  },

  check: {
    height: 50,
    width: 50,
  },

  title: {
    mt: 2,
    fontSize: {
      sx: 28,
      md: 40,
    },
    fontWeight: 600,
  },

  subtitle: {
    px: 2,
    textAlign: 'center',
    color: '#222222',
    opacity: 0.6,
    fontSize: {
      sx: 18,
      md: 20,
    },
    mt: {
      xs: 2,
      md: 0,
    },
    fontWeight: 400,
  },

  minutes: {
    mt: {
      xs: 5.5,
      md: 4,
    },
    fontSize: 14,
    fontWeight: 400,
  },

  totalTime: {
    fontSize: {
      xs: 28,
      md: 40,
    },
    fontWeight: 600,
    mt: 0.5,
  },

  btn: {
    background: '#AA00FF',
    color: 'white',
    height: 48,
    width: '100%',
    textTransform: 'capitalize',
    mt: {
      xs: 2,
      md: 5,
    },
    boxShadow: '0px 16px 32px rgba(170, 0, 255, 0.24)',
    ':hover': {
      background: 'purple',
      boxShadow: '0px 16px 32px rgba(170, 0, 255, 0.34)',
    },
  },
} as const;
