export const styles = {
  header: {
    mt: 9,
    mb: 4,
  },

  navBar: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: {
      xs: 375,
      md: 800,
    },
  },

  prevButton: {
    left: {
      xs: 16,
      md: 0,
    },
  },

  nextButton: {
    right: {
      xs: 16,
      md: 0,
    },
  },

  btn: {
    position: 'absolute',
    color: 'purple',
    borderColor: 'purple',
    height: 48,
    width: 74,
    ':hover': {
      borderColor: 'red',
          color: 'red',
    }
  },

  picture: {
    width: {
      xs: 375,
      md: 800,
    },
    height: {
      xs: 375,
      md: 800,
    },
    mt: 4,
  },

  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    height: 80,
    borderTop: '8px solid lightgray',
    width: '100%',
    background: 'white',
  },

  btnStart: {
    background: '#AA00FF',
    color: '#FFFFFF',
    borderRadius: '50%',
    height: 53,
    width: 53,
    padding: '0 !important'
  },
} as const;
