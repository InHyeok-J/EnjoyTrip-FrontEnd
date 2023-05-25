<template>
  <div class="main-container">
    <div class="grid-list">
      <router-link
        v-for="item in result"
        :key="item.id"
        :to="`/attractionforcourse-detail/${item.id}`"
        class="grid-item"
      >
        <div>
          <img
            :src="
              item.attractionImageUrl || require('@/assets/fallback_image.jpg')
            "
            class="attraction-image"
          />
        </div>

        <div class="attraction-name">
          <span class="attraction-name-text">{{
            truncateAttractionName(item.attractionName)
          }}</span>
        </div>
        <div class="star-rating">
          <div v-for="index in 5" :key="index">
            <div
              class="star-icon"
              :class="{ 'star-filled-icon': index <= Math.floor(item.score) }"
              :key="index"
            ></div>
          </div>

          <span class="category-text">{{ item.categoryMean }}</span>
        </div>
        <div class="evaluation">
          <span class="evaluation-score">{{ item.score.toFixed(1) }}</span> / 5
          &nbsp; 후기 {{ item.reviewsCount }}개
        </div>
        <div class="address">
          {{ item.address }}
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { search } from "@/api/attractionApi";
export default {
  name: "AttractionSearch",
  data() {
    return {
      result: null, // 초기값은 필요에 따라 적절하게 설정하십시오.
    };
  },
  computed: {
    ...mapState("searchStore", ["searchOption"]), // Vuex 스토어의 result 상태를 가져옴
  },
  async created() {
    this.fetchData();
  },
  async mounted() {
    this.fetchData();
  },
  watch: {
    searchOption: {
      deep: true, // Enable deep watching for nested properties
      immediate: true, // Trigger the watcher immediately when the component is created
      handler() {
        this.fetchData(); // Call a method to fetch data based on the new searchOption
      },
    },
  },
  methods: {
    async fetchData() {
      const response = await search(this.searchOption);
      this.result = response.data;
    },
    truncateAttractionName(name) {
      const maxLength = 11;
      if (name.length > maxLength) {
        return name.slice(0, maxLength) + "...";
      }
      return name;
    },
  },
};
</script>
<style scoped>
.main-container {
  margin: 10px 35px;
  overflow-y: auto;
  /* max-height: calc(100vh - 20px); */
}
div {
  padding: 3px 0px;
}
.grid-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 17px 5px;
  padding-bottom: 100px;
  padding-top: 190px;
}

.grid-item {
  padding: 3px 2px;
}
img {
  max-width: 100px;
}
.attraction-name {
  padding: 10px 0px 0px 0px;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  flex-direction: row;
}

.attraction-name-text {
  flex: 1; /* Take up remaining space */
}
.category-text {
  font-weight: 300;
  font-size: 13px;
  flex: 1;
  padding-top: 5px;
  padding-right: 3px;
  text-align: right;
}
.address {
  font-size: 13px;
  font-weight: 400;
  padding-top: 4px;
  word-break: keep-all;
}
.evaluation {
  font-size: 13px;
  font-weight: 300;
}

.evaluation-score {
  font-weight: 400;
  color: #496def;
}
.star-rating {
  display: flex;
  flex-direction: row;
}
.star-icon {
  width: 18px; /* Adjust the width of the star icons as needed */
  height: 18px; /* Adjust the height of the star icons as needed */
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.star-icon {
  background-image: url("@/assets/attraction/star.svg");
  transform: scale(0.9);
}
.star-filled-icon {
  background-image: url("@/assets/attraction/star_filled.svg");
  transform: scale(0.9);
}
.attraction-image {
  max-width: 150px;
  height: 150px;
  object-fit: cover; /* 이미지 비율 유지 및 크롭을 위한 object-fit 속성 */
  border-radius: 10px; /* 둥근 모서리를 위한 border-radius 속성 */
}
</style>
