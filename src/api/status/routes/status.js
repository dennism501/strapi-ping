"use strict";

/**
 * document router
 */

module.exports = {
  routes: [
    {
      // Path defined with an URL parameter
      method: "GET",
      path: "/ping",
      handler: "status.ping",
    },
  ],
};
