import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="container">
      <input 
        checked={false} 
        className="checkbox" 
        type="checkbox"
        onChange={() => {}} 
      />
      <div className="mainbox">
        <div className="iconContainer">
          <Search className="search_icon" strokeWidth={2} />
        </div>
        <input
          className="search_input"
          placeholder="Search documents..."
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
