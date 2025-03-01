import { Link } from "react-router-dom";
import { ShoppingBag , CircleUser} from "lucide-react";
import Form from "./addproduct";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      setIsAuthenticated(true)
    }else{
      setIsAuthenticated(false)
    }
  }, [])
  return (
    <nav className="bg-white text-gray-800 p-4 flex justify-between items-center shadow-md sticky  w-full top-0 z-50">
      {/* Logo Section */}
      <div>
        <Link to="/" className="text-lg font-bold">Logo</Link>
      </div>

      {/* Navigation Links */}
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-500">Home</Link>
        <Link to="/products" className="hover:text-blue-500">Products</Link>
        {/* <Route path="/products" element={<Products />}></Route> */}
        <Link to="/product_form"  className="hover:text-blue-500">Form</Link>
        <Link to="/category" className="hover:text-blue-500">Categories</Link>
        <Link to="/contactus" className="hover:text-blue-500">Contact Us</Link>

      </div>

      
      {/* Cart Icon */}
      <div className="flex gap-4 justify-between">
        <ShoppingBag size={24} className="cursor-pointer hover:text-blue-500" />
        {
          isAuthenticated?(
            <Link to={"/dashboard"}><CircleUser size={24} className="cursor-pointer hover:text-blue-500"/></Link>
          ):(
            <Link to={"/login"}><CircleUser size={24} className="cursor-pointer hover:text-blue-500"/></Link>
          )
        }
        
      </div>
    </nav>
  );
}

//     <div>
//       <div className="flex flex-wrap">
//         <section className="relative mx-auto">
//           {/* <!-- navbar --> */}
//           <nav className="flex justify-between bg-gray-900 text-white w-screen">
//             <div className="px-5 xl:px-12 py-6 flex w-full items-center">
//               <a className="text-3xl font-bold font-heading" href="#">
                // <img className="h-9" src="logo.png" alt="logo" />
//                 Logo Here.
//               </a>
//               {/* <!-- Nav Links --> */}
//               <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
//                 <li>
//                   <a className="hover:text-gray-200" href="#">
//                     Home
//                   </a>
//                 </li>
//                 <li>
//                   <Link to="/products" className="hover:text-gray-200">
//                     Products
//                   </Link>
//                 </li>
//                 <li>
//                 <Link to="/products_form" className="hover:text-gray-200">
//                     Form
//                   </Link>
//                 </li>
//                 <li>
//                   <a className="hover:text-gray-200" href="#">
//                     Contact Us
//                   </a>
//                 </li>
//               </ul>
//               {/* <!-- Header Icons --> */}
//               <div className="hidden xl:flex  space-x-5 items-center">
//                 <a className="hover:text-gray-200" href="#">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
                      
                      
                      
//                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                     />
//                   </svg>
//                 </a>
//                 <a className="flex items-center hover:text-gray-200" href="#">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
                      
                      
                      
//                       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                     />
//                   </svg>
//                   <span className="flex absolute -mt-5 ml-4">
//                     <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
//                     <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
//                   </span>
//                 </a>
//                 {/* <!-- Sign In / Register      --> */}
//                 <a className="flex items-center hover:text-gray-200" href="#">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6 hover:text-gray-200"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
                      
                      
                      
//                       d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//             {/* <!-- Responsive navbar --> */}
//             <a className="xl:hidden flex mr-6 items-center" href="#">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 hover:text-gray-200"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
                  
                  
                  
//                   d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                 />
//               </svg>
//               <span className="flex absolute -mt-5 ml-4">
//                 <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
//                 <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
//               </span>
//             </a>
//             <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 hover:text-gray-200"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
                  
                  
                  
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </a>
//           </nav>
//         </section>
//       </div>
//       <div className="absolute bottom-0 right-0 mb-4 mr-4 z-10">
//         <div>
//           <a
//             title="Follow me on twitter"
//             href="https://www.twitter.com/asad_codes"
//             target="_blank"
//             className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
//           >
//             <img
//               className="object-cover object-center w-full h-full rounded-full"
//               src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2019/12/twitter-logo.jpg"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
