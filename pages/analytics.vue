<template>
    <div>

        <section>
            <p class="text-center text-3xl my-7">Welcome User</p>
            <p class="text-center text-xl my-7">Here are your analytics...</p>
            <form class="text-center flex flex-col justify-center">
                <label for="file">Upload New Data File: </label>
                <input class="text-center mx-auto my-7" accept=".csv" type="file" name="file"
                    placeholder="Upload New Data File" ref="input">
                <button class="bg-emerald-400 max-w-lg mx-auto text-white p-3 rounded"
                    @click.prevent="handleUpload">Submit
                    file</button>
            </form>
            <section v-if="results" id="charts" class="mx-auto grid grid-cols-2 gap-7 max-w-7xl my-5">
                <div class="">
                    <LineChart :data="dataColors" color="green" />
                </div>
                <div class="  ">
                    <LineChart :data="dataMonths" />
                </div>
                <div class="bg-gradient-to-tr to-sky-200 from-sky-50">
                    <LineChart :data="dataSeasons" />
                </div>
            </section>
        </section>
    </div>
</template>

<script setup>


import * as Papa from 'papaparse'
const results = ref({})
const input = ref(null)
const dataColors = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        fill: true,
        backgroundColor: 'rgba(123,255,223,0.9)'
    }]
}
const dataMonths = {
    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun'],
    datasets: [{
        label: 'Months',
        data: [1, 25, 3, 17, 12, 5],
        borderWidth: 1,
        fill: true
    }]
}

const handleUpload = () => {
    let file = input.value.files[0]
    console.log(input.value.files[0])
    Papa.parse(file, {
        download: true,
        headers: true,
        skipEmptyLines: true,
        complete: function (res) {
            results.value = res.data
            dataColors.datasets.data.
            console.log(dataColors.datasets.data)
        }
    })
}
const dataSeasons = {
    labels: ['Summer', 'Autumn', 'Winter',],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
        fill: true
    }]
}

</script>

<style lang="scss" scoped>

</style>