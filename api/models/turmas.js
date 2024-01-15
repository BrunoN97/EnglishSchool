"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Turmas.hasMany(models.Matriculas, {
        foreignKey: "class_id",
      });
      Turmas.belongsTo(models.Pessoas, {
        foreignKey: "teacher_id",
      });
      Turmas.belongsTo(models.Niveis, {
        foreignKey: "level_id",
      });
    }
  }
  Turmas.init(
    {
      date_start: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "Turmas",
    }
  );
  return Turmas;
};
