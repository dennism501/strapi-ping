'use strict';

/**
 * A set of functions called "actions" for `status`
 */

module.exports = {
  ping: async (ctx) => {
    try {
      ctx.response.status = 200;
    } catch (err) {
      ctx.body = err;
    }
  }
};
