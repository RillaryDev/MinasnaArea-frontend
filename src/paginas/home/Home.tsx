import React from 'react';
import homeLogo from '../../assets/minas.jpg'
import './Home.css';


function Home() {
    return (
        <>
        <div className="bg-purple-200 flex justify-center">
          <div className='w-2/9 container grid grid-cols-2 text-white'>
            <div className="flex flex-col gap-2 items-center justify-center py-4">
              <h2 className='text-5xl font-sans '>Seja bem vinde!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
  
              <div className="flex justify-around gap-2">
              
                <button className='rounded bg-green-100 py-2 px-4'>Ver postagens</button>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/9' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;