import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    const [Active, setActive] = useState(0);
    const location = useLocation();
    const [submitting, setSubmitting] = useState(false);
    const Navigate = useNavigate();
    const [IsClicked, setIsClicked] = useState(false);

    const navItems = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Testimonials", path: "/testimonials" },
        { title: "Services", path: "/services" },
        { title: "Blog", path: "/blog" },
        { title: "Our Team", path: "/our-team" },
        { title: "Contact Us", path: "/contact-us" },
    ];

    return (
        <div className="absolute w-full z-10 bg-transparent">
            <div className="w-full py-4 px-8 flex justify-between items-center">
                <div className="flex cursor-pointer">
                    <img
                        src="https://149842022.v2.pressablecdn.com/illdy/wp-content/uploads/sites/58/2016/03/cropped-footer-logo-1.png"
                        alt="Logo"
                        className="h-10 w-auto object-contain"
                    />
                </div>
                <div className="flex gap-9 bg-transparent font-semibold">
                    {navItems.map((val, i) => (
                        <Link
                            key={i}
                            to={val.path}
                            className={`${val.path === location.pathname ? "text-blue-300" : "text-gray-400"
                                } hover:text-blue-400`}
                        >
                            <div onClick={() => setActive(i)}>{val.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
