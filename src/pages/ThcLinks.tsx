import React from 'react';
import { NotificationCard } from '../components/NotificationCard';
import { Navbar } from '../components/Navbar';
import '../styles/thcLinks.css';

export default function ThcLinks() {
  const links = [
    {
      url: "https://olah-data-thc.streamlit.app/",
      title: "THC Link 1!",
      body: "Regional : A, B, C!"
    },
    {
      url: "https://thc-alter-2.streamlit.app/",
      title: "THC Link 2!",
      body: "Regional D, E, F!"
    },
    {
      url: "https://thc-alter-0103.streamlit.app/",
      title: "THC Link 3!",
      body: "Regional G, H, I!"
    },
    {
      url: "https://thc-0104.streamlit.app/",
      title: "THC Link 4!",
      body: "Regional J, K, L!"
    },
    {
      url: "https://thc-0105.streamlit.app/",
      title: "THC Link 5!",
      body: "Regional M, N, O!"
    },
    {
      url: "https://thc-0106.streamlit.app/",
      title: "THC Link 6!",
      body: "Regional P, Q, R, S!"
    },
    {
      url: "https://thc-link-adm.streamlit.app/",
      title: "Admin Only",
      body: "This links only for admin's!"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar title="THC Links" />
      <div className="notification-container pt-20">
        {links.map((link, index) => (
          <NotificationCard
            key={index}
            url={link.url}
            title={link.title}
            body={link.body}
          />
        ))}
      </div>
    </div>
  );
}
