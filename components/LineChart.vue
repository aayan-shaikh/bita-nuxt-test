<template>

    <canvas ref="ctx" class="shadow rouned-md"></canvas>

</template>
  
<script setup>
import Chart from 'chart.js/auto'

let ctx = ref(null)
const { data } = defineProps(['data'])

onMounted(() => {
    let gradient = ctx.value.getContext('2d').createLinearGradient(0, 0, 0, 400)
    gradient.addColorStop(0, 'rgba(58,123,213,1)')
    gradient.addColorStop(1, 'rgba(0,210,255,0.3)')
    new Chart(ctx.value, {
        type: 'line',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
})

</script>