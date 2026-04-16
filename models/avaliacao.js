'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Avaliacao extends Model {
    
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
//67!