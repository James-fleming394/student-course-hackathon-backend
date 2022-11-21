'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Course.belongsToMany(models.Student, {
        as: 'student_courses',
        through: models.StudentCourses,
        foreignKey: 'courseId'
      })
    }
  }
  Course.init(
    {
      name: DataTypes.STRING,
      grade: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Course',
      tableName: 'courses'
    }
  )
  return Course
}
