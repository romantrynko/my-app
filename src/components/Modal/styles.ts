export const styles = {
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'black',
    opacity: 0.64,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },

  title: {
    fontWeight: 600,
    fontSize: 24,
    mt: 1,
  },

  subtitle: {
    fontWeight: 400,
    fontSize: 16,
    mb: 4,
  },

  btn: {
    width: 256,
    height: 48,
    borderWidth: 2,
    borderRadius: '8px',
    textTransform: 'capitalize',
    ':hover': {
      borderWidth: 2,
      background: 'white',
      color: 'black',
    },
  },
} as const;
