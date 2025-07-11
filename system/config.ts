const configServer = {
  port: import.meta.env.PORT || 3000,
  auth: {
    name: import.meta.env.AUTH_NAME as string,
    email: import.meta.env.AUTH_EMAIL as string,
    password: import.meta.env.AUTH_PASSWORD as string,
  },
};

export default configServer;
