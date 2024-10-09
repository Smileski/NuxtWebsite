//Using v-for to iterate through an object to fill out the content in an accordion
<template>
  <div id="service_option">
    <ul>
      <li v-for="services in service_option" v-on:click="services.show = !services.show">
        <h2>{{ services.title }}</h2>
        <h4 v-show="services.show">{{ services.text }}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      service_option: [
        {
          title: 'Wholesale Beauty & wellness',
          text: 'Shop independent brands from around the world at wholesale prices.Do not let your favorite items simply sit in random spots of the home collecting dust. Take a stroll throughout your house and corral photos, books, and trinkets that speak to you and deserve a bit more attention. Then, style everything together on a bookshelf in one of your main living spaces.',
          show: false
        },
        {
          title: 'Wholesale Home decor',
          text: 'Shop independent brands from around the world at wholesale prices.Make your home as comfortable and attractive as possible and then get on with living. There is more to life than decorating.',
          show: false
        },
        {
          title: 'Wholesale Throw pillows & blankets',
          text: 'Shop independent brands from around the world at wholesale prices.If you wait until you have enough money to decorate and make your home your own, it will never happen. If you wait until you can afford to buy everything new, you are missing the point. It is the old, the new, the hand-me-down, the collected, the worn but loved things in your home that make it your own.',
          show: false
        },
        {
          title: 'Wholesale Women’s products',
          text: 'Shop independent brands from around the world at wholesale prices.If you crave a home that appears a bit more elevated, keep in mind that there are many ways that you can restyle items that you already own to make your house look and feel brand new. Below, four designers weigh in with eight useful styling tips that do not involve making any purchases but instead encourage you to cleverly rearrange the items you do have.',
          show: false
        }
      ]
    }
  }
}
useHead({
    title: 'Service Page | Merch',
    meta: [ 
        { name: 'description', content: ' Nuxt 3 - Service Page' }
    ]
})
</script>

//we use scoped, so this styles will apply only to this component
<style scoped>
#service_option {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: rgb(240, 248, 248);
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 300px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
}
</style>
