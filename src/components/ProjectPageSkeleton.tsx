import React from "react";


const ProjectPageSkeleton = () => {
    return (
      <div className="w-full flex flex-col items-center gap-6 p-10 overflow-x-hidden">
        {/* Skeleton for title */}
        <div className="w-[80%] h-10 bg-gray-300 animate-pulse rounded"></div>
  
        {/* Skeleton for main image */}
        <div className="w-full h-64 bg-gray-300 animate-pulse rounded-md"></div>
  
        {/* Skeleton for second title */}
        <div className="w-[50%] h-8 bg-gray-300 animate-pulse rounded"></div>
  
        {/* Skeleton for first paragraph */}
        <div className="w-[80%] h-6 bg-gray-300 animate-pulse rounded"></div>
        <div className="w-[80%] h-6 bg-gray-300 animate-pulse rounded"></div>
       
      </div>
    );
  };
  
  export default ProjectPageSkeleton;
  