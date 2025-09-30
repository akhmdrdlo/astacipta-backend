// src/api/program/routes/program.ts

'use strict';

/**
 * program router
 */
const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::program.program', {
  config: {
    update: {
      policies: ['api::program.is-owner'],
    },
    delete: {
      policies: ['api::program.is-owner'],
    },
  },
});