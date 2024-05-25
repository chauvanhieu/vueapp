<template>
  <div class="row">
    <div
      class="col-sm-6 mb-3 h-100"
      v-for="coupon in coupons"
      v-bind:key="coupon.id"
    >
      <div class="card p-2 h-100 coupon-card">
        <div class="card-body h-100">
          <h5 class="card-title text-uppercase">{{ coupon.merchant }}</h5>
          <p class="card-text">
            {{ coupon.name }}
          </p>
          <a :href="coupon.link" target="_blank" class="btn btn-primary"
            >Copy mã giảm giá</a
          >
        </div>
      </div>
    </div>
  </div>
  <div class="see-more-btn text-center my-3">
    <button v-if="!loading" class="btn btn-success px-5" @click="handleSeeMore">
      Xem thêm
    </button>
    <Loading v-else />
  </div>
</template>

<script setup>
import Loading from "../components/Loading.vue";
import { ref, onMounted, computed, watchEffect } from "vue";
import { getAllCoupons } from "../services/coupon.service";

const coupons = ref([]);
const page = ref(1);
const loading = ref(false);
const slug = ref(null);

const fetchData = async () => {
  try {
    loading.value = true;

    const query = {
      page: page.value,
      limit: 14,
    };
    if (slug.value) {
      query.slug = slug.value;
    }
    const response = await getAllCoupons(query);
    coupons.value = [...coupons.value, ...response];
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});

const handleSeeMore = () => {
  page.value++;
  fetchData();
};
</script>
