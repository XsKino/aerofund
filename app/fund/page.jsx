import React from 'react';
import Link from 'next/link';

export default function Upload() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Este es un proyecto</h1>
      <article className="max-w-2xl mx-auto mt-8 bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Proyecto de Deshacer el Plástico</h2>
        <p className="mb-4">
          La empresa ABC se ha embarcado en un proyecto innovador para abordar el problema del plástico y su impacto en el medio ambiente. El proyecto se centra en el desarrollo de métodos químicos para descomponer eficientemente el plástico y promover la economía circular.
        </p>
        <p className="mb-4">
          El equipo de investigación de la empresa ha estado trabajando en la identificación de reacciones químicas específicas que pueden descomponer los diferentes tipos de plástico en sus componentes básicos. Estas reacciones permiten convertir el plástico en productos químicos más simples y menos perjudiciales para el medio ambiente.
        </p>
        <p className="mb-4">
          El proyecto ha logrado avances significativos en la descomposición de plásticos comunes como el polietileno y el polipropileno. Además, se ha trabajado en la optimización del proceso para hacerlo más eficiente y escalable.
        </p>
        <p className="mb-4">
          La empresa ABC está comprometida con la promoción de soluciones sostenibles para el problema del plástico y continúa invirtiendo en investigación y desarrollo. Este proyecto representa un paso importante hacia la reducción de la contaminación por plásticos y la promoción de un futuro más limpio y sostenible.
        </p>
        <div className="flex justify-end">
          <Link className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" href="/project-details">
              Ver más detalles
          </Link>
        </div>
      </article>
      <div className="flex flex-col space-y-4">
        <Link className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" href="/upload">
            Apuesta en un sueño
        </Link>
        <Link className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" href="/dashboard">
            Mejor no
        </Link>
      </div>
    </main>
  );
}
