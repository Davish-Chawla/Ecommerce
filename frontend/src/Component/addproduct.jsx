import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function ProductForm() {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState({
    name: "",
    description: "",
    image: "",
    category: "",
    price: "",
    brand: "",
    stock: "",
    rating: "",
  });
  useEffect(() => {
    axios.get(`http://localhost:7000/api/category`)
        .then(response => {
            console.log(response.data)
            setCategories(response.data.categories);
        })
        .catch(error => console.error("Error fetching categories:", error));
}, []);

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting product:", product);

    setError(null); // Clear previous errors

    if (!product.name || !product.description || !product.image || !product.category || !product.brand || !product.stock || !product.rating || !product.price) {
      setError("All required fields must be filled.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:7000/api/products/add", product);
      console.log("Product Added:", res.data);
      navigate("/products"); // Redirect after adding the product
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>

      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div>
          <label className="block text-gray-600">Name</label>
          <input
            name="name"
            type="text"
            value={product.name}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600">Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-600">Image URL</label>
          <input
            name="image"
            type="text"
            value={product.image}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600">Category</label>
          <select
            name="category"
            type="text"
            // value={category}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            {categories.map (category=>(
              <option key ={category._id}
               value={category._id}>{category.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-gray-600">Price ($)</label>
          <input
            name="price"
            type="number"
            value={product.price}
            onChange={handleChange}
            className="w-full border rounded p-2"
            required
          />
        </div>

        <div>
          <label className="block text-gray-600">Brand</label>
          <input
            name="brand"
            type="text"
            value={product.brand}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-gray-600">Stock</label>
          <input
            name="stock"
            type="number"
            value={product.stock}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <div>
          <label className="block text-gray-600">Rating</label>
          <input
            name="rating"
            type="number"
            step="0.1"
            value={product.rating}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
