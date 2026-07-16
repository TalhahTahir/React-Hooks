import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../contexts";

const Navbar = () => {

    const { searchParam, setSearchParam, handleSubmit } = useContext(GlobalContext);


  return (
   <nav className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 py-6 px-4 lg:px-8">
    
    {/* Brand Logo */}
    <h2 className="text-3xl font-extrabold tracking-tight">
        <NavLink
            to={"/"}
            className="text-stone-900 hover:text-amber-500 transition-colors duration-300"
        >
            Food<span className="text-amber-500">Recipe</span>
        </NavLink>
    </h2>

    {/* Search Form */}
    <form onSubmit={handleSubmit} className="w-full lg:w-auto flex-1 flex justify-center">
        <div className="relative w-full max-w-md">
            <input
                type="text"
                placeholder="Search recipes..."
                name="search"
                value={searchParam}
                onChange={(e) => setSearchParam(e.target.value)}
                className="w-full bg-white px-6 py-3 rounded-full outline-none shadow-sm border border-stone-200 focus:border-amber-400 focus:shadow-md transition-all duration-300 text-stone-700 placeholder-stone-400"
            />
        </div>
    </form>

    {/* Navigation Links */}
    <ul className="flex flex-wrap justify-center items-center gap-6 font-semibold text-stone-600">
        <li>
            <NavLink
                to={"/"}
                className="hover:text-amber-500 transition-colors duration-300"
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/favorites"}
                className="hover:text-amber-500 transition-colors duration-300"
            >
                Favourites
            </NavLink>
        </li>
        
        {/* Divider */}
        <div className="h-6 w-px bg-stone-300 hidden sm:block"></div>

        {/* Developer Link */}
        <li>
            <a 
                href="https://github.com/TalhahTahir" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-stone-900 text-white rounded-full hover:bg-stone-700 hover:-translate-y-0.5 transition-all duration-300 text-sm tracking-wide shadow-md"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                Talha
            </a>
        </li>
    </ul>
</nav>
  );
};

export default Navbar;
