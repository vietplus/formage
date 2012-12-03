var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

var s = new Schema({
    title: { type: String, required: true },

    list: [{
        name: String
    }]
});

s.methods.toString = function() {
    return this.title;
};

module.exports = mongoose.model('pages', s);

