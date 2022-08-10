export const styles = {
  card: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    mx: {
      lg: 'auto',
    },
  },

  imageWrapper: {
    display: 'flex',
    position: 'relative',
    borderRadius: 1.2,
    overflow: 'hidden',
    height: {
      xs: 64,
      md: 64,
    },
    width: {
      xs: 64,
      md: 64,
    },
  },

  image: {
    borderRadius: 1.2,
  },

  cardBody: {
    display: 'flex',
    flexDirection: 'column',
  },

  caption: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 1.4,
    color: '#212121',
    mx: '18px',
  },

  title: {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 1.2,
    mx: '18px',
  },
};

export default styles;
