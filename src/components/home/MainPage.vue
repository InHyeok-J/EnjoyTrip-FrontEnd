<template>
  <div class="main-container">
    <div class="block" style="padding-bottom: 10px">
      <div v-if="user">
        <span class="title">{{ user.nickname }}</span>
        <span class="welcome-text"> 님께 추천하는</span>

        <carousel
          class="pills"
          :perPageCustom="[
            [320, 1],
            [480, 2],
            [720, 4],
          ]"
        >
          <slide v-for="attraction in recommendAttractions" :key="attraction"
            ><router-link
              :to="`/attraction-detail/${attraction.id}`"
              class="carousel-link"
            >
              <h2 class="image-caption">{{ attraction.attractionName }}</h2>
              <img
                :src="
                  attraction.attractionImageUrl ||
                  require('@/assets/fallback_image.jpg')
                "
                class="carousel-image"
              />
            </router-link>
          </slide>
        </carousel>
      </div>
      <div v-else>
        <div class="welcome-text">어서오세요!</div>
        <div class="welcome-text">오늘은 어디로 떠날까요?</div>
        <img
          :src="require('@/assets/Logo.png')"
          style="margin-left: 80px; margin-top: 20px; width: 130px"
        />
      </div>
    </div>
    <hr />
    <div class="block">
      <div class="title">
        <img :src="require('@/assets/인기 관광지.svg')" />
      </div>

      <router-link
        v-if="hotAttraction"
        class="content"
        :key="hotAttraction.id"
        :to="`/attraction-detail/${hotAttraction.id}`"
      >
        <img
          :src="
            hotAttraction.attractionImageUrl ||
            require('@/assets/fallback_image.jpg')
          "
          class="attraction-image"
        />
        <div class="attraction-content">
          <div class="category">{{ hotAttraction.categoryMean }}</div>
          <div class="name">
            {{ truncateAttractionName(hotAttraction.attractionName) }}
          </div>
          <div class="address">{{ hotAttraction.address }}</div>
          <div class="star-rating">
            <div v-for="index in 5" :key="index">
              <div
                class="star-icon"
                :class="{
                  'star-filled-icon': index <= Math.floor(hotAttraction.score),
                }"
                :key="index"
              ></div>
            </div>
            <span style="margin-left: auto"
              >({{ hotAttraction.score.toFixed(1) }})</span
            >
          </div>
        </div>
      </router-link>
    </div>
    <hr />
    <div class="block">
      <div class="title">최근 본 관광지</div>
      <div v-if="recentAttractions != null && recentAttractions.length > 1">
        <router-link
          v-for="a in recentAttractions"
          :key="a.id"
          :to="`/attraction-detail/${a.id}`"
        >
          <div class="recent-block">
            <img
              :src="
                a.attractionImageUrl || require('@/assets/fallback_image.jpg')
              "
              class="recent-image"
            />
            <div class="recent-content">
              <div
                style="font-size: 16px; font-weight: 500; padding-bottom: 4px"
              >
                {{ a.attractionName }}
              </div>
              <div style="font-size: 13px; font-weight: 400">
                {{ a.address }}
              </div>
            </div>
            <img
              :src="require('@/assets/see_more.svg')"
              style="margin-left: auto; padding-right: 10px"
            />
          </div>
        </router-link>
      </div>
      <div v-else>최근 본 관광지가 없습니다. Tripfy를 둘러보세요!</div>
    </div>
    <hr />
    <div class="block">
      <div class="title">다시 가고싶은 여행 코스</div>
      <CourseByLike></CourseByLike>
    </div>
  </div>
</template>
<script>
import CourseByLike from "./CourseByLike.vue";
import { getHotAttraction, getRecommend } from "@/api/attractionApi";
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "MainPage",
  components: { CourseByLike, Carousel, Slide },
  data() {
    return {
      currentUserNick: null,
      user: null,
      hotAttraction: null,
      recentAttractions: null,
      recommendAttractions: null,
    };
  },
  async created() {
    try {
      const hotAttraction = await getHotAttraction();
      this.hotAttraction = hotAttraction;
      const user = JSON.parse(localStorage.getItem("trify-user"));
      const recentAttractions = JSON.parse(
        localStorage.getItem("recentAttractions")
      );

      this.user = user;
      this.recentAttractions = recentAttractions;

      await this.getUserAndRecommendation();
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    async getUserAndRecommendation() {
      if (this.user == null || this.user.id == null) {
        return;
      }
      try {
        const recommendAttractions = await getRecommend();

        this.recommendAttractions = recommendAttractions.data;
        console.log(this.recommendAttractions);
      } catch (e) {
        this.recommendAttractions = null;
        // localStorage.removeItem("trify-user");
        return;
        // console.log(e);
      }
    },
    truncateAttractionName(name) {
      const maxLength = 13;
      if (name.length > maxLength) {
        return name.slice(0, maxLength) + "...";
      }
      return name;
    },
  },
};
</script>
<style scoped>
.image-overlay {
  /* position: absolute; */
  bottom: 0;
  left: 0;
  padding: 15px 25px;
  /* background-color: rgba(255, 255, 255, 0.8); */
}

.image-caption {
  padding-top: 4px;
  font-size: 20px;
  font-weight: 500;
}

.carousel-item {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

.carousel-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.carousel-image {
  margin-top: 20px;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.carousel-content {
  padding: 10px;
}

.main-container {
  margin-bottom: 100px;
}
.block {
  padding: 30px 0px;
}
.title {
  font-size: 20px;
  font-weight: 700;
  padding: 0px 0px 20px 0px;
}
.content {
  display: flex;
  flex-direction: row;
}
.category,
.address {
  font-weight: 300;
  font-size: 13px;
  padding: 3px 0px;
}

.address {
  font-weight: 400;
}

.star-rating {
  display: flex;
  flex-direction: row;
  padding-top: 20px;
}
.star-icon {
  width: 21px;
  height: 21px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.name {
  font-weight: 500;
  padding: 5px 0px;
}
.recent-block {
  display: flex;
  flex-direction: row;
  padding: 8px 0px;
}
.recent-image {
  max-width: 77px;
  height: 77px;
  object-fit: cover;
  border-radius: 10px;
}
.recent-content {
  padding: 3px 15px;
}
.attraction-image {
  max-width: 110px;
  height: 110px;
  object-fit: cover;
  border-radius: 10px;
}
.attraction-content {
  padding-left: 15px;
  word-break: keep-all;
}
.welcome-text {
  font-size: 20px;
}
.see-more-icon {
  background-image: url("@/assets/see_more.svg");
}
.heart-icon {
  background-image: url("@/assets/heart.svg");
}
.star-icon {
  background-image: url("@/assets/attraction/star.svg");
  transform: scale(0.9);
}
.star-filled-icon {
  background-image: url("@/assets/attraction/star_filled.svg");
  transform: scale(0.9);
}
</style>
