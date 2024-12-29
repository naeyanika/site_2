import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';

interface AnnouncementPopupProps {
  title: string;
  message: string;
  onView?: () => void;
  onDismiss?: () => void;
}

export function AnnouncementPopup({ 
  title, 
  message, 
  onView, 
  onDismiss 
}: AnnouncementPopupProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div
      role="alert"
      className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-lg rounded-lg border border-blue-100 bg-white p-4 shadow-lg sm:p-6 lg:p-8 z-50"
    >
      <div className="flex items-center gap-4">
        <span className="shrink-0 rounded-full bg-blue-600 p-2 text-white">
          <Bell className="h-4 w-4" />
        </span>
        <p className="font-medium sm:text-lg text-blue-600">{title}</p>
        <button 
          onClick={handleDismiss}
          className="ml-auto text-gray-400 hover:text-gray-500"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <p className="mt-4 text-gray-600">
        {message}
      </p>

      <div className="mt-6 sm:flex sm:gap-4">
        {onView && (
          <button
            onClick={() => {
              onView();
              handleDismiss();
            }}
            className="inline-block w-full rounded-lg bg-blue-600 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-700 sm:w-auto"
          >
            View Details
          </button>
        )}

        <button
          onClick={handleDismiss}
          className="mt-2 inline-block w-full rounded-lg bg-gray-100 px-5 py-3 text-center text-sm font-semibold text-gray-800 hover:bg-gray-200 sm:mt-0 sm:w-auto"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
