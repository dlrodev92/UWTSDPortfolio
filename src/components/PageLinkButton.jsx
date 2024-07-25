
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageLinkButton = ({ to, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="inline-block"
    >
      <Link
        to={to}
        className="bg-blueBackground text-white font-Jost text-lg py-2 px-4 rounded-md transition-colors duration-300 hover:bg-blue-700"
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default PageLinkButton;
