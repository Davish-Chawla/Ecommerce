// import { useEffect } from "react"
// import axios from "axios"
// import { baseURL } from "./authService"
// import { useState } from "react"

// export default function BlogCategory() {
//     const [products, setproducts] = useState([])
//     const [categories, setcategories] = useState([])
//     useEffect(() => {
//         axios.get(`${baseURL}/api/users`)
//             .then(response => {
//                 setproducts(response.data.product)
//             })
//     }, [])

//     function handleClick(id) {
//         axios.get(`${baseURL}/api/blogs/${id}`)
//             .then(response => {
//                 console.log(response.data)
//                 setcategories(response.data.products)
//             })
//     }
//     return (
//         <div className="flex h-[80vh] w-full gap-5 container mx-auto">
//             <div className="h-full w-2/12 p-5 rounded-md bg-gray-800 text-gray-200 font-semibold">
//                 {
//                     products.map(product => (
//                         <div onClick={() => { handleClick(user._id) }} key={user._id}>
//                             <span>{category.username}</span>
//                         </div>
//                     ))
//                 }
//             </div>
//             <div className="w-10/12 h-full overflow-auto bg-gray-800 p-5 rounded-md grid grid-cols-2 gap-10 text-gray-200">
//                 {blogs.length>0 ? (
//                     blogs.map((item, index) => (
//                         <div key={index}>
//                             <div className='flex flex-col gap-5 p-10 rounded-2xl border-2 border-black'>
//                                 <div><img src={item.image} className='h-40 object-cover w-full' alt="" /></div>
//                                 <div className='flex flex-col gap-2'>
//                                     <div className='flex justify-between text-gray-700 text-sm'>
//                                         <span>{item.user.username}</span>
//                                         <span>{new Date(item.date).toDateString()}</span>
//                                     </div>
//                                     <h2 className='text-lg font-semibold'>{item.title}</h2>
//                                     <p className='line-clamp-1'>{item.description}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))
//                 ) : (
//                     <h2>No Blogs Found for This User</h2>
//                 )

//                 }
//             </div>
//         </div>
//     )
// }

import { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"
// import { baseURL } from "./authService";

export default function CategoryProduct() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading,setloading] = useState(true)

    useEffect(() => {
        axios.get(`http://localhost:7000/api/category`)
            .then(response => {
                console.log(response.data)
                setCategories(response.data.categories);
                setloading(false)
            })
            .catch(error => console.error("Error fetching categories:", error));
    }, []);

    function handleCategoryClick(categoryId) {
        setSelectedCategory(categoryId);
        axios.get(`http://localhost:7000/api/products?category=${categoryId}`)
            .then(response => {

                setProducts(response.data.products);
                setloading(false)
            })
            .catch(error => console.error("Error fetching products:", error));
    }
    if (loading){
        return(
            <div>loading...</div>
        )
    }
    return (
        <div className="flex gap-2 container p-0.5 max-w-screen">
            {/* Categories List */}
            <div className="h-full w-1/4 p-5 rounded-md bg-gray-800 text-gray-200 font-semibold">
                {categories.map(category => (
                    <div 
                        key={category._id} 
                        onClick={() => handleCategoryClick(category._id)}
                        className="cursor-pointer hover:text-gray-400"
                    >
                        <span>{category.name}</span>
                    </div>
                ))}
            </div>
            
            {/* Products List */}
            <div className="w-3/4 h-full overflow-auto bg-gray-800 p-5 rounded-md grid grid-cols-2 gap-10 text-gray-200">
                {products.length > 0 ? (
                    products.map((product, index) => (
                        <Link  to={`/products/${product._id}`} key={index} className='flex flex-col gap-2 p-4 rounded-2xl border-2 border-black'>
                            <div>
                                <img src={product.image} className='h-[60vh] object-cover w-full' alt={product.name} />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <h2 className='text-lg font-semibold'>{product.name}</h2>
                                <p className='line-clamp-2'>{product.description}</p>
                                <span className='text-gray-400 text-sm'>${product.price}</span>
                            </div>
                        </Link>
                    ))
                ) : (
                    <h2>No Products Found for This Category</h2>
                )}
            </div>
        </div>
    );
}
