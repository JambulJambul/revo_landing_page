import React, { useState } from 'react';

function PortfolioCard({ item }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="w-full flex-shrink-0 bg-slate-800 bg-center shadow-lg rounded-lg cursor-pointer transition-transform transform h-[60vh] flex flex-col relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex-1 relative m-4">
                <img
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
                    src={item.imgUrl}
                    alt={item.title}
                    style={{ opacity: isHovered ? 0 : 1 }}
                />
                <img
                    className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300"
                    src={item.companyLogo}
                    alt=""
                    style={{ opacity: isHovered ? 1 : 0 }}
                />
            </div>
            <div className='p-6 bg-slate-600 rounded-lg'>
                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                <p className="text-gray-400">{item.subtitle}</p>
            </div>
        </div>
    );
}

export default PortfolioCard;
