<script setup>
    import { ref } from "vue";
    const show = ref(true);
</script>

<template>
    <div>
        <h1>Your Style. Delivered.®</h1>
        <p>Stitch Fix is the original personal styling service for men and women that evolves with your tastes, needs and lifestyle. We help people discover the styles they will love that fit perfectly so they always look—and feel—their best.</p>
        <img width="50%" src="./about_us_wide.jpg" alt="Products Image" />
    </div>
    <!-- using if-else statement to change content -->
    <div class="btn">
    <main>
        <button @click="show = !show">Click to find more about "How We Got Here"</button>
        <p v-if="show">It’s our mission to change the way people find clothes they love by combining technology with the personal touch of seasoned style experts. The companyx experience is not merely curated—it’s truly personalized to you. We’re here to help you save time, look great and evolve your personal style over time.</p>
        <p v-else>It’s our mission to change the way people find clothes they love by combining technology with the personal touch of seasoned style experts. The companyx experience is not merely curated—it’s truly personalized to you. We’re here to help you save time, look great and evolve your personal style over time.The founder created this company to blend the human element of personal styling with high-quality clothing and proprietary algorithms. They shipped the first order out of her apartment in 2016, and today the company has brought the exclusive shopping experience to millions of men and women nationwide. In 2020, we launched men’s, and extended our women’s offerings to include plus sizes in 2022.
            We’re proud to work with experts from all over the U.S. They’re trendsetters and fashion experts who are motivated to learn about your style and evolving needs, in order to find the perfect pieces for you. Your Style Profile answers and continued feedback powers the engine of the company experience.
        </p>
    </main>
    </div>
</template>
<style scoped>
    .btn {
        background-color: #bbf1de; /* Green */
        border: none;
        color: rgb(128, 126, 126);
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>