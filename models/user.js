"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Join_class }) {
      User.hasMany(Join_class, {
        foreignKey: "user_id",
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: DataTypes.STRING(50),
      phone: DataTypes.STRING(12),
      placeBirth: { type: DataTypes.STRING, allowNull: false },
      birthdate: { type: DataTypes.DATEONLY, allowNull: false },
      email: { type: DataTypes.STRING(100), allowNull: false },
      password: { type: DataTypes.TEXT, allowNull: false },
      lastStudy: { type: DataTypes.STRING(20) },
      institution: { type: DataTypes.STRING(50) },
      currentJob: { type: DataTypes.STRING(50) },
      sosmed: { type: DataTypes.STRING(100) },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "user",
    }
  );
  return User;
};
