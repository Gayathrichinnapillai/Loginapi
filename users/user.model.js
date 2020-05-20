const db=require('../_helpers/db'); 

const userschema =db.Schema({
    username: { type: String, unique: true, required: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: Date, default: Date.now }
});

// userschema.set('toJSON', {
//     virtuals: true,
//     versionKey: false,
//     transform: function (doc, ret) {
//         delete ret._id;
//         delete ret.hash;
//     }
// });

module.exports=db.model('User',userschema);
//module.exports = mongoose.model('User', schema);