export const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    postiton: 'relative',
    mx: {
      md: 'auto',
    },
    maxWidth: {
      md: '800px',
    },
  },

  header: {
    mt: 9,
    mb: 4,
  },

  picture: {
    mt: 4,
  },

  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    height: 80,
    borderTop: '2px solid lightgray',
    width: '100%',
  },

  btnStart: {
    background: '#AA00FF',
    color: '#FFFFFF',
    borderRadius: '50%',
    height: 53,
    width: 53,
  },

  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
} as const;
