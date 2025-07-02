import axios from "axios";

const api = axios.create({
    baseURL: 'https://farmacia-ug0p.onrender.com/'
})

export const buscar = async (url: string, setDados: Function) => {
    const resposta = await api.get(url)
    setDados(resposta.data)
}

export const cadastrar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}

export const atualizar = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.put(url, dados)
    setDados(resposta.data)
}

export const deletar = async (url: string) => {
    await api.delete(url)
}

export const buscarCategoriaNome = async (nome: string, setDados: Function) => {
    try {
        const resposta = await api.get(`/categorias/nome/${nome}`);
        setDados(resposta.data);
    } catch (error: any) {
        console.error("Erro ao buscar categoria pelo nome:", error);
        alert("Erro ao buscar categoria.");
    }
};