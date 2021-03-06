import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Header = () => {
    function CustomLink({ children, to, ...props }: LinkProps) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{
                        borderColor: match ? "rgb(234 88 12)" : "",
                        color: match ? "rgb(234 88 12)" : "",
                    }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", link: "/home" },
        { id: 2, name: "Reviews", link: "/reviews" },
        { id: 3, name: "Dashboard", link: "/dashboard" },
        { id: 4, name: "Blogs", link: "/blogs" },
        { id: 5, name: "About", link: "/about" },
    ];
    return (
        <header className=" flex justify-center sticky top-0 bg-white/75 z-50 shadow-sm ">
            <div className="container">
                <div className="flex md:block bg-white/75">
                    <div
                        onClick={() => {
                            setOpen(!open);
                        }}
                        className="w-12 h-12 md:hidden ml-1 "
                    >
                        {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
                    </div>
                    <h2 className="text-center text-3xl mx-auto z-50">
                        Smart Watch Guide
                    </h2>
                </div>
                <nav
                    className={`md:flex justify-center absolute md:static duration-300 w-full ease-in pb-2 ${
                        open ? "top-10" : "top-[-250px] bg-white/75"
                    }`}
                >
                    {routes.map((route) => (
                        <CustomLink
                            className="block p-3 md:p-4 md:ml-3 md:pt-2 text-l md:border-b-2 border-slate-300 font-semibold uppercase hover:text-orange-600 hover:border-orange-600 z-50 bg-white/100"
                            key={route.id}
                            to={route.link}
                        >
                            {route.name}
                        </CustomLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
