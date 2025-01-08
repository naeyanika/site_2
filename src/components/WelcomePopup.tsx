import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface WelcomePopupProps {
  displayName: string;
  onClose: () => void;
}

export function WelcomePopup({ displayName, onClose }: WelcomePopupProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/20">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full mx-4 transform animate-welcome">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back! 👋🙌🫰
            </h3>
            <p className="text-xl text-gray-600">
              Hey {displayName}, hope you have a great day! ✨✨
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
