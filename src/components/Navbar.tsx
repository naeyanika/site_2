import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavbarProps {
  title: string;
}

export function Navbar({ title }: NavbarProps) {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      <button
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        Back
      </button>
    </nav>
  );
}