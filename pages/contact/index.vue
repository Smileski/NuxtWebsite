<script setup>
//importing mixin for the image component that toggle on a border around the image
import { addBorder } from '@/composable/addBorder'
//import { defineProps, ref } from 'vue'
import { ref } from 'vue'

const contactInfo = ref([
  {
    Email: 'alex_john@analyticsltd.com',
    Phone: '720-240-8431',
    Address: '17483 E Temple Dr, Aurora, CO 80015'
  },
  {
    Email: 'maria_green@analyticsltd.com',
    Phone: '555-555-8431',
    Address: '1555 E Road Dr, Aurora, CO 80015'
  }
])
</script>
<script>
const { show } = addBorder()
</script>

<template>
  <!--composable for toggle on/off border of a image-->
  <div>
    <img
      src="@/components/images/wholesale_store.jpg"
      alt="Wholesale clothing store"
      @click="show = !show"
      :class="{ active: show }"
      class="nav-item dropdown"
      width="100%"
    />
  </div>

  <div class="contact">
    <h2>Our mission is to empower brands and retailers to strengthen the unique character of local communities.</h2>
    <h4>We believe the future is local
        Now more than ever, consumers are choosing to support local shops over big-box chains. There are millions of thriving small businesses in North America, Europe, and Australia alone, who collectively represent a trillion dollar market. With our global community and the power of technology, Faire is helping fuel the growth of entrepreneurs everywhere.</h4>
    <h4>Company values:
        Our work always starts with the mission. We’re motivated every day to help our customers succeed against competitors a million times their size, and we fight hard to help level the playing field.</h4>
        <h2>Our contact details:</h2>
        <main>
        <li v-for="contact in contactInfo" :key="contact">
          <p>Email: {{ contact.Email }}</p>
          <p>Phone: {{ contact.Phone }}</p>
          <p>Address: {{ contact.Address }}</p>
        </li>
    </main>
  </div>
</template>

<style scoped>
.contact {
  text-align: center;
  margin-top: 20px;
}
/* .img-mixin {
  text-align: center;
  margin-top: 20px;
  border: green solid 2px;
} */
/* .is-active {
  border: green solid 2px;
} */
h1,
h2,
h3,
h4 {
  text-align: center;
}
.active {
  border: 5px solid #555;
}
</style>
