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
                    style={{ borderColor: match ? "red" : "grey" }}
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
        <header className="container mx-auto sticky top-0 ">
            <div
                onClick={() => {
                    setOpen(!open);
                }}
                className="w-6 h-6 md:hidden"
            >
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <nav
                className={`md:flex justify-center absolute md:static duration-300 w-full ease-in ${
                    open ? "top-6" : "top-[-150px]"
                }`}
            >
                {routes.map((route) => (
                    <CustomLink
                        className="block md:p-4 ml-2 text-xl md:border-b-2 font-semibold uppercase hover:text-orange-600 hover:border-orange-600"
                        key={route.id}
                        to={route.link}
                    >
                        {route.name}
                    </CustomLink>
                ))}
            </nav>
        </header>
    );
};

export default Header;
