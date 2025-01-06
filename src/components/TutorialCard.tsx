import React from 'react';

interface TutorialCardProps {
  title: string;
  description: string;
  url: string;
}

export function TutorialCard({ title, description, url }: TutorialCardProps) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-hidden">
          <h3 className="title">{title}</h3>
          <p>{description}</p>
        </div>
        <a href={url} className="button" target="_blank" rel="noopener noreferrer">
          Download
        </a>
      </div>
    </div>
  );
}
