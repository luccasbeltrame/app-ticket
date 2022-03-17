const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const AdminJSMongoose = require('@adminjs/mongoose')

const mongoose = require('mongoose')

AdminJS.registerAdapter(AdminJSMongoose)

const adminJs = new AdminJS({
  databases: [mongoose],
  rootPath: '/admin',
})

const ADMIN = {
  email: "test@example.com",
  password: "password",
};

const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN;
    }
    return null;
  },
  cookiePassword: "somasd1nda0asssjsdhb21uy3g",
  maxRetries: {
    count: 3,
    duration: 120,
  },
});

module.exports = router