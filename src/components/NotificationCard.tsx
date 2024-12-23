import React from 'react';

interface NotificationCardProps {
  url: string;
  title: string;
  body: string;
}

export function NotificationCard({ url, title, body }: NotificationCardProps) {
  return (
    <a href={url} className="no-underline" target="_blank" rel="noopener noreferrer">
      <div className="notification">
        <div className="notiglow"></div>
        <div className="notiborderglow"></div>
        <div className="notititle">{title}</div>
        <div className="notibody">{body}</div>
      </div>
    </a>
  );
}