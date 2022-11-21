'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class StudentCourses extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// StudentCourses.belongsTo(models.Grade, {
			// 	foreignKey: 'studentCourseId'
			// });
		}
	}
	StudentCourses.init(
		{
			studentId: {
				type: DataTypes.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'students',
					key: 'id'
				}
			},
			courseId: {
				type: DataTypes.INTEGER,
				onDelete: 'CASCADE',
				references: {
					model: 'courses',
					key: 'id'
				}
			}
		},
		{
			sequelize,
			modelName: 'StudentCourses',
			tableName: 'studentcourses'
		}
	);
	return StudentCourses;
};
