'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.belongsToMany(models.Course, {
        as: 'enrolled_courses',
        through: models.StudentCourses,
        foreignKey: 'studentId'
      })
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      courses: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Student',
      tableName: 'students'
    }
  )
  return Student
}
