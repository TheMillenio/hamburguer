'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avaliacao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Avaliacao.belongsTo(models.Pedido, {
        foreignKey: 'pedidoId',
        as: 'pedido'
      })
    }
  }
  Avaliacao.init({
    nota: DataTypes.INTEGER,
    pedidoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Avaliacao',
  });
  return Avaliacao;
};