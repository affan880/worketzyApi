const mongoose = require('mongoose');

const jobListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: Array,
        subType: Object,
        unique: true,
    }
});

module.exports = mongoose.model('List', jobListSchema);