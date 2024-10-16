import { motion } from "framer-motion";

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((image) => (
        <motion.img
          key={image.id}
          src={image.imageUrl}
          loading="lazy"
          alt={image.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-[200px] object-cover rounded-md shadow-lg"
        />
      ))}
    </div>
  );
};

export default ImageGrid;
