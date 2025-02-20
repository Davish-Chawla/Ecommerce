const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId, ref :"Product", required: true },
    quantity: { type: Number,  default:0 },
    total: { type: Number, required: true },
    user:  { type: mongoose.Schema.Types.ObjectId, ref :"User", required: true }
});

// export default mongoose.model("Category", categorySchema);
const Cart = mongoose.model("Cart", CartSchema)
module.exports= Cart