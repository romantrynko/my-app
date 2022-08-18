export const styles = {
  root: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    mx: {
      md: 'auto',
    },
    maxWidth: {
      md: '800px',
    },
    pb: 10,
    pt: 5,
  },

  btn: {
    position: 'fixed',
    bottom: 32,
    textTransform: 'none',
    background: '#AA00FF',
    boxShadow: '0px 16px 32px rgba(170, 0, 255, 0.24)',
    borderRadius: 1,
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: 16,
    p: 1,
    width: {
      md: 800,
      xs: 343,
    },
    ':hover': {
      background: 'purple',
      boxShadow: '0px 16px 32px rgba(170, 0, 255, 0.34)',
    },
  },
};

export default styles;
