'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.data.belongsTo(models.user, { foreignKey: 'userId' });
    }
  };
  data.init({
    userId: DataTypes.INTEGER,
    checking: DataTypes.INTEGER,
    savings: DataTypes.INTEGER,
    investments: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'data',
  });
  return data;
};