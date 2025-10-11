import { Post } from "../types/post.type";
import { PostPage } from "../types/postPage.type";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

if (!API_URL) {
    throw new Error('Variável EXPO_PUBLIC_API_URL não está definida');
}

export function useFetch() {

    const findAll = async (): Promise<PostPage> => {
        
        const response = await fetch(`${API_URL}/posts`);

        if (!response.ok) {
            throw new Error(`Ocorreu um erro: ${response.statusText}`);
        }

        const dados = await response.json();

        return dados;
    }


    const findById = async (id: number): Promise<Post> => {
        
        const response = await fetch(`${API_URL}/posts/${id}`);

        if (!response.ok) {
            throw new Error(`Ocorreu um erro: ${response.statusText}`);
        }

        const dados = await response.json();

        return dados;
    }

    const create = async (post: Omit<Post, 'id'>): Promise<void> => {

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const response = await fetch(`${API_URL}/posts/add`, {
            headers: myHeaders,
            method: 'POST',
            body: JSON.stringify(post)
        });

        if (!response.ok) {
            const t = await response.json()
            console.log(t)
            throw new Error(`Ocorreu um erro: ${response.statusText}`);
        }

    }

    const update = async (post: Post): Promise<void> => {

        const response = await fetch(`${API_URL}/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify(post)
        });

        if (!response.ok) {
            throw new Error(`Ocorreu um erro: ${response.statusText}`);
        }

    }

    const del = async (id: number): Promise<void> => {

        const response = await fetch(`${API_URL}/posts/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) {
            throw new Error(`Ocorreu um erro: ${response.statusText}`);
        }

    }

    return {
        findAll,
        findById,
        create,
        update,
        del
    }
    
}