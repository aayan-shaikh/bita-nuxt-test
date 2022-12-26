
import Pocketbase from 'pocketbase'
export async function login(email, password) {
    const pb = new Pocketbase('http://127.0.0.1:8090')
    return await pb.collection('users').authWithPassword(
        email,
        password,
    )

}