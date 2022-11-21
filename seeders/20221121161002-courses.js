'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'courses',
      [
        {
          name: 'Math',
          grade: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Science',
          grade: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'English',
          grade: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'History',
          grade: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {})
  }
}
