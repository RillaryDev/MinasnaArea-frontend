import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Usuario from '../../models/Usuario'
import { cadastrarUsuario } from '../../service/Service'
import './Cadastro.css'
import { toastAlerta } from '../../util/toastAlerta'


function Cadastro() {

  let navigate = useNavigate()

  const [confirmaSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    tipo: ''
  })

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    tipo: ''
  })

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back()
    }
  }, [usuarioResposta])

  function back() {
    navigate('/login')
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta)
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso')

      } catch (error) {
        toastAlerta('Dados inconsistentes', 'sucesso')
      }

    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro')
      setUsuario({ ...usuario, senha: "" }) // Reinicia o campo de Senha
      setConfirmaSenha("")                  // Reinicia o campo de Confirmar Senha
    }
  }


  return (
    <>
      
        <div className="bg-pink-100 h-screen w-screen pt-10">
          <div className=" bg-pink-200  border-4 border-purple-600/80 rounded-lg max-w-xl mx-auto bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className=" self-center text-center mb-6 text-2xl font-base text-gray-200 sm:text-3xl dark:text-white">
          Cadastre-se
            </div>
            <form className="flex-col space-y-4 ">
              <input
                type="text"
                id="nome" 
                name="nome"
                placeholder="Nome"
                className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  placeholder="E-mail"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  value={usuario.usuario}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
              <div className="flex flex-col space-y-2 text-gray-200">
                <label htmlFor="nome">Tipo de Usuário</label>
                <select
                  id="tipo"
                  name="tipo"
                  placeholder="Tipo de Usuário"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  value={usuario.tipo}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => setUsuario({ ...usuario, tipo: e.target.value })}
                >
                  <option value=" ">Mentorada</option>
                  <option value="mentor">Mentora</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  id="foto"
                  name="foto"
                  placeholder="Coloque sua foto aqui"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  value={usuario.foto}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />

              </div>


              <div className="flex flex-col space-y-2">
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  value={usuario.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  type="password"
                  id="confirmarSenha"
                  name="confirmarSenha"
                  placeholder="Confirmar Senha"
                  className=" rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  value={confirmaSenha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
                />
              </div>
              <div className="flex justify-end">
                <button className="font-base text-gray-300 inline-flex items-center justify-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md shadow-sm focus:outline-none ring-2 ring-offset-2 ring-transparent ring-offset-transparent disabled:bg-gray-400 dark:disabled:bg-slate-700 appearance-none text-white bg-purple-600 hover:bg-green-400 focus:ring-green-400 focus:ring-offset-white w-full" type="submit" name="_action" value="create">
                  <div className="relative">
                    <div className=""> Cadastrar
                    </div>
                    <div className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                      </circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </form>
          </div >
        </div >

      
    </>
  )
}

export default Cadastro

function foto(prevState: null): null {
  throw new Error('Function not implemented.')
}
