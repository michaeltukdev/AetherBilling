import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';

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
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.3 }} className="fixed bottom-8 transform left-0 right-0 max-w-[700px] mx-auto z-50" >
          <div className={`px-6 py-3 rounded-lg flex justify-between items-center shadow-lg border ${type === "error" ? "bg-red-100 text-red-700 border-red-200" : "bg-green-100 text-green-800 border-green-300"}`} role="alert" >

            <div className='flex items-center'>
              {type === "error" ? <FaExclamationCircle className="w-5 h-5 text-red-500" /> : <FaCheckCircle className="w-5 h-5 text-green-500" />}
              <span className="ml-3 block text-sm font-medium">{message}</span>
            </div>

            <button onClick={() => { setIsVisible(false); onClose(); }} className="ml-6 focus:outline-none">
              <FaTimes className="w-4 h-4 text-background hover:text-input-border transition" />
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlashMessage;