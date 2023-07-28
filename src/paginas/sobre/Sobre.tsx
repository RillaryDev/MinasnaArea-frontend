import React from 'react';




function Sobre() {
    return (
        <>
        <div className="bg-purple-200 flex justify-center">
          <div className='container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Sobre nós!</h2>
              <p className='text-xl'>Nossa trajetoria ate aqui</p>
  
              <div className="flex justify-around gap-4">
              
                <button className='rounded bg-green-100 text-blue-800 py-2 px-4'>Ler Historia</button>
              </div>
            </div>
  
        
          </div>
        </div>
      
      </>
    );
}

export default Sobre;