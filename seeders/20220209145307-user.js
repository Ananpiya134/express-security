'use strict';
const bcrypt = require('bcryptjs')
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          username: 'john',
          email: 'john@gmail.com',
          password: bcrypt.hashSync('123456', 12),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          username: 'jack',
          email: 'jack@gmail.com',
          password: bcrypt.hashSync('1908457', 12),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          username: 'jacky',
          email: 'jacky@gmail.com',
          password: bcrypt.hashSync('103289547', 12),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          username: 'marcus',
          email: 'marcus@gmail.com',
          password: bcrypt.hashSync('asdlkfjh', 12),
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          username: 'marco',
          email: 'marco@gmail.com',
          password: bcrypt.hashSync('daf934@', 12),
          created_at: new Date(),
          updated_at: new Date()
        },
      ]
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
