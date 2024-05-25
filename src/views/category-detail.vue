<template>
  <Carousel />
  <div class="title text-center">
    <h1>Mã giảm giá {{ slug }}</h1>
  </div>
  <Coupons />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Carousel from "../components/Carousel.vue";
import Coupons from "../components/Coupons.vue";
const slug = ref(null);
const route = useRoute();

onMounted(() => {
  slug.value = route.params.slug;
});
</script>
