'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'students',
      [
        {
          name: 'Billy',
          email: 'billy@billy.com',
          courses: ['Math', 'Science', 'English', 'History'],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sally',
          email: 'sally@sally.com',
          courses: ['Math', 'Science', 'English', 'History'],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Timmy',
          email: 'timmy@timmy.com',
          courses: ['Math', 'Science', 'English', 'History'],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Toby',
          email: 'toby@toby.com',
          courses: ['Math', 'Science', 'English', 'History'],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Sammy',
          email: 'sammy@sammy.com',
          courses: ['Math', 'Science', 'English', 'History'],
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('students', null, {})
  }
}
