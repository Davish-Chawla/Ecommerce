const mongoose = require("mongoose")

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true }
});

// export default mongoose.model("Category", categorySchema);
const Category = mongoose.model("Category", categorySchema)
module.exports= Category