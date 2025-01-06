import React from 'react';
import { TutorialCard } from '../components/TutorialCard';
import { Navbar } from '../components/Navbar';
import '../styles/tutorials.css';

export default function Tools() {
  const tools = [
    {
      title: "Format data THC Gabungan Pivot",
      description: "Format data THC gabungan yang sudah diselaraskan dengan tools THC.",
      url: "https://docs.google.com/spreadsheets/d/1i0cTy-rbn3iMdLAnjxLk0pwv5p6LQTJM/export?format=xlsx"
    },
    {
      title: "Format Laporan",
      description: "Contoh format laporan yang baik dan benar.",
      url: "https://drive.google.com/uc?export=download&id=1BAddVvqtT0ciWGan_3YR8SsRHG3gA6Ce"
    },
    {
      title: "Entrance, Exit, dan Berita Acara",
      description: "Contoh format berita acara, agenda entrance dan exit meeting.",
      url: "https://drive.google.com/uc?export=download&id=1SWTh4x1_19lFaTZX7Uz7Bwwv9jUpUmBy"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Tools" />
      <div className="tutorials-container pt-20">
        {tools.map((tool, index) => (
          <TutorialCard
            key={index}
            title={tool.title}
            description={tool.description}
            url={tool.url}
          />
        ))}
      </div>
    </div>
  );
}
