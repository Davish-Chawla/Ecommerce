// import React from "react";

// const category = [
//     {
//         name: "Mens Store" , image: "/src/assets/download (1).jpg",
//         name: "Womens Store" , image: "/src/assets/OIP (3).jpg",
//         name: "Kids Store" , image: "/src/assets/OIP (4).jpg",
//         name: "Acessories Store" , image: "/src/assets/download (2).jpg",

//     }
// ]

// export default function  Category (){
//     return (
//         <div>
//             <h2 className="text-2xl font-bold  text-center"></h2>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
//   {category.map((category) => (
//     <div key={category.id} className="relative group">
//       <img src={category.image} alt={category.name} className="w-full h-60 object-cover rounded-lg" />
//       <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
//         <span className="text-white font-semibold text-lg">{category.name}</span>
//       </div>
//     </div>
//   ))}
// </div>

//         </div>
//     )
// }

import React from "react";

const categories = [
    {
        id: 1,
        name: "Mens Store",
        image: "/src/assets/download (1).jpg"
    },
    {
        id: 2,
        name: "Womens Store",
        image: "/src/assets/OIP (3).jpg"
    },
    {
        id: 3,
        name: "Kids Store",
        image: "/src/assets/OIP (4).jpg"
    },
    {
        id: 4,
        name: "Accessories Store",
        image: "/src/assets/download (2).jpg"
    }
];

export default function Category() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-center">Categories</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
                {categories.map((category) => (
                    <div key={category.id} className="relative group">
                        <img src={category.image} alt={category.name} className="w-full h-60 object-cover rounded-lg" />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                            <span className="text-white font-semibold text-lg">{category.name}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}