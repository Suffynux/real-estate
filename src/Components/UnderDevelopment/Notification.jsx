// Notification.jsx
import React from 'react';

const Notification = ({ onClose }) => {
  return (
    <div className="fixed top-[40px] right-0 p-4 z-50">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 
          transform transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)]
          animate-[slideIn_0.5s_forwards]"
          onClick={onClose}>
        <h3 className="font-semibold">Website is Under Development</h3>
        <p className="text-sm text-gray-600">🚧 This feature is under development</p>
        <button 
          onClick={onClose} 
          className="mt-2 text-sm text-blue-600 hover:text-blue-800 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Notification;