const mongoose = require('mongoose');

const HabitSchema = new mongoose.Schema({
    habit : {
        type :String,
        required : true
    },
    performance : {
        type : [Number]
    }

},{
    timestamps: true
});


const Habit = mongoose.model('Habit',HabitSchema);

module.exports = Habit;