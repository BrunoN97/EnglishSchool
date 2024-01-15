"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "Niveis",
      [
        {
          descr_level: "básico",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descr_level: "intermediário",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          descr_level: "avançado",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Niveis", null, {});
  },
};
