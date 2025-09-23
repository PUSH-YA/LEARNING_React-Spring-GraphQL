import React from 'react';


function PortfolioItem({ title, imgUrl, stack, link }) {
    return (
        <div className="border-2 border-stone-900 rounded-md overflow-hidden">
            <img 
                src={imgUrl} 
                alt='Portfolio' 
                className="w-full h-70 md:h-100 p-10 object-cover cursor-pointer" 
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm text-sm text-gray-600">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-300 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
                <a href={link} className="text-blue-500 hover:underline">View Project</a>
            </div>
        </div>
        
    )
}


export default PortfolioItem;