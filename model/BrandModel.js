const mongoose = require("mongoose");
const { Schema } = mongoose;

const BrandSchema = new Schema({
    label: {
        type: String,
        required: true,
        unique: true
    },
    value: {
        type: String,
        required: true,
        unique: true

    },
    
});

const virtual = BrandSchema.virtual('id');
virtual.get(function() {
    return this._id;
})
BrandSchema.set('toJSON', { 
    virtuals: true,
    versionkey: false,
    transform: function(doc, ret) {delete ret._id}                // ------- doc -- savedProduct
})

exports.Brand = mongoose.model("Brand", BrandSchema);