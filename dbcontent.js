const mongoose = require("mongoose")

const userContextSchema = mongoose.Schema(
    {
        title: String,
        description: String,
        mainCharacters: String,
        category: String
    }
 )

export default mongoose.model('usercontent', userContextSchema);