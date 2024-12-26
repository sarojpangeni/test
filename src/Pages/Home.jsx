import React from 'react';

function Home() {
    return (
        <div className="relative min-h-screen ">
            <div className="absolute inset-0 z-0 bg-black ">
                <img
                    src="https://images.unsplash.com/photo-1719937206168-f4c829152b91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Background"
                    className="w-full h-full object-cover top-0 opacity-50"
                />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center py-44">
                <h1 className="text-6xl font-bold text-white mb-5">
                    Clean<span className="text-yellow-300">.</span>
                    Slick<span className="text-yellow-300">.</span>
                    Pixel Perfect
                </h1>
                <p className="text-xl text-white font-semibold mx-auto px-5 max-w-3xl">
                    Illdy is a great one-page theme, perfect for developers and designers but also for someone who
                    just wants a new website for their business. Try it now!
                </p>
                <div className="flex justify-center gap-7 mt-10">
                    <button className="bg-transparent border-2 border-white text-white font-semibold py-2 px-6 hover:bg-blue-600 transition duration-300 w-40">
                        Learn More
                    </button>
                    <button className="bg-yellow-500 border-2 border-yellow-500 text-white font-semibold py-2 px-6 hover:bg-green-600 transition duration-300 w-40">
                        Download
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
