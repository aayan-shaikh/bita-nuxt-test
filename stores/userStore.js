import { defineStore } from 'pinia'
import Pocketbase from 'pocketbase'
const pb = new Pocketbase('https://127.0.0.1:8090')
export const useUserStore = defineStore('user', {
    state: () => ({
        username: '',
        name: '',
        email: ''
    }),
    actions: {
        async getUser() {
            const authData = pb.authStore.model
        },
        async logoutUser(){
            
        }
    }
})