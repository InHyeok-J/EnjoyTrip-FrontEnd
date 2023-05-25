<template>
  <div class="main-container">
    <div
      class="main-img"
      :style="`background-image:linear-gradient(180deg, rgba(17, 21, 54, 0) 0%, rgba(17, 21, 54, 0.5538) 126.77%), url(${course.course.courseImgUrl}) `"
    >
      <div class="course-title">{{ course.course.title }}</div>
      <div class="course-like-container">
        <img
          v-if="course.isLike == true"
          class="course-titile-like-img"
          src="@/assets/course-icons/Course_detail_like.svg"
          @click="changeLike(course.course.id)"
        />
        <img
          v-else
          class="course-titile-like-img"
          src="@/assets/course-icons/Course_detail_unlike.svg"
          @click="changeLike(course.course.id)"
        />
      </div>
    </div>
    <div class="course-writer-container">
      <img
        class="course-writer-img"
        :src="course.profileImg"
        alt="@/assets/defaultUser.svg"
      />
      <div class="course-writer-info">
        <div class="course-writer-name">
          <b>{{ course.nickname }}</b
          >님의 여행코스
        </div>
        <div class="course-writer-createdAt">
          {{ formatDate(course.course.createdAt) }}
        </div>
      </div>
      <div class="course-share">
        <button @click="courseShare">
          <img
            class="course-share-btn"
            src="@/assets/course-icons/Course_shareBtn.png"
          />
        </button>
      </div>
    </div>
    <div class="course-count-reaction">
      <div class="course-count">관광지 {{ course.attractionCnt }}개</div>
      <div class="course-reaction">
        <div class="course-comment-info">
          <img
            class="course-comment-img"
            src="@/assets/course-icons/Course_comment.png"
          />
          <div class="course-comment-count">{{ course.commentCnt }}</div>
        </div>
        <div class="course-like">
          <img
            class="course-like-img"
            src="@/assets/course-icons/Course_like.png"
          />
          <div class="course-like-count">{{ course.likeCnt }}</div>
        </div>
      </div>
    </div>
    <!-- <kakao-map :plans="course.plans"></kakao-map> -->
    <div>
      <div id="map"></div>
    </div>
    <div class="course-info-container">
      <div class="course-info-explain">
        <div class="explain-title">설명</div>
        <div calss="course-comment">{{ course.course.description }}</div>
      </div>
      <hr />
      <div class="course-info-detail">
        <div class="total-day">{{ course.days }}</div>
        <div
          class="day-container"
          v-for="(attractions, x) in course.plans"
          :key="x"
        >
          <div class="day-info">
            <div class="day-title">{{ x + 1 }}일차</div>
            <div class="day-date">{{ formatDate(attractions[0].date) }}</div>
          </div>
          <div
            class="attractions"
            v-for="(attraction, y) in attractions"
            :key="y"
          >
            <div class="attraction-name">
              {{ attraction.attractionName }}
            </div>
            <div class="attraction-address">
              {{ attraction.address }}
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div class="course-comments-container">
        <div class="course-comments-head">
          <div class="course-comments-title">댓글</div>
          <div class="course-comments-add" @click="showCommentWindow()">
            댓글 작성하기
          </div>
        </div>
        <div
          class="course-comments-detail-container"
          v-for="(comment, index) in course.comments"
          :key="index"
        >
          <div class="course-comments-detail-title">
            <img class="course-comment-userimg" :src="comment.profileImgUrl" />
            <div class="course-comment-username">
              {{ comment.nickname }}
            </div>
          </div>
          <div class="course-comment-comment">
            {{ comment.courseComment.content }}
          </div>
          <div class="course-comment-createdAt">
            {{ formatDate(comment.courseComment.createdAt) }}
          </div>
          <hr />
        </div>
      </div>
      <div class="modal" v-if="commentAddWindowShow">
        <div class="modal-content">
          <div class="modal-msg">
            <textarea class="modal-txt" v-model="myComment" row="4"></textarea>
          </div>

          <div class="button-container">
            <button class="cancle-btn" @click="cancel">취소</button>
            <button class="confirm-btn" @click="confirm">확인</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import KakaoMap from "@/components/course/KakaoMap.vue";
import http from "@/api/axios/index.js";

export default {
  data() {
    return {
      course: { course: { courseImgUrl: null } },
      couuseLike: true,
      myComment: "",
      commentAddWindowShow: false,

      coordinate: [],
      first: [],
    };
  },
  created() {
    this.getCourse(this.$route.params.id);
  },
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
  },
  watch: {},
  methods: {
    getCourse(id) {
      http
        .get("/courses/" + id)
        .then((response) => {
          this.course = response.data.data;
          // console.log(this.course);
          // console.log(this.course.plans);
          for (var i = 0; i < this.course.plans.length; i++) {
            for (var j = 0; j < this.course.plans[i].length; j++) {
              var latitude = this.course.plans[i][j].latitude;
              var longitude = this.course.plans[i][j].longitude;
              this.coordinate.push({ latitude, longitude });
            }
          }
          this.first = this.coordinate[0];
          console.log(this.first);
        })
        .catch(() => {
          console.log("데이터 가져오지 못함");
        });
    },
    courseShare() {
      console.log(this.course.id);
    },
    changeDeatilImg() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.images.length;
    },
    changeLike(id) {
      http
        .patch("/courses/like", {
          courseId: id,
          isLike: this.course.isLike,
        })
        .then((response) => {
          this.course.isLike = response.data.data;
          if (this.course.isLike) {
            this.course.likeCnt++;
          } else {
            this.course.likeCnt--;
          }
        })
        .catch((e) => {
          console.log("좋아요 변경 실패");
          if (e.response.data && e.response.status === 403) {
            alert("로그인이 필요합니다.");
            this.$router.push("/login");
            return;
          }
          alert("서버 에러!");
        });
    },
    showCommentWindow() {
      this.commentAddWindowShow = !this.commentAddWindowShow;
    },
    confirm() {
      http
        .post("/courses/comment", {
          courseId: this.course.course.id,
          content: this.myComment,
        })

        .then((response) => {
          this.course.comments.unshift(response.data.data);
          this.course.commentCnt++;
        });
      this.myComment = "";

      this.commentAddWindowShow = false; // 모달 닫기
    },
    cancel() {
      this.myComment = "";
      this.commentAddWindowShow = false; // 모달 닫기
    },
    formatDate(date) {
      const formattedDate = new Date(date);
      const year = formattedDate.getFullYear().toString().slice(-2);
      const month = (formattedDate.getMonth() + 1).toString().padStart(2, "0");
      const day = formattedDate.getDate().toString().padStart(2, "0");
      return `${year}-${month}-${day}`;
    },
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=4c5b7b7b6e3f8a6e8eef32d998a17db7&autoload=false";
      script.onload = () => window.kakao.maps.load(this.loadMap);

      document.head.appendChild(script);
    },
    // 맵 출력하기
    loadMap() {
      console.log(this.first.latitude);
      console.log(this.first.longitude);
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(
          this.first.latitude,
          this.first.longitude
        ),
        level: 3,
      };

      this.map = new window.kakao.maps.Map(container, options);
      this.loadMaker();
    },
    // 지정한 위치에 마커 불러오기
    loadMaker() {
      // const markerPosition = new window.kakao.maps.LatLng(
      //   33.450701,
      //   126.570667
      // );

      // const marker = new window.kakao.maps.Marker({
      //   position: markerPosition,
      // });

      // marker.setMap(this.map);
      console.log(this.coordinate);
      for (var i = 0; i < this.coordinate.length; i++) {
        const { latitude, longitude } = this.coordinate[i];
        const markerPosition = new window.kakao.maps.LatLng(
          latitude,
          longitude
        );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(this.map);
      }
    },
  },
  components: {
    // KakaoMap
  },
};
</script>

<style scoped>
.main-container {
  margin: 0px;
  padding-bottom: 90px;
}

.main-img {
  width: 100%;
  height: 255px;

  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: space-around;
  align-items: end;
}
.course-title {
  color: aliceblue;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 27px;
  line-height: 39px;

  margin-bottom: 19px;
}

.course-like-container {
  width: 43px;
  height: 43px;
  margin-bottom: 15px;
}

.course-writer-container {
  height: 86px;

  color: aliceblue;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 39px;

  margin-bottom: 19px;
}

.course-like-container {
  width: 43px;
  height: 43px;
  margin-bottom: 15px;
}

.course-writer-container {
  height: 86px;

  display: flex;
  align-items: center;
  margin: 0px 30px;
}
.course-writer-img {
  width: 55px;
  height: 50px;

  border-radius: 50%;
  object-fit: cover;
  margin-right: 17px;
}
.course-writer-info {
  width: 70%;
  height: 38px;
  margin-right: 11%;
}
.course-share {
  height: 50px;
  display: flex;
  align-items: flex-start;
}
.course-share-btn {
  width: 24px;
  height: 24px;
}
.course-count-reaction {
  height: 25px;

  display: flex;
  justify-content: space-between;

  margin: 0px 30px;
}
.course-reaction {
  width: 117px;
  height: 30px;
  display: flex;
  justify-content: end;
}
.course-comment-info {
  width: 32px;
  height: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 12px;
  gap: 5px;
}
.course-comment-img {
  width: 15px;
  height: 15px;
}
.course-comment-count {
  font-size: 15px;
  color: #496def;
}
.course-like {
  width: 35px;
  display: flex;
  gap: 5px;
}
.course-like-img {
  widows: 15px;
  height: 15px;

  margin-top: 3px;
}
.course-like-count {
  font-size: 15px;
  color: #f46f6f;
}
.course-info-container {
  margin: 10px 30px;
}

.course-info-explain {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0px 25px;
  gap: 5px;

  width: 100%;
  height: 96px;
}

.explain-title {
  width: 185px;
  height: 36px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
}

.course-comment {
  width: 100%;
  height: 53px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
}

.course-info-detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}
.total-day {
  width: 100%;
  height: 36px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
}
.day-container {
  width: 100%;
}
.day-info {
  display: flex;
  gap: 16px;

  width: 100%;
  height: 39px;
}
.day-title {
  width: 75%;
  height: 29px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
}

.day-date {
  height: 19px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 19px;
}
.attractions {
  justify-content: center;
  /* align-items: flex-start; */
  width: 330px;
  height: 42px;
}
.attraction-name {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
}
.attraction-address {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  margin: 3px 0px;
}
.course-comments-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
}

.course-comments-head {
  display: flex;
  align-items: center;
  gap: 50%;

  width: 100%;
  height: 37px;
}
.course-comments-title {
  width: 35%;
  height: 26px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
}

.course-comments-add {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: right;
  color: #496def;

  flex: none;
  order: 1;
  flex-grow: 0;
}
.course-comments-detail-container {
  width: 100%;
}
.course-comments-detail-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 0px 0px;

  width: 100%;
  height: 41px;
}
.course-comment-userimg {
  gap: 10px;

  width: 35px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  flex: none;
  order: 0;
  flex-grow: 0;
}
.course-comment-username {
  width: 35%px;
  height: 19px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 19px;

  margin-left: 10px;
}

.course-comment-comment {
  gap: 13px;

  width: 100%;

  margin: 5px 0px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
}

.course-comment-createdAt {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 0px;

  width: 100%;
  height: 27px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 17px;
}
.modal {
  position: fixed;
  left: calc(50% - 264.88px / 2 + 0.44px);
  top: calc(50% - 109.34px / 2 + 0.17px);
  width: 264.88px;
  height: 150px;

  box-shadow: 1.54px 3.08px 7.7px 1.54px rgba(0, 0, 0, 0.2);
  border-radius: 15.4px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-msg {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;

  height: 60px;
}
.button-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
}
.confirm-btn {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #f46f6f;
}
.cancle-btn {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;

  color: #65d4a5;
}

.modal-txt {
  width: 200px;
  resize: none; /* 크기 조절을 비활성화합니다. */
}

#map {
  width: 100%;
  height: 514px;
  z-index: 0;
  margin: 10px 0px 0px;
}

.button-group {
  margin: 10px 0px;
}

button {
  margin: 0 3px;
}
</style>
