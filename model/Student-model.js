const { Schema,model } = require("mongoose");

const studentSchema = new Schema({
    Fullname: String,
    address: String,
    Roll_no: String,
    Clg_id: String,
    mobile: String,
    email: String
});

module.exports = model("Student",studentSchema);