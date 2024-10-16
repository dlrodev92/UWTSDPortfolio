const ProjCardSkeleton = () => {
    return (
        <div className="xs:min-w-[340px] h-auto flex flex-col items-center gap-3 rounded-[25px] shadow-xl p-5 relative bg-gray-200 animate-pulse">
            <div className="relative w-full h-[200px] rounded-[25px] bg-gray-300"></div>
            <div className="w-3/4 h-6 bg-gray-300 rounded-md mt-4"></div>
            <div className="w-1/2 h-4 bg-gray-300 rounded-md mt-2"></div>
            <div className="flex flex-row gap-2 mt-2 w-full justify-center items-center">
                <div className="w-16 h-6 bg-gray-300 rounded-lg"></div>
                <div className="w-16 h-6 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="w-1/2 h-10 bg-gray-300 rounded-lg mt-4"></div>
        </div>
    );
};

export default ProjCardSkeleton;
