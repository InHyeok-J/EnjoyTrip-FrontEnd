<template>
  <div class="main-container">
    <div class="profile">
      <div
        class="image"
        :style="`background-image : url(${
          user.profileImg == null
            ? require('@/assets/Logo.png')
            : user.profileImg
        })`"
      ></div>
      <div class="user">
        <div class="name">{{ user.nickname }}</div>
        <br />
        <div class="email">{{ user.email }}</div>
      </div>
      <div class="setting" @click="modifyForm">
        <button class="setting-button" />
      </div>
    </div>

    <div class="logout">
      <button class="common-btn" @click="logout">로그아웃</button>
    </div>

    <div class="review-container">
      <div class="reviews">
        <button
          class="review-block"
          :class="{ active: isCourseSelected }"
          @click="toggleReviewSelection('review')"
        >
          <div class="title">내가 작성한 <b>여행 코스</b></div>
          <div class="count">{{ myCourses.length }}</div>
        </button>
      </div>
      <div class="reviews">
        <button
          class="course-block"
          :class="{ active: isReviewSelected }"
          @click="toggleReviewSelection('course')"
        >
          <div class="title">내가 작성한 <b>여행 후기</b></div>
          <div class="count">{{ myReviews.length }}</div>
        </button>
      </div>
    </div>

    <div class="details">
      <div v-if="isCourseSelected" class="detail-title">내가 작성한 <b>여행 코스</b>
        <div class="detail-course-table">
          <div class="detail-course-frame">
            <div v-for="(course, id) in myCourses" :key="id">
              <img class="detail-img" :src=course.courseImgUrl @click="moveInCourse(course.id)">
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="isReviewSelected" class="detail-title">내가 작성한 <b>여행 후기</b>
        <div class="detail-review-table">
          <div class="detail-review-frame">
            <div v-for="(review, id) in myReviews" :key="id">
              <div class="reviews-container" @click="moveInAttraction(review.attractionId)">

                <div class="review-attractionName">{{ review.attractionName }}</div>
                <div class="review-title"> 제 목 : {{ review.title }}</div>
                <div class="review-content"> 후 기 : {{ review.content }}</div>
                <div class="review-createdAt">{{ formatDate(review.createdAt) }}</div>
                <hr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLogout } from "@/api/authApi";
import userConstant from "@/store/constants/userConstant";
import http from "@/api/axios/index.js"
export default {
  data() {
    return {
      isReviewSelected: false,
      isCourseSelected: true,
      rowSize: 15,
      user: null,
      myCourses: null,
      myReviews: null,
    };
  },
  created() {
    this.user = this.$store.state.userStore;
    this.getCoursesReview();
  },
  methods: {
    getCoursesReview() {
      http
        .get("/courses/my-list")
        .then(response => {
          this.myCourses = response.data.data;
          console.log(this.myCourses);

        })
        .catch(()=>{
          console.log("데이터 가져오지 못함")
        })
        http
        .get("/attractions/reviews")
        .then(response => {
          this.myReviews = response.data.data;
          console.log(this.myReviews);
        })
        .catch(()=>{
          console.log("데이터 가져오지 못함")
        })
    },
    toggleReviewSelection(reviewType) {
      if (reviewType === "course" && this.isCourseSelected) {
        this.isReviewSelected = !this.isReviewSelected;
        this.isCourseSelected = !this.isCourseSelected;
      } else if (reviewType === "review" && this.isReviewSelected) {
        
        this.isReviewSelected = !this.isReviewSelected;
        this.isCourseSelected = !this.isCourseSelected;
      }
    },
    modifyForm() {
      this.$router.push("/mypage/manage");
    },
    async logout() {
      await getLogout();
      this.$store.commit(userConstant.CALL_MU_INIT_USER_INFO);
      localStorage.removeItem("trify-user");
      alert("로그아웃 성공");
      this.$router.push("/");
    },
    formatDate(date) {
      const formattedDate = new Date(date);
      const year = formattedDate.getFullYear().toString().slice(-2);
      const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
      const day = formattedDate.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    moveInCourse(id){
      console.log(id);
      this.$router.push("/courses/"+id);
    },
    moveInAttraction(id){
      console.log(id);
      this.$router.push("/attraction-detail/"+id);
    },
  },
};
</script>

<style scoped>
.main-container {
  padding-top: 70px;
  margin: 5px 30px;

  padding-bottom: 70px;
}
.profile {
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.image {
  border-radius: 500px;
  width: 69px;
  height: 69px;
  background-size: cover;
  background-position: center;
}
.user {
  display: flex;
  flex-direction: column;
  width: 60%;
}
.setting-button {
  width: 30px;
  height: 30px;
  background-image: url("@/assets/setting_button.png");
  background-size: cover;
}
.logout {
  display: flex;
  justify-content: center;
  align-items: center;
}
.common-btn {
  margin-top: 30px;
  width: 320px;
  height: 50px;
  background-color: #e7e7e7;
  font-family: "Noto Sans KR";
  color: #000;
  text-align: center;
}
.review-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
}
.review-block {
  background-color: white;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 17px 24px;
  gap: 10px;

  border-radius: 10px;
}
.review-block.active {
  background-color: #e7e7e7;
  color: #ffffff;
}
.course-block {
  background-color: white;
  /* Auto layout */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 17px 24px;
  gap: 10px;

  border-radius: 10px;
}
.course-block.active {
  background-color: #e7e7e7;
  color: #ffffff;
}
.title {
  width: 87px;
  height: 44px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #000000;
}
.count {
  width: 93px;
  height: 44px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 41px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.details {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 0px;
}
.detail-title {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  margin: 10px 5px;
}
.detail-course-frame {
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-auto-rows: 100px;
  column-gap: 5px;
  row-gap: 7px;
}
.detail-img {
  width: 100%;
  height: 100%;
  
  border-radius: 10px;
  background-size: 300%;
  background-position: center;
}
.reviews-container{
  margin: 10px 0px 10px;
}
.review-attractionName{
  font-size: 20px;
  font-weight: 400px;
}
.review-title{
  padding: 10px 0px;
}
.review.content{

}
.review-createdAt{
  text-align:right;
}
</style>
