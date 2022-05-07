const mongoose = require('mongoose');
const timezone = require('mongoose-timezone');
const slugify = require('slugify');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Provide a name for the event'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Describe the event.']
    },
    slug: String,
    price: {
        type: Number,
    },
    venue: {
        type: String,
        required: [true, 'Provide a venue for this event']
    },
    date:{
        type: Date
    },
    typeOfEvent: {
        type: String,
        required: [true, 'Tell the type of the event: tech or nontech'],
        enum: {
            values: ['tech', 'nontech'],
            message: 'The event should be either tech or nontech'
        }
    },
    eventLink: String,
    poster:{
        type: String,
        required: [true, 'Provide a poster for this event']
    },
    contact1:{
        type: String,
        required: [true, 'Provide a contact for this event']
    },
    contact2:{
        type: String,
        required: [true, 'Provide a contact for this event']
    },
    DateOfCreation: {
        type: Date,
        default: Date.now,
    }
});
eventSchema.pre('save', function(next) {
    this.slug = slugify(this.name, { lower: true });
    next();
  });
eventSchema.plugin(timezone, { paths: ['DateofCreation.default'] });

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;