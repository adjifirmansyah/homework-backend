"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class presence extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  presence.init(
    {
      join_class_id: {
        type: DataTypes.UUID,
      },
      schedule_id: {
        type: DataTypes.UUID,
      },
    },
    {
      sequelize,
      modelName: "presence",
    }
  );
  return presence;
};
