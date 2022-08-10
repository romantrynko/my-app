export const styles = {
  card: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    mx: {
      lg: 'auto',
    },
  },

  imageWrapper: {
    display: 'flex',
    position: 'relative',
    borderRadius: 0.8,
    height: {
      xs: 211,
      md: 450,
    },
    width: {
      xs: 375,
      md: 800,
    },
  },

  cardBody: {
    display: 'flexbox',
    flexDirection: 'column',
    mt: {
      xs: 3,
      xl: 4,
    },
  },

  caption: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1.5,
    color: '#212121',
  },

  title: {
    fontWeight: 600,
    fontSize: 24,
    lineHeight: 1.5,
  },
};

export default styles;
