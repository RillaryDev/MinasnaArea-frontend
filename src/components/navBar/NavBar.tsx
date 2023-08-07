<<<<<<< HEAD
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

=======
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
>>>>>>> ed493411d1131ddde43f8df752c2a6ea0ffb78df


function Navbar() {
  let navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
      handleLogout()
      alert('Usuário deslogado com sucesso')
      navigate('/login')
  }

  let navbarComponent
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4 bg-purple-300'>
          <div className="container flex justify-between text-lg">
<<<<<<< HEAD
          <Link to='/home' className='text-2xl font-bold uppercase'>Blog Pessoal</Link>

            <div className='flex gap-4'>
            <div className='hover:underline'>Postagens</div>
            <Link to='/temas' className='hover:underline'>Temas</Link>
              <div className='hover:underline'>Cadastrar tema</div>
              <div className='hover:underline'>Perfil</div>
              <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
             
=======
            <div className='text-2xl font-bold uppercase'>Minas na Área</div>

            <div className='flex gap-4'>
              <Link to='/login' className='hover:underline'>Login</Link>
              <Link to='/home' className='hover:underline'>Home</Link>
              <div className='hover:underline'>Postagens</div>
              <div className='hover:underline'>Temas</div>
              <div className='hover:underline'>Cadastrar tema</div>
              <div className='hover:underline'>Perfil</div>
              <div className='hover:underline'>Sair</div>
>>>>>>> ed493411d1131ddde43f8df752c2a6ea0ffb78df
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar