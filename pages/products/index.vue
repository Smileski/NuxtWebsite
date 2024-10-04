<script setup>
import {ref, onMounted} from 'vue';
import card from "@/components/card.vue";
const products = ref([]);


//fetch the products
onMounted(async () => {
    try {   
        const response = await fetch("https://fakestoreapi.com/products/"
        );
        products.value = await response.json();
        console.log(products.value);
    }catch (error) {
        console.error(error);
    }
});
</script>
<template>
    <div>
        <div>
            <div v-for="product in products" :key="product">
                <card
                    :title="product.title"
                    :price="product.price"
                    :description="product.description"
                    :image="product.image"
                />
            </div>
        </div>
    </div>
</template>
<style scoped>

</style>
