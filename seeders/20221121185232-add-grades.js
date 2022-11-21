'use strict';
const { Grade } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		queryInterface.bulkInsert(
			'grades',
			[
				{
					score: 4,
					letter: 'A',
					studentCourseId: 1,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					score: 3,
					letter: 'B',
					studentCourseId: 2,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					score: 3,
					letter: 'C',
					studentCourseId: 3,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					score: 4,
					letter: 'D',
					studentCourseId: 4,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					score: 4,
					letter: 'F',
					studentCourseId: 5,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		queryInterface.bulkDelete('grades');
	}
};
