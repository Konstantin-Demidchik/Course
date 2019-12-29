// подключение модуля mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Схема описания документа и наложением ограничений и первоначальных состояний
const FiltersScheme = new Schema({
  mark: {
    type: String,
    required: true,
    index: true,
  },
  model: {
    type: Array,
    required: false,
    index: false,
    default: [],
  },
});
// экпорт коллекции autos с описанным выше ограничение 
module.exports = mongoose.model('autos', FiltersScheme);
