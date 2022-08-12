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
    color: '#AA00FF',
    borderColor: '#AA00FF',
    height: 48,
    width: 74,
    ':hover': {
      borderColor: 'red',
      color: 'red',
    },
  },

  picture: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: {
      xs: 375,
      md: 800,
    },
    height: {
      xs: 211,
      md: 450,
    },
    mt: 4,
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: '0px 5px 21px -6px rgba(0,0,0,0.24)',
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
    padding: '0 !important',
  },
} as const;
