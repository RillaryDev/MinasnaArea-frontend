import React from 'react'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-purple-100 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-sans uppercase'>Minas na Área</div>

            <div className='flex gap-4 font-sans'>
              <div className='hover:underline'>Mentoria</div>
              <div className='hover:underline'>Sobre</div>
              <div className='hover:underline'>Contato</div>
              <div className='hover:underline rounded bg-green-100 px-2'>Entrar</div>
              
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar