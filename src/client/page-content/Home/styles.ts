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

  header: {
    display: 'flex',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: {
      md: 800,
      xs: 375,
    },
  },
  userName: {
    fontWeight: 800,
    fontSize: 24,
    color: 'lightgray',
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
  logoutBtn: {
    textTransform: 'none',
    background: '#d4d4d4',
    borderRadius: 1,
    color: '#FFFFFF',
    fontWeight: 600,
    fontSize: 16,
    p: 1,
    width: 100,
    ':hover': {
      background: 'red',
    },
  },
};

export default styles;
