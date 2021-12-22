import axios from 'axios';

export const CIENCIAABERTA_API_BASE_URL = "http://localhost:8084/";

class CienciaAbertaService {

    createUsuario(usuario){
        return axios.post(CIENCIAABERTA_API_BASE_URL+ 'usuario', usuario);
    }
    buscaUsuario(id){
        return axios.get(CIENCIAABERTA_API_BASE_URL+ 'usuario_busca/'+ id);
    }
    listUsuarios(){
        return axios.get(CIENCIAABERTA_API_BASE_URL+ 'usuario_list');
    }
    deleteUsuario(id){
        return axios.get(CIENCIAABERTA_API_BASE_URL+ 'usuario_delete',id);
    }
    updateUsuario(id,usuario){
        return axios.put(CIENCIAABERTA_API_BASE_URL+ 'usuario_update/'+ id,usuario);
    }

     loginUsuario(dados) {
         return axios.post(CIENCIAABERTA_API_BASE_URL+ 'user_login', dados);
     }
    createCategoria(values) {
        return axios.post(CIENCIAABERTA_API_BASE_URL+ 'categoria', values);
    }
    buscaCategoria(id){
        return axios.get(CIENCIAABERTA_API_BASE_URL+ 'categoria_busca/'+ id);
    }

    updateCategoria(id,categoria){
        return axios.put(CIENCIAABERTA_API_BASE_URL+ 'categoria_update/'+ id,categoria);
    }
    listCategoria() {
        return axios.get(CIENCIAABERTA_API_BASE_URL+ 'categoria_list');
    }

    deleteCategoria(id) {
        return axios.delete(CIENCIAABERTA_API_BASE_URL+ 'categoria_delete',id);
    }

    createPergunta(values) {
        return axios.post(CIENCIAABERTA_API_BASE_URL+ 'perguntas', values);
    }

    listPerguntas(){
        return axios.get(CIENCIAABERTA_API_BASE_URL+ 'perguntas_list');
    }
    buscaPergunta(id){
        return axios.get(CIENCIAABERTA_API_BASE_URL+ 'pergunta_busca/'+ id);
    }
    updatePergunta(id,pergunta){
        return axios.put(CIENCIAABERTA_API_BASE_URL+ 'pergunta_update/'+ id,pergunta);
    }

    buscaPerguntasCategoria(id){
        return axios.get(CIENCIAABERTA_API_BASE_URL+ 'perguntas_categoria?idCategoria='+id);
    }
    createResposta(respostas){
        return axios.post(CIENCIAABERTA_API_BASE_URL+ 'respostas', respostas);
    }
    createGrauMaturidade(values) {
        return axios.post(CIENCIAABERTA_API_BASE_URL+ 'grau_maturidade', values);
    }
    buscaGrauMaturidade(id){
        return axios.get(CIENCIAABERTA_API_BASE_URL+ 'grau_maturidade_busca/'+ id);
    }

    updateGrauMaturidade(id,categoria){
        return axios.put(CIENCIAABERTA_API_BASE_URL+ 'grau_maturidade_update/'+ id,categoria);
    }
    listGrauMaturidade() {
        return axios.get(CIENCIAABERTA_API_BASE_URL+ 'grau_maturidade_list');
    }

    deleteGrauMaturidade(id) {
        return axios.delete(CIENCIAABERTA_API_BASE_URL+ 'grau_maturidade_delete',id);
    }


}

export default new CienciaAbertaService()