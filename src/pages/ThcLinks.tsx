import React from 'react';
import { NotificationCard } from '../components/NotificationCard';
import { Navbar } from '../components/Navbar';
import '../styles/thcLinks.css';

export default function ThcLinks() {
  const links = [
    {
      url: "https://olah-data-thc.streamlit.app/",
      title: "THC Link!",
      body: "Tekan disini untuk link utama!"
    },
    {
      url: "https://thc-alter-2.streamlit.app/",
      title: "THC Link!",
      body: "Tekan disini untuk Alternative Link 2"
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