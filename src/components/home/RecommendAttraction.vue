<template>
  <div>
    <carousel class="pills">
      <slide v-for="recentKeyword in recentKeywords" :key="recentKeyword">
        <div class="pill" :style="getPillStyle(recentKeyword)">
          {{ recentKeyword }}
        </div>
      </slide>
    </carousel>
  </div>
</template>
<script>
import Carousel from "vue-carousel";

export default {
  name: "RecommendAttraction",
  props: { Carousel },
};
</script>
<style></style>
