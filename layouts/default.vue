<script setup>
import Slotcomp from './components/Slotcomp.vue'
</script>

<template>
    <nav>
        <h2>The best solution for your business</h2>
    <h4>We help you maximize performance and build a healthy organization.</h4>
        <ul>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/products">Products</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/services">Services</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/contact">Contact</NuxtLink>
            </li>
        </ul>
    </nav>
<slot />
<!--using slot for header component-->
<Slotcomp>
 <!--using slot for footer component-->
 <template v-slot:footer>
    <h2>Get in touch with us today!</h2>
    <h4>Send us a message and we will get back to you as soon as possible.</h4>
  </template>
</Slotcomp>
</template>
    



<style scoped>
    nav {
    /* background-color: #f2f2f2; 
    padding: 10px;
    position: fixed;*/
  left: 0;
  top: 0;
  width: 100%;
  background-color: grey;
  color: white;
  text-align: center;
}

ul  {
    list-style-type: none;
    display: flex;
    justify-content: start;    
    gap: 12px;
}

li {
    margin-right: 10px;
}

NextLink {
    text-decoration: none;
    color: #3333;
    font-weight: bold;
}

NextLink.active {
    color: #ff0000;
}
</style>