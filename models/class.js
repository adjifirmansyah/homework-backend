"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MyClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ MyClass, Join_class, Schedule }) {
      MyClass.hasMany(Join_class, {
        foreignKey: "class_id",
      });
      MyClass.hasMany(Schedule, {
        onDelete: "RESTRICT",
        onUpdate: "RESTRICT",
        foreignKey: "class_id",
      });
    }
  }
  MyClass.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      code: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      date_start: {
        type: DataTypes.DATEONLY,
      },
      date_end: {
        type: DataTypes.DATEONLY,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "MyClass",
      tableName: "class",
    }
  );
  return MyClass;
};
