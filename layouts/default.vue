<template>
    <div>
        <header class="shadow-md bg-white">

            <!-- navbar goes here -->
            <nav class="bg-gray-100">
                <div class="max-w-6xl mx-auto px-4">
                    <div class="flex justify-between">

                        <div class="flex space-x-4">
                            <!-- logo -->
                            <div>
                                <RouterLink to="/"
                                    class="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">

                                    <span class="font-bold">BITA</span>
                                </RouterLink>
                            </div>

                            <!-- primary nav -->
                            <div class="hidden md:flex items-center space-x-1">
                                <NuxtLink to="/about" class="py-5 px-3 text-gray-700 hover:text-gray-900">About
                                </NuxtLink>
                                <NuxtLink to="/pricing" class="py-5 px-3 text-gray-700 hover:text-gray-900">Pricing
                                </NuxtLink>
                            </div>
                        </div>

                        <!-- secondary nav -->
                        <div class="hidden md:flex items-center space-x-1">

                            <NuxtLink to='/Login'
                                class="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">
                                Login</NuxtLink>
                        </div>

                        <!-- mobile button goes here -->
                        <div class="md:hidden flex items-center" @click="toggleMobileMenu">
                            <button class="mobile-menu-button">
                                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                    </div>
                </div>

                <!-- mobile menu -->
                <div class="transition">
                    <div class="mobile-menu md:hidden" :class="{ hidden: isHidden }" ref="mobileButton">
                        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                        <a href="#" class="block py-2 px-4 text-sm hover:bg-gray-200">Pricing</a>
                    </div>
                </div>
            </nav>

            <!-- content goes here -->
        </header>
    </div>

    <div>
        <slot>
        </slot>
    </div>

    <footer class="flex justify-around bg-emerald-400 py-5 text-white mt-11">
        <span>Home</span>
        <span>Contact</span>
        <span>About Us</span>
    </footer>
</template>

<script setup>

const mobileButton = ref(null)
const isHidden = ref(true)
function toggleMobileMenu() {
    // mobileButton.classList.toggle('hidden')
    isHidden.value = !isHidden.value
}

</script>