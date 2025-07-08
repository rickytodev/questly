const configServer = {
  port: import.meta.env.PORT || 3000,
  auth: {
    email: import.meta.env.AUTH_EMAIL as string,
    password: `${import.meta.env.AUTH_PASSWORD}`,
  },
};

export default configServer;
