import Image from "next/image";
import Link from "next/link";

export default function Upload() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>Estás subiendo un proyecto</h1>
      <div className='mt-4'>
        <label htmlFor='name-input' className='text-lg'>
          Nombre
        </label>
        <br />
        <input
          type='text'
          name='name'
          id='name-input'
          className='p-2 border border-gray-300 rounded'
        />
      </div>
      <div className='mt-4'>
        <label htmlFor='description-input' className='text-lg'>
          Descripción
        </label>
        <br />
        <input
          type='text'
          name='type'
          id='type-input'
          className='p-2 border border-gray-300 rounded'
        />
      </div>
      <div className='mt-4'>
        <label htmlFor='type-input' className='text-lg'>
          Tipo
        </label>
        <br />
        <input
          type='text'
          name='event'
          id='event-input'
          className='p-2 border border-gray-300 rounded'
        />
      </div>
      <div className='mt-4'>
        <label htmlFor='event-input' className='text-lg'>
          Evento
        </label>
        <br />
        <input
          type='date'
          name='start'
          id='start-date-input'
          className='p-2 border border-gray-300 rounded'
        />
      </div>
      <div className='mt-4'>
        <label htmlFor='start-date-input' className='text-lg'>
          Fecha de inicio
        </label>
        <br />
        <input
          type='date'
          name='end'
          id='end-date-input'
          className='p-2 border border-gray-300 rounded'
        />
      </div>
      <div className='mt-4'>
        <label htmlFor='end-date-input' className='text-lg'>
          Fecha de fin
        </label>
        <br />
        <input
          type='number'
          name='minBetSize'
          id='minimum-bet-size-input'
          className='p-2 border border-gray-300 rounded'
        />
      </div>
      <div className='mt-4'>
        <label htmlFor='minimum-bet-size-input' className='text-lg'>
          Apuesta mínima
        </label>
        <br />
        <input
          type='number'
          name='maxBetSize'
          id='maximum-bet-size-input'
          className='p-2 border border-gray-300 rounded'
        />
      </div>
      <div className='mt-8'>
        <Link href='/dashboard' className='text-lg text-blue-500 hover:underline'>
          Subir el proyecto
        </Link>
      </div>
      <div className='mt-2'>
        <Link href='/dashboard' className='text-lg text-blue-500 hover:underline'>
          Rajar
        </Link>
      </div>
    </main>
  );
}

