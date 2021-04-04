"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Join_class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Join_class, Schedule }) {
      Join_class.belongsTo(User);
      Join_class.belongsToMany(Schedule, { through: "presence" });
    }
  }
  Join_class.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      role: { type: DataTypes.STRING(10), defaultValue: "student" },
      classId: { type: DataTypes.UUID, allowNull: false },
      userId: { type: DataTypes.UUID, allowNull: false },
    },
    {
      sequelize,
      modelName: "Join_class",
      tableName: "join_class",
    }
  );
  return Join_class;
};
