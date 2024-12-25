import React from 'react';

function Portfolio() {
  const projects = [
    {
      src: "https://plus.unsplash.com/premium_photo-1734354794200-49aec81e395d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",
      alt: "Project 1",
    },
    {
      src: "https://images.unsplash.com/photo-1734187255412-83404a7d16da?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
      alt: "Project 2",
    },
    {
      src: "https://images.unsplash.com/photo-1512484580809-b5251c5df9dd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
      alt: "Project 3",
    },
    {
      src: "https://images.unsplash.com/photo-1608086042577-50e786b68c84?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      alt: "Project 4",
    },
  ];

  return (
    <div className="bg-white flex flex-col py-16 font-sans items-center justify-center text-gray-800 px-10">
      <h1 className="text-3xl font-bold z-10">Projects</h1>
      <p className="py-2 text-gray-600">You'll love our work. Check it out!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              className="h-60 w-full object-cover group-hover:scale-110 transition duration-300"
              src={project.src}
              alt={project.alt}
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                {project.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
