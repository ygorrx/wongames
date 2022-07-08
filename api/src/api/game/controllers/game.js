"use strict";

/**
 *  game controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::game.game", {
  populate: (ctx) => {
    console.log("Initializing");
    ctx.send({ ok: true });
  },
});
