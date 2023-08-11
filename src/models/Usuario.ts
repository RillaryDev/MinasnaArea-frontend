import Postagem  from "./Postagem";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  tipo:string;
  senha: string;
  postagem?: Postagem | null;
}