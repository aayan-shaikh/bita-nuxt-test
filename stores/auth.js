import { defineStore } from 'pinia'
import Pocketbase from 'pocketbase'
const pb = new Pocketbase('https://127.0.0.1:8090')

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null
    }),
    actions: {
        loginUser(email, password) {

            const userData = pb.collection('users').authWithPassword(
                email,
                password
            ).catch(err => {
                console.log(err.isAbort)
            })
        },
        logoutUser() {
            pb.authStore.clear();
        },
        async getUser(email, username, password) {
            const authData = pb.authStore.model
            console.log(pb.authStore.model)
            this.user = authData
        },
        async signUp(email, name, username, password) {
            const pb = new Pocketbase('http://127.0.0.1:8090')
            await pb.collection('users').create({
                username: username,
                email: email,
                emailVisibility: true,
                password: password,
                passwordConfirm: password,
                name: name
            })
        }
    }
})