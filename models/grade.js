'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Grade extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Grade.belongsTo(models.StudentCourse, { foreignKey: 'studentcourseId' })
    }
  }
  Grade.init(
    {
      score: DataTypes.INTEGER,
      letter: DataTypes.STRING,
      studentCourseId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'studentcourses',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Grade',
      tableName: 'grades'
    }
  )
  return Grade
}
