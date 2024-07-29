const References = ({ references }) => {
    return (
      <div className="w-full flex flex-col gap-4">
        <ol className="list-decimal list-inside pl-5">
          {references.map((ref, index) => (
            <li key={index} className="flex flex-col break-words ">
              <span>
                {index + 1} - {ref.text}
                {ref.link && (
                  <a href={ref.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline ml-1">
                    [Online]
                  </a>
                )}
              </span>
              {ref.link && <a href={ref.link} target="_blank" rel="noopener noreferrer"> <span >Available: </span> <span className="text-blue-500 underline ml-1"> {ref.link}</span></a>}
              {ref.accessDate && <span className="text-black/90">[Accessed: {ref.accessDate}]</span>}
            </li>
          ))}
        </ol>
      </div>
    );
  };
  
  export default References;