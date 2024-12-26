import React, { useState, useMemo } from 'react';
import { Navbar } from '../components/Navbar';
import { SearchBar } from '../components/SearchBar';
import { DocumentCard } from '../components/DocumentCard';
import { documents } from '../data/documents';
import '../styles/companyRegulations.css';

export default function CompanyRegulations() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDocuments = useMemo(() => {
    if (!searchQuery) return documents;
    
    const searchTerms = searchQuery.toLowerCase().split(' ');
    return documents.filter(doc => {
      const searchableText = `${doc.title} ${doc.description} ${doc.type} ${doc.keywords.join(' ')}`.toLowerCase();
      return searchTerms.every(term => searchableText.includes(term));
    });
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Company Regulations" />
      
      <div className="container mx-auto px-4 pt-8 pb-8">
        <div className="search-container mb-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {filteredDocuments.length === 0 ? (
          <div className="text-center text-gray-500 mt-8">
            No documents match your search
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDocuments.map((doc) => (
              <DocumentCard key={doc.id} document={doc} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
