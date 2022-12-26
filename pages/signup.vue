
<template>
    <div class='container mx-auto mb-60'>
        <p class="bg-emerald-400 p-7 text-2xl text-white rounded mt-7 flex justify-center" v-if="success">Succefully
            Logged In!</p>
        <form class="mx-auto shadow-2xl max-w-2xl p-7 my-10 mt-14 w-full" @submit.prevent="handleSignup">
            <p class="text-4xl">Signup for Bita</p>
            <div class="flex flex-col justify-between mt-8">
                <div class="mt-4">
                    <label class="mx-3">Name:</label>
                    <input v-model="name" type="text" placeholder="Enter Name" class="mt-4 border rounded p-2 w-full">
                </div>
                <div class="mt-4">
                    <label class="mx-3">User Name:</label>
                    <input v-model="userName" type="text" placeholder="Enter Username"
                        class="mt-4 border rounded p-2 w-full">
                </div>
                <div class="mt-4">
                    <label for="email" class="mx-3">Email:</label>
                    <input v-model="email" name="email" type="email" placeholder="Enter Email Id"
                        class="mt-4 border rounded p-2 w-full">
                </div>

                <div class="mt-4">
                    <label class="mx-3">Password:</label>
                    <input v-model="password" type="password" placeholder="*****"
                        class="mt-4 border rounded p-2 w-full">
                </div>
            </div>
            <button class="btn text-white bg-emerald-400 w-full p-3 hover:bg-emerald-500 transition-all  mt-9">Sign
                Up</button>
        </form>
        <p class="text-center text-slate-400 underline">
            <NuxtLink to="/login">Need to Login?</NuxtLink>
        </p>
    </div>
</template>

<script setup>
const email = ref('')
const userName = ref('')
const password = ref('')
const name = ref('')
const success = ref(false)

const handleSignup = () => {
    const record = signUp(email.value, name.value, userName.value, password.value).then(() => {
        useRouter().push('/analytics')
    }).catch((err) => {
        alert(err)
    })
    console.log(record)
}
</script>