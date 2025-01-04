import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';

interface AnnouncementPopupProps {
  title: string;
  message: string;
  onView?: () => void;
  onDismiss?: () => void;
}

export function AnnouncementPopup({ title, message, onView, onDismiss }: AnnouncementPopupProps) {
  return (
    <div className="fixed top-4 right-4 max-w-sm bg-white rounded-lg shadow-lg p-4 border border-gray-200 z-50">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <button
          onClick={onDismiss}
          className="text-gray-400 hover:text-gray-500"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <p className="mt-2 text-sm text-gray-600">{message}</p>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={onView}
          className="text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
