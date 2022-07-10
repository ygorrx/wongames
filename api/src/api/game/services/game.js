"use strict";

/**
 * game service.
 */

const { createCoreService } = require("@strapi/strapi").factories;
const axios = require("axios");

module.exports = createCoreService("api::game.game", ({ strapi }) => ({
  populate: async (params) => {
    const cat = await strapi.services.category.find({ name: "Action" });
    const gogApiUrl = `https://www.gog.com/games/ajax/filtered?mediaType=game&page=1&sort=popularity`;

    const {
      data: { products },
    } = await axios.get(gogApiUrl);

    console.log(cat);
    console.log(products[0]);
  },
}));
