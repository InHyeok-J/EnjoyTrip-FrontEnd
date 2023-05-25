<template>
  <div class="main-container">
    <div class="course-all">
      <div class="page-title">여행 코스</div>
      <div
        class="course"
        v-for="course in courses"
        :key="course.course.id"
        @click="moveInCourse(course.course.id)"
      >
        <div class="course-img-container">
          <img class="course-img" :src="course.course.courseImgUrl" />
        </div>
        <div class="courss-info">
          <div class="course-username">
            {{ course.nickname }}
          </div>
          <div class="course-title">
            {{ course.course.title }}
          </div>
          <div class="course-attractions">
            {{ course.courseExample }}
          </div>
          <div class="course-reaction">
            <div class="course-comment">
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
      </div>
      <div class="addBnt-container" @click="addCourse()">
        <img src="@/assets/addBtn.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/api/axios/index.js";
export default {
  data() {
    return {
      courses: [],
      commentCnt: 0,
    };
  },
  created() {
    this.selectAll();
  },
  methods: {
    moveInCourse(id) {
      console.log(id);
      this.$router.push("/courses/" + id);
    },
    selectAll() {
      http
        .get("/courses")
        .then((response) => {
          this.courses = response.data.data;
          console.log(this.courses);
        })
        .catch(() => {
          console.log("데이터 가져오지 못함");
        });
    },
    addCourse() {
      this.$router.push("/courses/regist/form");
    },
  },
};
</script>

<style scoped>
.main-container {
  margin-top: 10px;
  padding-bottom: 70px;
}
.page-title {
  width: 217px;
  height: 29px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;

  margin-bottom: 20px;
}

.course-all {
}
.course {
  width: 100%;
  height: 110px;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  margin-bottom: 20px;
}
.course-img {
  width: 110px;
  height: 110px;
  border-radius: 5%;
}

.course-info {
  margin: 3px 4px;
}

.course-username {
  width: 100%;
  height: 19px;
}

.course-title {
  width: 100%;
  height: 25px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
}

.course-attractions {
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  height: 38px;
  width: 210px;
}
.course-reaction {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 15px;
}
.course-comment {
  display: flex;
  flex-basis: 25%;
  justify-content: space-evenly;
  align-items: end;
}
.course-comment-img {
  widows: 15px;
  height: 15px;
}
.course-comment-count {
  font-size: 15px;
  color: #496def;
}
.course-reaction {
  height: 25%;
}
.course-like {
  display: flex;
  flex-basis: 25%;
  justify-content: space-evenly;
  align-items: end;
}
.course-like-img {
  widows: 15px;
  height: 15px;
}
.course-like-count {
  font-size: 15px;
  color: #f46f6f;
}
.addBnt-container {
  position: absolute;
  width: 75px;
  height: 75px;
  left: 286px;
  top: 50%;
  border-radius: 50%;
  background: #beccfe;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
