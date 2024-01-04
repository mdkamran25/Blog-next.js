import React from "react";

const Skeleton = ({key}) => {
  return (
    <div
  key={key}
  className="hover:shadow-indigo-500/40 max-w-sm rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105">
  <div className="aspect-w-16 aspect-h-10 h-[100px]">
    <div className="bg-gray-300 animate-pulse w-[100%] h-[100px]"></div>
  </div>
  <div className="px-6 py-4 animate-pulse w-[100%] h-[50px]">
    <div className="font-bold text-gray-700 text-xl mb-2 animate-pulse w-[100%] h-[100px]">
      
    </div>
    <p className="text-gray-700 text-base animate-pulse w-[40px] h-[20px]">
      
    </p>
  </div>
  <div className="px-6 pt-4 pb-2 h-[100px]">
    <span className="h-[20px] w-[40px] inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 animate-pulse">
     
    </span>
    <span className="h-[20px] w-[40px] inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 animate-pulse">
      
    </span>
    <span className="h-[20px] w-[40px] inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 animate-pulse">
      
    </span>
  </div>
</div>

  );
};

export default Skeleton;
