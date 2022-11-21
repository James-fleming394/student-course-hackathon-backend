'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		queryInterface.bulkInsert(
			'studentcourses',
			[
				{
					studentId: 1,
					courseId: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					studentId: 2,
					courseId: 2,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					studentId: 3,
					courseId: 3,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					studentId: 4,
					courseId: 3,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					studentId: 5,
					courseId: 4,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		queryInterface.bulkDelete('studentcourses');
	}
};
