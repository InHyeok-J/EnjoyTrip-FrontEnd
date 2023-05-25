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

        <div class="title" style="font-size: 13px">다녀온 후기</div>
        <div v-if="reviews.length === 0" class="no-reviews">
          후기가 없습니다.
        </div>
        <div class="review" v-for="review in reviews" :key="review.id">
          <div class="user">
            <img
              :src="review.userImageUrl || require('@/assets/Logo.png')"
              class="profile logo"
            />
            <span class="nickname">{{ review.nickname }}&nbsp; - </span>
            <div v-if="isToday(review.review.createdAt)" class="review-date">
              &nbsp;&nbsp;{{ formatRelativeDate(review.review.createdAt) }}
            </div>
            <div
              class="more-icon align-right"
              @click="toggleOptions(review.review.reviewId)"
            ></div>
            <div class="options" v-show="review.showOptions">
              <button @click="editReview(review.review.reviewId)">수정</button>
              &nbsp;<button @click="deleteReview(review.review.reviewId)">
                삭제
              </button>
            </div>
          </div>

          <div class="star-rating">
            <div v-for="index in 5" :key="index">
              <div
                class="star-icon"
                :class="{
                  'star-filled-icon': index <= review.review.score,
                }"
                :key="index"
              ></div>
            </div>
          </div>
          <div class="review-title">{{ review.review.title }}</div>
          <div class="review-content">{{ review.review.content }}</div>
        </div>
      </div>
      <router-link
        v-if="!hasUserReviewed"
        :to="`/review/${detail.id}`"
        class="floating-button"
      >
        <span class="button-icon"></span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { getDetail, getReviews, deleteReview } from "@/api/attractionApi";
export default {
  name: "AttractionDetail",
  data() {
    return {
      activeReviewId: null,
      itemId: null,
      detail: null,
      reviews: null,
      imageLoaded: false,
      thumbnailHeight: 0,
      showFullDescription: false,
      hasUserReviewed: false,
    };
  },
  async created() {
    this.itemId = this.$route.params.id;
    await this.loadData();
  },

  methods: {
    toggleOptions(reviewId) {
      const review = this.reviews.find((r) => r.review.reviewId === reviewId);

      if (review) {
        review.showOptions = !review.showOptions;
      }
    },

    editReview(reviewId) {
      // 편집 기능을 처리합니다.
      // 편집 페이지로 이동하거나 편집을 위한 모달을 표시할 수 있습니다.
      console.log(`ID가 ${reviewId}인 리뷰를 수정합니다.`);
    },

    deleteReview(reviewId) {
      // 삭제 기능을 처리합니다.
      // 확인 대화 상자를 표시하거나 리뷰를 직접 삭제할 수 있습니다.
      alert(`ID가 ${reviewId}인 리뷰를 삭제합니다.`);
      deleteReview(this.itemId, reviewId);
      this.loadData();
    },
    formatRelativeDate(dateString) {
      const date = new Date(dateString);
      const now = new Date();
      const diffInMilliseconds = Math.abs(now - date);
      const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
      const diffInHours = Math.floor(diffInMinutes / 60);

      if (diffInMinutes < 60) {
        return `${diffInMinutes}분 전`;
      } else {
        return `${diffInHours}시간 전`;
      }
    },

    isToday(dateString) {
      const date = new Date(dateString);
      const today = new Date();
      return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
      );
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    isWithinDateLimit(dateString) {
      const limitDate = new Date("2023-05-26");
      const date = new Date(dateString);
      return date <= limitDate;
    },
    async loadData() {
      const resDetail = await getDetail(this.itemId);
      const resReviews = await getReviews(this.itemId);
      this.detail = resDetail.data;
      this.reviews = resReviews.data.map((review) => ({
        ...review,
        showOptions: false,
      }));
      console.log("deatil" + JSON.stringify(this.detail));

      console.log("review" + JSON.stringify(this.reviews));
      this.imageLoaded = true;
      this.calculateThumbnailHeight();

      const currentUserId = JSON.parse(localStorage.getItem("trify-user")).id;

      const currentUserReviews = this.reviews.filter(
        (review) => parseInt(review.userId) === currentUserId
      );
      this.hasUserReviewed = currentUserReviews.length > 0;
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
.review {
  padding: 10px 0px;
}
.review-title {
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  word-break: keep-all;
}
.review-content {
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  word-break: keep-all;
  padding: 0px 0px;
}

.review-date {
  font-weight: 300;
  font-size: 12px;
  padding-top: 0px;
  word-break: keep-all;
  text-align: right;
}
.logo {
  width: 30px;
  height: 30px;
}
.user {
  display: flex;
  align-items: center;
}

.align-right {
  margin-left: auto;
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
.star-rating {
  /* padding-left: 120px; */
}
.star-rating .star-icon {
  width: 15px;
  height: 15px;
}
.thumbnail {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-top: 56px;
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
  padding-bottom: 170px;
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

.star-rating-more {
  display: flex;
  align-items: center;
}
.more-icon {
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url("@/assets/attraction/more.svg");
  transform: scale(0.9);
}
.logo-icon {
  background-image: url("@/assets/Logo.png");
  transform: scale(0.9);
}
</style>
