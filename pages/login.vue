<template>
    <div class='container mx-auto mb-60'>



        <form class="mx-auto shadow-2xl max-w-2xl p-7 my-10 mt-14 w-full" @submit.prevent="handleSubmit">
            <p class="text-4xl">Login to Bita</p>
            <div class="flex justify-between mt-8">
                <div>
                    <label for="email" class="mx-3">Email:</label>
                    <input v-model="email" name="email" type="email" placeholder="Enter Email Id"
                        class="mt-4 border rounded p-2">
                </div>

                <div>
                    <label class="mx-3">Password:</label>
                    <input v-model="password" type="password" placeholder="*****" class="mt-4 border rounded p-2">
                </div>
            </div>
            <button class="btn bg-emerald-400 w-full p-3 hover:bg-emerald-500 transition-all  mt-9">Login</button>
        </form>
        <p class="text-center text-slate-400 underline">
            <NuxtLink to="/signup">Need to Signup?</NuxtLink>
        </p>
    </div>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
import Pocketbase from 'pocketbase'
const pb = new Pocketbase('http://127.0.0.1:8090')
const client = useSupabaseClient()
const password = ref('')
const email = ref('')

const handleSubmit = () => {
    // login(email.value, password.value)
    // const authData = await pb.collection('users').authWithPassword(
    //     email.value,
    //     password.value,
    // );
    const authStore = useAuthStore()
    const authData = authStore.loginUser(email.value, password.value)

    console.log(authData)

    // after the above you can also access the auth data from the authStore
    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model);


}

</script>

<style lang="css" scoped>

</style>