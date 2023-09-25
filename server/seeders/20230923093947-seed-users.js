'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const bcrypt = require('bcryptjs');
    const users = require(`../data/users.json`)
    // console.log(users)

    users.forEach(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      el.password = bcrypt.hashSync(el.password, 10)
    });

    await queryInterface.bulkInsert(`Users`, users, {})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
