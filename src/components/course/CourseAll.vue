<template>
  <div class="main-container">
    <div class ="course-all">
      <div class="page-title">여행 코스</div>
      <div class="course" v-for="(course, index) in courses" :key="index" @click="moveInCourse(course.id)">
        <div class="course-img-container">
          <img class="course-img" src="@/assets/경복궁.jpg">
          {{ course.img }}
        </div>
        <div class="courss-info">
          <div class="course-username">
            {{ course.username }}
          </div>
          <div class="course-title">
            {{ course.title }}
          </div>
          <div class="course-attractions">
            {{ course.attractions }}
          </div>
          <div class="course-reaction">
            <div class="course-comment">
              <img class="course-comment-img" src="@/assets/course-icons/Course_comment.png">
              <div class="course-comment-count">23</div>
            </div>
            <div class="course-like">
              <img class="course-like-img" src="@/assets/course-icons/Course_like.png">
              <div class="course-like-count">23</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      courses: [
        {
          id:1,
          username: "이예은",
          title: "떠나요 제주도",
          attractions: "월정리 해변, 우도, 성산일출봉, 만장동굴, 우무, 빛의 벙커"
        },
        {
          id:2,
          username: "이예은",
          title: "떠나요 제주도",
          attractions: "월정리 해변, 우도, 성산일출봉, 만장동굴, 우무, 빛의 벙커"
        },
        {
          id:3,
          username: "이예은",
          title: "떠나요 제주도",
          attractions: "월정리 해변, 우도, 성산일출봉, 만장동굴, 우무, 빛의 벙커"
        },
        {
          id:4,
          username: "이예은",
          title: "떠나요 제주도",
          attractions: "월정리 해변, 우도, 성산일출봉, 만장동굴, 우무, 빛의 벙커"
        },
        {
          id:1,
          username: "이예은",
          title: "떠나요 제주도",
          attractions: "월정리 해변, 우도, 성산일출봉, 만장동굴, 우무, 빛의 벙커"
        },
        {
          id:2,
          username: "이예은",
          title: "떠나요 제주도",
          attractions: "월정리 해변, 우도, 성산일출봉, 만장동굴, 우무, 빛의 벙커"
        },
        {
          id:3,
          username: "이예은",
          title: "떠나요 제주도",
          attractions: "월정리 해변, 우도, 성산일출봉, 만장동굴, 우무, 빛의 벙커"
        },
        {
          id:4,
          username: "이예은",
          title: "떠나요 제주도",
          attractions: "월정리 해변, 우도, 성산일출봉, 만장동굴, 우무, 빛의 벙커"
        },
      ],
    }
  },
  methods: {
    moveInCourse(id){
      console.log(id);
      this.$router.push("/courses/"+id);
    }
  }
}
</script>

<style scoped>
  .main-container {
    margin-top : 10px;
    padding-bottom: 70px;
  }
  .page-title {
    width: 217px;
    height: 29px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;

    margin-bottom: 20px;
  }

  .course-all{
  }
  .course {
    width: 100%;
    height: 110px;
    display: flex;
    flex-direction: row;
    column-gap: 10px;
    margin-bottom: 20px;
  }

  .course-img-container {
  }
  .course-img{
    width: 110px;
    height: 110px;
    border-radius: 5%;
  }

  .course-info {
    width: 205px;
    margin: 3px 4px;
  }

  .course-username {
    width: 60px;
    height: 19px;
  }

  .course-title {
    width: 100%;
    height: 25px;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 1000;
    font-size: 20px;
    line-height: 23px
  }

  .course-attractions {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
  }
  .course-reaction{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    height: 15px;
  }
  .course-comment{
    display: flex;
    flex-basis: 25%;
    justify-content: space-evenly;
    align-items: end;
  }
  .course-comment-img{
    widows: 15px;
    height: 15px;
  }
  .course-comment-count{
    font-size: 15px;
    color: #496DEF;
  }
  .course-reaction{
    height: 25%;
  }
  .course-like{
    display: flex;
    flex-basis: 25%;
    justify-content: space-evenly;
    align-items: end;
  }
  .course-like-img{
    widows: 15px;
    height: 15px;
  }
  .course-like-count{
    font-size: 15px;
    color: #F46F6F;
  }
</style>