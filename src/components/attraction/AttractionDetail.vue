<template>
  <div>
    <div class="thumbnail" ref="thumbnail" :style="thumbnailStyle">
      <img
        :src="imageUrl"
        class="attraction-image"
        :class="{ loaded: imageLoaded }"
        @load="onImageLoad"
      />
      <div class="image-overlay">
        <h2 class="image-caption">{{ detail.attractionName }}</h2>
      </div>
    </div>
    <div class="main-container">
      <div class="info">
        <div class="address">{{ detail.address }}</div>
        <div class="star-rating">
          <div v-for="index in 5" :key="index">
            <div
              class="star-icon"
              :class="{
                'star-filled-icon': index <= Math.floor(detail.score),
              }"
              :key="index"
            ></div>
          </div>

          <span class="category-text">{{ detail.categoryMean }}</span>
        </div>
        <div class="evaluation">
          <span class="evaluation-score">{{ detail.score.toFixed(1) }}</span> /
          5 &nbsp; 후기 {{ detail.reviewsCount }}개
        </div>
        <div class="title">설명</div>
        <div class="description" :class="{ 'show-full': showFullDescription }">
          {{ detail.description }}
          <div
            v-if="detail.description.length > 200"
            class="description-overlay"
            @mouseover="showFullDescription = true"
            @mouseleave="showFullDescription = false"
          >
            {{ detail.description }}
          </div>
        </div>

        <div class="title">다녀온 후기</div>
        <div class="review" v-for="review in reviews" :key="review.id">
          <div class="user">
            <img
              :src="review.userImageUrl || require('@/assets/Logo.png')"
              class="profile logo"
            />
            <span class="nickname">{{ review.nickname }}</span>
            <div class="star-rating">
              <div v-for="index in 5" :key="index">
                <div
                  class="star-icon"
                  :class="{
                    'star-filled-icon':
                      index <= Math.floor(review.review.score),
                  }"
                  :key="index"
                ></div>
              </div>
            </div>
          </div>
          <div class="review-content">{{ review.review.content }}</div>
        </div>
      </div>
      <router-link to="/review" class="floating-button">
        <span class="button-icon"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getDetail, getReviews } from "@/api/attractionApi";
export default {
  name: "AttractionDetail",
  data() {
    return {
      itemId: null,
      detail: null,
      reviews: null,
      imageLoaded: false,
      thumbnailHeight: 0,
      showFullDescription: false,
    };
  },
  async created() {
    this.itemId = this.$route.params.id;
    await this.loadData();
  },

  methods: {
    async loadData() {
      const resDetail = await getDetail(this.itemId);
      const resReviews = await getReviews(this.itemId);
      this.detail = resDetail.data;
      this.reviews = resReviews.data;
      console.log("deatil" + JSON.stringify(this.detail));

      console.log("review" + JSON.stringify(this.reviews));
      this.imageLoaded = true;
      this.calculateThumbnailHeight();
    },
    onImageLoad() {
      this.imageLoaded = true;
      this.calculateThumbnailHeight();
    },
    calculateThumbnailHeight() {
      this.$nextTick(() => {
        if (this.$refs.thumbnail) {
          this.thumbnailHeight = this.$refs.thumbnail.clientHeight;
        }
      });
    },
  },
  computed: {
    imageUrl() {
      if (this.detail && this.detail.attractionImageUrl) {
        return this.detail.attractionImageUrl;
      } else {
        return require("@/assets/fallback_image.jpg");
      }
    },
    thumbnailStyle() {
      return {
        height: `${this.thumbnailHeight}px`,
        backgroundImage: `linear-gradient(180deg, rgba(17, 21, 54, 0) 0%, rgba(17, 21, 54, 0.5538) 126.77%), url(${this.imageUrl})`,
      };
    },
  },
};
</script>

<style scoped>
div {
  padding: 3px 0px;
}

.floating-button {
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 70px;
  height: 70px;
  background: #beccfe;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 9999;
}

.button-icon {
  width: 27px;
  height: 27px;
  background-image: url("@/assets/plus.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.review-content {
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  word-break: keep-all;
}
.logo {
  width: 30px;
  height: 30px;
}
.user {
  display: flex;
  align-items: center;
}
.user .profile {
  width: 35px;
  height: 35px;
  margin-right: 10px;
  border-radius: 50%;
}
.user .nickname {
  font-weight: 300;
  font-size: 13px;
  line-height: 19px;
}
.user .star-rating {
  padding-left: 120px;
}
.user .star-rating .star-icon {
  width: 15px;
  height: 15px;
}
.thumbnail {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-bottom: 56.25%; /* 이미지 비율에 맞춰 조정 (16:9 비율일 경우) */
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 15px 25px;
  /* background-color: rgba(255, 255, 255, 0.8); */
}

.image-caption {
  color: white;
  font-size: 24px;
}

.main-container {
  /* padding: 10px 0px; */
  margin: 10px 35px;
  overflow-y: auto;
  padding-top: 10px;
  padding-bottom: 130px;
}

.attraction-image {
  width: 100%;
  max-width: 100%;
  height: auto;
}

.attraction-image.loaded {
  opacity: 1;
}

.title {
  padding-top: 25px;
  padding-bottom: 15px;
  font-weight: 700;
  font-size: 18px;

  color: #000000;
}
.description {
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #000000;
  flex: none;
  order: 0;
  flex-grow: 0;
  word-break: keep-all;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5; /* 표시할 최대 줄 수 */
  -webkit-box-orient: vertical;
}
.description-overlay {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  overflow-y: auto;
}
.description.show-full {
  -webkit-line-clamp: unset; /* 전체 텍스트 표시 */
}

.description.show-full .description-overlay {
  display: block;
}
.evaluation {
  font-size: 13px;
  font-weight: 300;
}

.evaluation-score {
  font-weight: 400;
  color: #496def;
}

.category-text {
  font-weight: 300;
  font-size: 13px;
  flex: 1;
  padding-top: 5px;
  padding-right: 3px;
  text-align: right;
}
.star-rating {
  display: flex;
  flex-direction: row;
}
.star-icon {
  width: 20px;
  height: 20px;
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

.logo-icon {
  background-image: url("@/assets/Logo.png");
  transform: scale(0.9);
}
</style>
