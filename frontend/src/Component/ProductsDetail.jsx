// import axios from "axios"
// import { useState , useEffect } from "react"
// import { useParams } from "react-router-dom"

// export default function ProductDetails(){
//     const { id } = useParams()
//     const [product, setproduct] = useState()
//     const [loading, setloading] = useState(true)

//     useEffect(() => {
//         axios.get(`http://localhost:7000/api/products/product/${id}`)
//             .then(response => {
//                 console.log(response)
//                 setproduct(response.data.product)
//                 setloading(false)
//             })
//     }, [id])
//     if (loading) {
//         return <div>Loading....</div>
//     }
//     return (
//         <div className="flex flex-row md:flex-col gap-5 container mx-auto py-10">
//             <span>{product.description}</span>
//         </div>
//     )
// }

import axios from "axios";
import { useState, useEffect } from "react";
import { useParams , useNavigate } from "react-router-dom";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate=useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:7000/api/products/product/${id}`)
            .then(response => {
                console.log(response.data); // Debugging API response
                setProduct(response.data.product);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching product:", err);
                setError("Failed to load product");
                setLoading(false);
            });
    }, [id]);
    function handlecart(id){
        axios.post(`http://localhost:7000/api/cart/add`,{product:id }, {
            headers: {
                Authorization : localStorage.getItem("token")
            }
        })
        .then(resp=>{
            if(resp.data.success){
                navigate("/cart")
            }
        })
    
    }

    if (loading) {
        return <div className="text-center py-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500 py-10">{error}</div>;
    }

    return (
        <div className="container mx-auto py-10 px-4 md:px-10">
            <div className="grid md:grid-cols-2 gap-8">
                {/* Product Image */}
                <div>
                    <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-md" />
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <p className="text-lg text-gray-600 mt-2">{product.category.name}</p>
                    <p className="text-xl font-semibold text-green-600 mt-2">${product.price}</p>
                    <p className="text-md text-gray-700 mt-4">{product.description}</p>

                    {/* Extra details if available */}
                    <p className="mt-4"><strong>Brand:</strong> {product.brand || "N/A"}</p>
                    <p><strong>Stock:</strong> {product.stock > 0 ? `${product.stock} Available` : "Out of Stock"}</p>
                    <p><strong>Rating:</strong> ⭐ {product.rating || "No rating"}</p>

                    {/* Add to Cart Button */}
                    <button onClick={()=>{handlecart(product._id)}} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
