import React from 'react';
import NavBar from '@/components/NavBar';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <main className="w-screen h-screen bg-red-500">
      <NavBar />
      <div id="body" className="w-full flex flex-col items-center justify-center">
        <p className="text-3xl text-white mb-8 font-bold">
          Aqui puedes ver proyectos y puedes subir tu proyecto, que esperas
        </p>
        <div className="flex items-center justify-center space-x-4">
          <Link className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" href="/fund">
              Soy un proyecto, clickeame
          </Link>
          <Link className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" href="/upload">
              Upload
          </Link>
        </div>
      </div>
    </main>
  );
}
