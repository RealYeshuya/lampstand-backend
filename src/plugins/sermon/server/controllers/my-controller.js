'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('sermon')
      .service('myService')
      .getWelcomeMessage();
  },
});
