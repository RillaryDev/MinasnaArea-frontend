import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-purple-600 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-title text-white-100'>Minas na Área | Copyright: </p>
            <p className='text-lg font-title text-white-100'>Acesse nossas redes sociais</p>
            <div className='flex gap-2   text-white-100'>
              <LinkedinLogo size={40} weight='bold' />
              <InstagramLogo size={40} weight='bold' />
              <FacebookLogo size={40} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer