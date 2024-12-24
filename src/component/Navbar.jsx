import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Navbar() {
    const [Active, setActive] = useState(0)
    const location = useLocation();
    const [submitting, setSubmitting] = useState(false)
    const Navigate = useNavigate()
    const [IsClicked, setIsClicked] = useState(false)
    console.log(location.path, 'location')



    const navItems = [
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Portfolio",
            path: "/portfolio"
        },
        {
            title: "Testimonials",
            path: "/testimonials"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Our Team",
            path: "/our-team"
        },
        {
            title: "Contact Us",
            path: "/contact-us"
        }
    ]

    return (
        <div>
            <div className="w-full bg-opacity-50 py-4 px-8 flex justify-between items-center bg-transparent">
                <div className="flex cal-sm-4 col-xs-8 cursor-pointer opacity-100 bg-inherit px-44">
                    <img
                        src='https://149842022.v2.pressablecdn.com/illdy/wp-content/uploads/sites/58/2016/03/cropped-footer-logo-1.png'
                        alt='logo'
                        className='h-15 w-15 size-30' />
                </div>
                <div className='flex gap-9 bg-transparent font-semibold px-20 text-white'>
                    {
                        navItems.map((val, i) => {
                            return (
                                <Link key={i} to={val.path}
                                    className='flex ${va.path === location.pathname ? "text-blue-300":"text-gray-400"}'
                                >
                                    <div onClick={() => {
                                        setActive(i)
                                    }}>{val.title}</div>
                                </Link>
                            )
                        })
                    }
                </div>  
            </div>
            <div className='py-44'>
            <div >
                <h1 className='flex items-center justify-center text-6xl font-bold space-x-2 space-y-2 text-white m-5'>
                    Clean<span class="span-dot text-yellow-300">.</span>
                    Slick<span class="span-dot text-yellow-300">.</span>
                    Pixel Perfect
                </h1>
            </div>
            <div className='items-center justify-center text-white '>
                <div className='flex items-center justify-center py-4 px-5 m-10 p-40 text-xl font-semibold'>
                    lldy is a great one-page theme,
                    perfect for developers and designers but also for someone who just wants a new website for his business.
                    Try it now!
                </div>
                <div className="flex items-center gap-7 py-5 justify-center text-xl">
                    <button className="bg-transparent border-2 text-white font-semibold py-2 px-6  hover:bg-blue-600 transition duration-300 w-60 h-20">
                        Learn More
                    </button>
                    <button className="bg-yellow-500 border-2 text-white font-semibold py-2 px-6 hover:bg-green-600 transition duration-300 w-60 h-20">
                        Download
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Navbar