import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FlashMessage = ({ message, type, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  const bgColor = type === 'error' ? 'bg-red-300' : 'bg-accent';
  const textColor = 'text-background';

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 z-50"
          style={{ left: '50%', translateX: '-50%' }}
        >
          <div className={`${bgColor} ${textColor} px-6 py-3 rounded-lg flex gap-10 items-center shadow-lg`} role="alert">
            <span className="block text-sm font-medium">{message}</span>
            
            <button onClick={onClose}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FlashMessage;