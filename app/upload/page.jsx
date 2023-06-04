import Image from "next/image"
import Link from "next/link"

export default function Upload() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-4xl font-bold'>Estás subiendo un proyecto</h1>
      <label htmlFor='name-input'>Nombre</label> <br />
      <input type='text' name='name' id='name-input' /> <br />
      <label htmlFor='description-input'>Descripción</label> <br />
      <input type='text' name='type' id='type-input' /> <br />
      <label htmlFor='type-input'>Tipo</label> <br />
      <input type='text' name='event' id='event-input' /> <br />
      <label htmlFor='event-input'>Evento</label> <br />
      <input type='date' name='start' id='start-date-input' /> <br />
      <label htmlFor='start-date-input'>Fecha de inicio</label> <br />
      <input type='date' name='end' id='end-date-input' /> <br />
      <label htmlFor='end-date-input'>Fecha de fin</label> <br />
      <input type='number' name='minBetSize' id='minimum-bet-size-input' /> <br />
      <label htmlFor='minimum-bet-size-input'>Apuesta mínima</label> <br />
      <input type='number' name='maxBetSize' id='maximum-bet-size-input' /> <br />
      <Link href='/dashboard'>Subir el proyecto</Link>
      <br />
      <Link href='/dashboard'>Rajar</Link>
    </main>
  )
}
