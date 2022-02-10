'use strict';

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
      'todos',
      [
        {
          title: 'watching movie',
          completed: true,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'watering garden',
          completed: false,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'do homework',
          completed: false,
          user_id: 2,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'learn python',
          completed: true,
          user_id: 4,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'bake a cake',
          completed: true,
          user_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'drive safe',
          completed: false,
          user_id: 3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          title: 'watching kimitsu no yaiba',
          completed: true,
          user_id: 2,
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
