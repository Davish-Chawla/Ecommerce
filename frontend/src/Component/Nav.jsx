// // "use client";

// import { Avatar, Dropdown, Navbar, Badge } from "flowbite-react";
// import { ShoppingBag, Menu } from "lucide-react";

// export function ClothingNavbar() {
//   return (
//     <Navbar fluid rounded className="shadow-md bg-white">
//       {/* Brand Logo */}
//       <Navbar.Brand href="/">
//         <img
//           src="/logo.png"
//           className="mr-3 h-8 sm:h-10"
//           alt="Clothing Brand Logo"
//         />
//         <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-900">
//           FashionHub
//         </span>
//       </Navbar.Brand>

//       {/* Right-side Icons (Cart & User) */}
//       <div className="flex items-center space-x-4 md:order-2">
//         {/* Shopping Cart */}
//         <button className="relative p-2 text-gray-700 hover:text-black">
//           <ShoppingBag size={24} />
//           <Badge className="absolute -top-1 -right-2 text-xs bg-red-500 text-white">
//             3
//           </Badge>
//         </button>

//         {/* User Dropdown */}
//         <Dropdown
//           arrowIcon={false}
//           inline
//           label={
//             <Avatar
//               alt="User Profile"
//             //   img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
//               rounded
//             />
//           }
//         >
//           <Dropdown.Header>
//             <span className="block text-sm">John Doe</span>
//             <span className="block truncate text-sm font-medium">
//               john@example.com
//             </span>
//           </Dropdown.Header>
//           <Dropdown.Item href="/profile">Profile</Dropdown.Item>
//           <Dropdown.Item href="/orders">Orders</Dropdown.Item>
//           <Dropdown.Item href="/wishlist">Wishlist</Dropdown.Item>
//           <Dropdown.Divider />
//           <Dropdown.Item href="/logout">Sign Out</Dropdown.Item>
//         </Dropdown>

//         {/* Mobile Menu Toggle */}
//         <Navbar.Toggle icon={<Menu size={24} />} />
//       </div>

//       {/* Navigation Links */}
//       <Navbar.Collapse>
//         <Navbar.Link href="/" active>
//           Home
//         </Navbar.Link>
//         <Navbar.Link href="/shop">Shop</Navbar.Link>
//         <Navbar.Link href="/new-arrivals">New Arrivals</Navbar.Link>
//         <Navbar.Link href="/sale">Sale</Navbar.Link>
//         <Navbar.Link href="/contact">Contact</Navbar.Link>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }


// import React from "react";
// import { BrowserRouter as Link,Routes,Router,Route } from "react-router-dom";
// export default function Nav(){
//     return(
//         <div>
//             <nav>
//                 <Link to="/">Home</Link>
//                 <Link to="/">Categories</Link>
//                 <Link to="/">Mens</Link>
//                 <Link to="/">Womens</Link>

//                 <Link to="/">Contact us</Link>
//                 <Link to="/">Home</Link>

//                 <Link to="/">Home</Link>

//             </nav>
//         </div>
//     )
// }