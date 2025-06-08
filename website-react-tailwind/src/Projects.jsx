import React, { useState } from 'react'

const Projects = () => {
    const imagesData=[
        {id:1,category:'All',title:"All Designs", img:"home.png"},
        {id:2,category:'Popular',title:"Popular Designs", img:"about.png"},
        {id:3,category:'Latest',title:"Latest Designs", img:"home.png"},
    ]
    const categories=['All','Popular','Latest']
    const[activeCategory,setActiveCategory]=useState('All')
    const filteredImages=
    activeCategory === 'All' ? imagesData : imagesData.filter((image) => image.category === activeCategory)
  return (
    <div>
      <div className='container mx-auto p-5'>
        <div className='flex justify-center space-x-4 mb-6'>
            {categories.map((category) =>(
                <button key={category} onClick={() => setActiveCategory(category)}
                 className={`px-4 py-2 rounded-md font-medium ${
                    activeCategory === category ? 'bg-purple-600 text-white' 
                    : "bg-gray-200 text-gray-700"
                 }`}
                >{category}</button>
            ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-6'>
            {filteredImages.map((image) =>(
                <div key={image._id} className='bg-white rounded-md shadow-lg'>
                    <img src={image.img} alt={image.title}
                     className='w-full h-50 object-cover rounded-t-md'
                    ></img>
                    <div className='p-4'>
                        <h2 className='text-sm text-gray-500'>{image.title}</h2>

                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}
export default Projects
