const mongoose = require('mongoose');

const LogInSchema = new mongoose.Schema({
    admin_username:{type:String,required:true},
    admin_password:{type:String,required:true}
})

module.exports = mongoose.model('admin_infos',LogInSchema)

