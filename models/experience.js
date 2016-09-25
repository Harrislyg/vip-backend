const mongoose = require('mongoose')
const experienceSchema = new mongoose.Schema({
  exptitle: { type: String },
  expcompany: { type: String },
  expdescription: { type: String }
})

const Experience = mongoose.model('Experience', experienceSchema)
module.exports = Experience
