

const Paragraph = ({ children }) => {
  return (
    <p className="font-Jost text-lg xs:text-base lg:text-xl text-blueBackground shadow-inner p-4  w-[80%] rounded-md">
      {children}
    </p>
  );
};

export default Paragraph;
