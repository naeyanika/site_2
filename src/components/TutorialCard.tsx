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
        <p className="title">{title}</p>
        <div className="card-hidden">
          <p className="title-in">{title}</p>
          <p>{description}</p>
          <a href={url} className="button" target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </div>
      </div>
      <div className="card-border"></div>
    </div>
  );
}