<template>
  <div class="main-container">
    <div class="main-img">
       <div class="course-title">{{ course.title }}</div>
       <div class="course-like-container">
        <img class="course-like-img" src="@/assets/Course_detail_like.png">
       </div>
    </div>
    <div class="course-writer-container">
      <img class="course-writer-img" src="@/assets/profile_image.png">
      <div class="course-writer-info">
        <div class="course-writer-name"><b>{{ course.username }}</b>님의 여행코스</div>
        <div class="course-writer-createdAt">{{ course.createdAt }}</div>
      </div>
      <div class="course-share">
        <button @click="courseShare">
          <img class="course-share-btn" src="@/assets/Course_shareBtn.png">
        </button>
      </div>
    </div>
    <div class="course-count-reaction">
      <div class="course-count">관광지 4개</div>
      <div class="course-reaction">
            <div class="course-comment">
              <img class="course-comment-img" src="@/assets/Course_comment.png">
              <div class="course-comment-count">23</div>
            </div>
            <div class="course-like">
              <img class="course-like-img" src="@/assets/Course_like.png">
              <div class="course-like-count">23</div>
            </div>
          </div>
    </div>
    <div class="course-map">
      ss
    </div>
    <div class="course-info-container">
      <div class="course-info-explain">
        <div>설명</div>
        <div>{{ course.comment }}</div>
      </div>
      <hr>
      <div class="course-info-detail">
        <div>

        </div>
      </div>
      <div>
        <div>
          <div>댓글</div>
          <div>댓글 작성하기</div>
        </div>

      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      course: {
          id:1,
          username: "이예은",
          title: "떠나요 제주도",
          attractions: "월정리 해변, 우도, 성산일출봉, 만장동굴, 우무, 빛의 벙커",
        createdAt: "2023-05-19",
          comment: "걷는 거 싫어해서 적게 걷는 코스를 계획해봤어요."
        }
    }
  },
  created(){
    this.getCourse(this.$route.params.id);
  },
  methods: {
    getCourse(id) {
      console.log(id);
    },
    courseShare() {
      console.log(this.course.id);
    }
  },
}
</script>

<style scoped>
.main-container{
  margin: 0px;
  padding-bottom: 80px;
}

.main-img{
  width: 100%;
  height: 255px;

  background-image: linear-gradient(180deg, rgba(17, 21, 54, 0) 0%, rgba(17, 21, 54, 0.5538) 126.77%),url("@/assets/경복궁.jpg");
  background-position: center;
  background-size: 100%;
  
  display: flex;
  justify-content: space-AROUND;
  align-items: end;
}
.course-title {
    height: 39px;

    color: aliceblue;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 1000;
    font-size: 20px;
    line-height: 23px;

    margin: 0px 100px 19px 0px;
    
  }
  .course-count-reaction{
  height: 25px;

    display: flex;
    justify-content: space-between;

    margin: 0px 30px;
  }
  .course-like-container{
      width: 43px;
      height: 43px;
      margin-bottom: 21px;
    }
    
    .course-writer-container{
      height: 86px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0px 30px;
    }
    .course-writer-img{
      width: 50px;
      height: 50px;

      border-radius: 50%;
    }
    .course-share{
      height: 50px;
      display: flex;
      align-items: flex-start;
    }
    .course-share-btn{
      width: 24px;
      height: 24px;
    }
    .course-reaction{
      width: 117px;
      height: 30px;
      display: flex;
      justify-content: space-evenly;
    }
    .course-comment{
      width: 30%;
      display: flex;
      justify-content: space-between;
    }
    .course-comment-img{
      widows: 15px;
      height: 15px;
    }
    .course-comment-count{
      font-size: 15px;
      color: #496DEF;
    }
    .course-like{
      width: 30%;
      display: flex;
      justify-content: space-between;
    }
    .course-like-img{
      widows: 15px;
      height: 15px;
    }
    .course-like-count{
      font-size: 15px;
      color: #F46F6F;
    }
    .course-map{
      height: 514px;
      border: 1px solid black;
    }

    .course-info-container{
      margin: 10px 30px;
    }
</style>