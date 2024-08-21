import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaTimes } from 'react-icons/fa';

const FlashMessage = ({ message, type, duration = 4000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && message && (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.3 }} className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50" >
          <div  className={`px-6 py-3 rounded-lg flex items-center shadow-lg border ${ type === "error" ? "bg-red-100 text-red-800 border-red-300" : "bg-green-100 text-green-800 border-green-300" }`}  role="alert" >
            
            { type === "error" ? <FaExclamationCircle className="w-5 h-5 text-red-500" /> : <FaCheckCircle className="w-5 h-5 text-green-500" /> }
            <span className="ml-3 block text-sm font-medium">{message}</span>
            <button onClick={() => { setIsVisible(false); onClose(); }} className="ml-6 focus:outline-none">
              <FaTimes className="w-5 h-5 text-gray-500 hover:text-gray-700" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlashMessage;