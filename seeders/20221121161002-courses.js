'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'courses',
      [
        {
          name: 'Math',
          grade: 2
        },
        {
          name: 'Science',
          grade: 2
        },
        {
          name: 'English',
          grade: 2
        },
        {
          name: 'History',
          grade: 2
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {})
  }
}
