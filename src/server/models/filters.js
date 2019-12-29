// подключение модуля mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Схема описания документа и наложением ограничений и первоначальных состояний
const FiltersScheme = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
  },
  personId: {
    type: Number,
    required: false,
    index: false,
  },
  image: {
    type: String,
    required: false,
    index: false,
  },
  D: {
    type: Number,
    required: false,
    index: false,
  },
  d1: {
    type: Number,
    required: false,
    index: false,
  },
  d2: {
    type: Number,
    required: false,
    index: false,
  },
  d3: {
    type: Number,
    required: false,
    index: false,
  },
  F: {
    type: Number,
    required: false,
    index: false,
  },
  G: {
    type: Number,
    required: false,
    index: false,
  },
  L: {
    type: Number,
    required: false,
    index: false,
  },
  B: {
    type: Number,
    required: false,
    index: false,
  },
  H: {
    type: Number,
    required: false,
    index: false,
  },
  applicability : {
    type: String,
    required: false,
    index: false,
  }
});
// экпорт коллекции autos с описанным выше ограничение
module.exports = mongoose.model('filters', FiltersScheme);
