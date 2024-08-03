import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Asset 1.svg"
import { json } from 'react-router-dom';
import { Search } from '../Sections/Search';
import { DropdownLoggedOut } from '../elements/DropdownLoggedOut';
import { DropdownLoggedIn } from '../elements/DropdownLoggedIn';
import { useCart } from '../../context';

export const Header = () => {
    const { cartList } = useCart();
    const [darkMode, setDarkMode] = useState(json(localStorage.getItem("darkMode")) || true);
    const [searchSection, setSearchSection] = useState(false);
    const [dropDown, setDropwown] = useState(false);
    const token = JSON.parse(sessionStorage.getItem("token"))
    useEffect(() => {
        localStorage.setItem("darkMode", json.toString(darkMode))
        if (darkMode) {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])
    return (
        <header>
            <nav className="bg-white dark:bg-gray-900">
                <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
                    <a href="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-10" alt=" Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EcomezPdf</span>
                    </a>
                    <div className="flex items-center relative">
                        <span onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                        <span onClick={() => setSearchSection(!searchSection)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                        <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
                            <span className="text-2xl bi bi-cart-fill relative">
                                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">{cartList.length}</span>
                            </span>
                        </Link>
                        <span onClick={() => setDropwown(!dropDown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                        {dropDown && (token ? <DropdownLoggedIn setDropwown={setDropwown} /> : <DropdownLoggedOut setDropwown={setDropwown} />)}
                    </div>
                </div>
            </nav>
            {searchSection && (<Search setSearchSection={setSearchSection} />)}

        </header>
    )
}