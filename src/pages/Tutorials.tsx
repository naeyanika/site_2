import React from 'react';
import { TutorialCard } from '../components/TutorialCard';
import { Navbar } from '../components/Navbar';
import '../styles/tutorials.css';

export default function Tutorials() {
  const tutorials = [
    {
      title: "Tutorial THC",
      description: "Cara mengolah THC menggunakan menu Pengolahan THC.",
      url: "https://docs.google.com/uc?export=download&id=1Tsy8Tg8Xx4nVOGG1DyxcOVO_GHIOPf74"
    },
    {
      title: "Tutorial Olah THC Manual",
      description: "Pengolahan THC secara manual dengan excel.",
      url: "https://docs.google.com/uc?export=download&id=1HzV2ZHKOGMFHg9DGhr_W1Vg8EoL5DObU"
    },
    {
      title: "Tutorial Setting Edge",
      description: "Cara atur ulang edge untuk membuka MDIS.",
      url: "https://docs.google.com/uc?export=download&id=1HRRpcwsrCAD4RTziFmcHm_OMg0Vk_6mp"
    },
    {
      title: "Tutorial Format Data",
      description: "Memindahkan data dari menu ke-6 Pengolahan THC.",
      url: "https://drive.google.com/file/d/1vI3YGzV-ghESw-_Jtzreydhx_VE16pLn/view?usp=drive_link"
    },
    {
      title: "Tutorial THC Pinjaman",
      description: "Pembuatan THC Pinjaman, didalam tools sudah tersedia kriteria yang di gunakan apa saja.",
      url: "https://drive.google.com/uc?export=download&id=1WOVOK4rj6g1BhJdDTLOUnXWmxZZeyJjD"
    },
    {
      title: "Tutorial Analisa Anomali",
      description: "Penggunaan modul analisa anomali keseluruhan.",
      url: "https://drive.google.com/uc?export=download&id=1woc7ECpSd07cxNd264VpACnpQprzsurv"
    },
    {
      title: "Tutorial pembuatan laporan",
      description: "Ini adalah guidelines atau ketentuan mengenai pembuatan laporan",
      url: "https://docs.google.com/document/d/15dE7Cd7F_hZmEcdO59CILLgdLqx4yN2fvukEEeWeLLc/edit?usp=sharing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar title="Tutorials" />
      <div className="tutorials-container pt-20">
        {tutorials.map((tutorial, index) => (
          <TutorialCard
            key={index}
            title={tutorial.title}
            description={tutorial.description}
            url={tutorial.url}
          />
        ))}
      </div>
    </div>
  );
}
