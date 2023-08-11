import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'



const navigation = [
  { name: 'Agendamento', href: '/agendamento', current: false },
  { name: 'Mentoria', href: '/postagens', current: false },
  { name: 'Postagens', href: '/login', current: false },
  { name: 'Sobre', href: '/login', current: false },


]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  let navigate = useNavigate()
  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }

  let navbarComponent

  if (usuario.token !== "") {
    navbarComponent = (
      <Disclosure as="nav" className="bg-purple-300">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src="https://i.imgur.com/NfIouen.png"
                      alt="Logo Minas na Area"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <Link to='/home' className='text-2xl text-white font-title'>Minas na Área</Link>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full rounded-full bg-purple-400 "
                          src="https://i.imgur.com/FYp7ezs.png"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-purple-500 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-pink-100')}
                            >
                              Perfil
                            </a>
                          )}
                        </Menu.Item>

                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/login"
                              className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-pink-100')}
                            >
                              Sair
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current ? 'text-white' : 'text-gray-300 hover:bg-purple-400 hover:text-white',
                      'block rounded-md px-3 text-base	font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}

                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>


    )
  } else {
    // Adicione o return aqui para renderizar os links quando o usuário não está logado
    navbarComponent = (
      <Disclosure as="nav" className="bg-purple-600 font-title ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-18">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-purple-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center ">
                    <Link to='/home' className='text-2xl text-white-100 font-title'>Minas na Área</Link>
                    <img
                      className="right-96 h-14 w-auto"
                      src="https://i.imgur.com/OAY8uOO.png"
                      alt="logo minas na area"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block  ">
                    <div className="flex flex-shrink-0 absolute inset-0 left-[750px] items-center">
                      <div className='flex gap-8 text-xl text-white-100 font-title '>
                        <button className='rounded-nav w-20 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200  duration-300 '><Link to='/home'>Home</Link> </button>
                        <button className='rounded-nav w-20 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200 duration-300 '><Link to='/sobre'>Sobre</Link> </button>
                        <button className='rounded-nav w-28 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200 duration-300 '><Link to='/postagens'>Mentoria</Link> </button>
                        <button className='rounded-nav w-20 transition ease-in-out bg-purple-600  hover:scale-110 hover:bg-pink-200  duration-300 '><Link to='/login'>Entrar</Link></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className=" block rounded-md px-3 text-base font-medium">
                <Disclosure.Button className= 'text-gray-300 hover:bg-purple-400 hover:text-white ' >
                  <Link className="space-y-1 px-2 pb-3 pt-2" to='/home'>Home</Link>
                  <Link  className="space-y-1 px-2 pb-3 pt-2" to='/sobre'>Sobre</Link>
                  <Link  className="space-y-1 px-2 pb-3 pt-2" to='/postagens'>Mentoria</Link>
                  <Link  className="space-y-1 px-2 pb-3 pt-2" to='/login'>Entrar</Link>
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar