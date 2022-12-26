<template>


    <div>
        <div class="grid grid-cols-2 gap-4 px-7 mx-auto my-14 container">
            <div class="">
                <h1 class="text-7xl">BITA Home Page</h1>
                <p class="mt-20">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel aut beatae eaque nostrum,
                    velit quos
                    alias sed at neque accusamus deleniti aperiam, nulla voluptate atque animi minima natus
                    exercitationem id?</p>
                <button class="btn mt-10 text-lg mx-5">Sign Up Now</button>
                <button class="btn bg-sky-300 mt-7 text-lg">Learn More</button>
            </div>
            <img class="rounded max-w-lg m-5 shadow-xl"
                src="https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Pen and paper Data">

        </div>
        <hr class="px-7">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-10 h-11 mx-auto my-7">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
        </svg>

        <!-- Why Use BITA -->
        <h1 class="text-5xl text-center my-7 mt-24">Why use BITA?</h1>
        <div class="grid grid-cols-2 gap-7 mx-auto max-w-6xl my-14">
            <img class="rounded-lg shadow-2xl"
                src="https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="" />
            <div>
                <p class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta velit voluptatem modi
                    officia
                    excepturi. Reprehenderit odio vel rem ipsa illum!</p>
                <button class="btn mt-11 justify-end">Learn More</button>
            </div>
        </div>
        <hr class="">

        <!-- Contact Form -->
        <div class="mb-32">
            <h1 class="text-5xl my-11 text-center">Contact Us</h1>
            <div class=" flex justify-center items-center my-8">
                <form class="w-full max-w-lg bg-white flex flex-col py-5 px-8 rounded-lg shadow-lg" action="">
                    <label class="text-gray-700 font-bold py-2" for="">Email</label>
                    <input
                        class="text-gray-700 shadow border rounded border-gray-300 focus:outline-none focus:shadow-outline py-1 px-3 mb-3"
                        type="text" placeholder="Enter Email">
                    <label class="text-gray-700 font-bold py-2" for="">Message</label>
                    <textarea
                        class="text-gray-700 shadow border rounded border-gray-300 mb-3 py-1 px-3 focus:outline-none focus:shadow-outline"
                        type="password" placeholder="Message" />
                    <div class="flex justify-between items-center my-4">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded py-2 px-4">
                            Sign In
                        </button>
                        <a class="text-blue-600 hover:text-blue-800 font-bold" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>
        </div>



    </div>



</template>

<script>
export default {

}
</script>