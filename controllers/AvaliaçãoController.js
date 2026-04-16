const { Avaliacao } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const avaliacao = await Avaliacao.create(req.body);
      return res.status(201).json(avaliacao);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const avaliacoes = await Avaliacao.findAll();
      return res.json(avaliacoes);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
};