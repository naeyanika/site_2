import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { WelcomePopup } from '../components/WelcomePopup';
import { AnnouncementPopup } from '../components/AnnouncementPopup';
import { LogOut } from 'lucide-react';
import '../styles/dashboard.css';

export default function Home() {
  const { logout, profile, loginSuccess } = useAuth();
  const navigate = useNavigate();
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
  if (loginSuccess) {
    setShowWelcome(true);
  }
}, [loginSuccess]);
  
  useEffect(() => {
    const checkAnnouncement = () => {
      const lastSeen = localStorage.getItem('announcementLastSeen');
      
      if (lastSeen) {
        const lastSeenDate = new Date(parseInt(lastSeen));
        const today = new Date();
        
        // Check if last seen was on a different day
        const isSameDay = 
          lastSeenDate.getDate() === today.getDate() &&
          lastSeenDate.getMonth() === today.getMonth() &&
          lastSeenDate.getFullYear() === today.getFullYear();
        
        setShowAnnouncement(!isSameDay);
      }
    };
    
    checkAnnouncement();
  }, []);

  const handleViewUpdate = () => {
    localStorage.setItem('announcementLastSeen', Date.now().toString());
    setShowAnnouncement(false);
    navigate('/tools');
  };

  const handleDismiss = () => {
    localStorage.setItem('announcementLastSeen', Date.now().toString());
    setShowAnnouncement(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      { showAnnouncement && (
      <AnnouncementPopup
        title="New update!"
        message="There is a new update regarding tools, it is now accessible. Click 'View Details' to learn more about the changes."
        onView={handleViewUpdate}
        onDismiss={handleDismiss}
        />
        )}
    
      {showWelcome && profile && (
    <WelcomePopup 
      displayName={profile.display_name} 
      onClose={() => {
        setShowWelcome(false);
        setLoginSuccess(false); // Reset loginSuccess after popup is shown
      }} 
    />
  )}
      
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold">OPTIMA</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://risk-issue.streamlit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="header-button"
              >
                Audit Rating
              </a>
              <a 
                href="https://risk-control-matriks.streamlit.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="header-button"
              >
                RCM
              </a>
              <button
                onClick={logout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto flex-grow">
        <section id="data-processing">
          <h2>Pengolahan THC</h2>
          <div className="menu-grid">
            <Link to="/thc-links" className="no-underline">
              <div className="menu-item">
                <h3>01. THC</h3>
                <p>Pengolahan data ini menggunakan bahan THC, Db Simpanan dan Db Pinjaman.</p>
              </div>
            </Link>
            
            <a href="https://tr-anggota-keluar.streamlit.app/" className="no-underline" target="_blank">
              <div className="menu-item">
                <h3>02. TAK</h3>
                <p>Pengolahan data ini menggunakan bahan TAK dan Db Simpanan.</p>
              </div>
            </a>

            <a href="https://tlp-kdp.streamlit.app/" className="no-underline" target="_blank">
              <div className="menu-item">
                <h3>03. TLP & KDP</h3>
                <p>Pengolahan data ini menggunakan bahan TLP, KDP dan Db Pinjaman.</p>
              </div>
            </a>

            <a href="https://merge-app.streamlit.app/" className="no-underline" target="_blank">
              <div className="menu-item">
                <h3>04. VLOOK-UP & N/A</h3>
                <p>Pengolahan data ini menggunakan bahan data sebelumnya yang N/A dan sudah dicari secara manual.</p>
              </div>
            </a>

            <a href="https://merge-dbcr.streamlit.app/" className="no-underline" target="_blank">
              <div className="menu-item">
                <h3>05. Merge Simpanan & Pinjaman</h3>
                <p>Pengolahan data ini menggunakan bahan data sebelumnya (Pivot Simpanan dan Pinjaman N/A yang sudah di Vlookup dan disatukan dengan pivot pinjaman).</p>
              </div>
            </a>

            <a href="https://format-data-thc-gabungan.streamlit.app/" className="no-underline" target="_blank">
              <div className="menu-item">
                <h3>06. Format Data THC Gabungan</h3>
                <p>Pengolahan data ini menggunakan bahan data sebelumnya (THC Final yang gabungan dari Simpanan dan Pinjaman, TLP, dan KDP).</p>
              </div>
            </a>
          </div>
        </section>
        
        <section id="pengolahan-anomali">
          <h2>Pengolahan Anomali</h2>
          <div className="menu-grid">
            <a href="https://thc-simpanan.streamlit.app/" target="_blank" className="no-underline">
              <div className="menu-item">
                <h3>THC Simpanan</h3>
                <p>Pengolahan data ini berdasarkan nilai rata-rata, nilai yang sering muncul dan nilai yang berbeda jauh dari kebiasaan anggota.</p>
              </div>
            </a>

            <a href="https://pinjaman-ke.streamlit.app/" target="_blank" className="no-underline">
              <div className="menu-item">
                <h3>THC Pinjaman</h3>
                <p>Pengolahan data ini berdasarkan ketentuan plafon pembiayaan per pinjaman ke-, jangka waktu, jenis pinjaman (sanitasi), masuk atau tidak nya ke dalam simpanan (25%).</p>
              </div>
            </a>

            <a href="https://anomali-keseluruhan.streamlit.app/" target="_blank" className="no-underline">
              <div className="menu-item">
                <h3>Analisa Anomali Keseluruhan</h3>
                <p>Pengolahan data ini bertujuan untuk menganalisa total anomali antara pinjaman dan simpanan berdasarkan Petugas Lapang, Center Meeting dan Jadwal Center Meeting.</p>
              </div>
            </a>

            <a href="https://filter-anggota-lebih-dari-8.streamlit.app/" target="_blank" className="no-underline">
              <div className="menu-item">
                <h3>Anggota lebih dari 8</h3>
                <p>Pengolahan data ini bertujuan untuk memfilter anggota di center yang lebih dari 8 berdasarkan nilai transaksi harian.</p>
              </div>
            </a>

            <a href="https://filter-prr.streamlit.app/" target="_blank" className="no-underline">
              <div className="menu-item">
                <h3>Filter Pencairan Renovasi Rumah</h3>
                <p>Pengolahan data ini bertujuan untuk mengecek pencairan renovasi rumah, sesuai ketentuan atau tidaknya.</p>
              </div>
            </a>

            <a href="https://danaresiko.streamlit.app/" target="_blank" className="no-underline">
              <div className="menu-item">
                <h3>Anomali Danaresiko</h3>
                <p>Pengolahan data ini bertujuan untuk mengecek data anggota dan yang diajukan danaresiko.</p>
              </div>
            </a>
          </div>
        </section>
        
      </main>

<footer className="bg-white shadow-sm mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col items-center justify-center space-y-2">
            <h2 className="text-lg font-semibold text-gray-800">Operational Performance and Internal Audit Management Application</h2>
            <p className="text-sm text-gray-600">© {new Date().getFullYear()} All rights reserved.</p>
            <div className="flex space-x-4 text-sm text-gray-500">
  <Link to="/tutorials">
    <a className="hover:text-gray-700">Documentation</a>
  </Link>
  <Link to="/tools">
    <a className="hover:text-gray-700">Tools-update</a>
  </Link>
  <Link to="/company-regulations">
    <a className="hover:text-gray-700">Company-Regulations</a>
  </Link>
            </div>
          </div>
        </div>
      </footer>
</div>
  );
}
