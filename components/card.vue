<script setup>
import {defineProps} from 'vue';
const show = ref(true);

const props = defineProps({
    title: String,
    price: String,
    description: String,
    image: String,
});
</script>

<template>
    <div class="card">
        <h3>{{ props.title }}</h3>
        <p>{{ props.price }}</p>
        <p>{{ props.description }}</p>
        <img width="20%" :src="props.image" alt="Products Image">
        <div class="btn">
        <main>
            <button @click="show = !show">Read more about the product</button>
            <p v-if="show">{{ props.title }}</p>
            <p v-else>{{ props.description }}</p>
        </main>
        </div>
    </div>
</template> 

<style scoped>
.btn {
        border: none;
        text-decoration: none;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>