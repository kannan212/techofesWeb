const mongoose = require('mongoose');
const timezone = require('mongoose-timezone');
const slugify = require('slugify');

const workshopSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Provide a name for the workshop'],
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Describe the workshop.']
    },
    slug: String,
    price: {
        type: Number,
        required: [true, 'Price the workshop']
    },
    teamSize:{
        type: Number,
        required: [true, 'Enter maximum team size']
    },
    close: Boolean,
    venue: {
        type: String,
        required: [true, 'Provide a venue for this workshop']
    },
    eventDate:{
        type: Date,
        required: [true, 'Provide a date for this workshop']
    },
    poster:{
        type: String,
        required: [true, 'Provide a poster for this workshop']
    },
    contact1:{
        type: String,
        required: [true, 'Provide a contact for this workshop']
    },
    contact2:{
        type: String,
        required: [true, 'Provide a contact for this workshop']
    },
    DateOfCreation: {
        type: Date,
        default: Date.now,
    }
});
//workshopSchema.index({ eventDate: 1 });

workshopSchema.pre('save', function(next) {
    this.slug = slugify(this.name, { lower: true });
    next();
  });
workshopSchema.plugin(timezone, { paths: ['DateofCreation.default'] });
const Workshop = mongoose.model('Workshop', workshopSchema);
module.exports = Workshop;