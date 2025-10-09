'use client'
import React from 'react'

const ProjectsSection = () => {
  const projects = [
    { name: 'Kammy Properties', url: 'https://kammyproperties.co.uk/', category: 'Real Estate', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&crop=center' },
    { name: 'McNif Cuisine', url: 'https://mcnifcuisine.co.uk/', category: 'Restaurant', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center' },
    { name: 'Bablo Homes', url: 'https://bablohomes.co.uk/', category: 'Real Estate', image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop&crop=center' },
    { name: 'Asegun', url: 'https://asegun.co.uk/', category: 'Business', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center' },
    { name: 'Dees Travels', url: 'https://deestravels.com/', category: 'Travel', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop&crop=center' },
    { name: '247 Travels', url: 'https://247travels.com/', category: 'Travel', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop&crop=center' },
    { name: 'Blee Bloo Services', url: 'https://bleeblooservices.co.uk/', category: 'Services', image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=300&fit=crop&crop=center' },
    { name: 'Green Atlas NG', url: 'https://greenatlasng.com/', category: 'Environment', image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center' },
    { name: 'Green Atlas UK', url: 'https://greenatlas.co.uk/', category: 'Environment', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=300&fit=crop&crop=center' }
  ]

  return (
    <section id="projects" className="min-h-screen bg-gray-50 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-2xl font-bold text-gray-900 relative inline-block">
            My Projects
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-500 animate-pulse w-16"></span>
          </h2>
          <p className="text-gray-600 mt-4 text-lg">A showcase of websites I've built and contributed to</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border-t-4 ${
              index % 4 === 0 ? 'border-blue-500 hover:border-blue-600' :
              index % 4 === 1 ? 'border-green-500 hover:border-green-600' :
              index % 4 === 2 ? 'border-purple-500 hover:border-purple-600' :
              'border-orange-500 hover:border-orange-600'
            }`}>
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE3NSAxMjVIMjI1TDIwMCAxNTBaIiBmaWxsPSIjOUI5QkEzIi8+CjxwYXRoIGQ9Ik0yMDAgMTUwTDE3NSAxNzVIMjI1TDIwMCAxNTBaIiBmaWxsPSIjOUI5QkEzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMjAwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOUI5QkEzIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiPldlYnNpdGUgUHJldmlldyBVbmF2YWlsYWJsZTwvdGV4dD4KPC9zdmc+'
                  }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity-50 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <h3 className="font-bold text-xl text-white drop-shadow-2xl">{project.name}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-sm rounded-full font-medium ${
                    index % 4 === 0 ? 'bg-blue-100 text-blue-800' :
                    index % 4 === 1 ? 'bg-green-100 text-green-800' :
                    index % 4 === 2 ? 'bg-purple-100 text-purple-800' :
                    'bg-orange-100 text-orange-800'
                  }`}>
                    {project.category}
                  </span>
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white text-center py-3 rounded-full transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection