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
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-16 pb-4"> {/* Reduced top padding */}
          <div className="search-container">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>

          {filteredDocuments.length === 0 ? (
            <div className="text-center text-gray-500 mt-8">
              No documents match your search
            </div>
          ) : (
            <div className="documents-grid mt-6"> {/* Added margin top */}
              {filteredDocuments.map((doc) => (
                <DocumentCard key={doc.id} document={doc} />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
