<template>
  <div class="main-container">
    <div class="main-img">
       <div class="course-title">{{ course.title }}</div>
       <div class="course-like-container">
        <img class="course-titile-like-img" src="@/assets/course-icons/Course_detail_like.png">
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
          <img class="course-share-btn" src="@/assets/course-icons/Course_shareBtn.png">
        </button>
      </div>
    </div>
    <div class="course-count-reaction">
      <div class="course-count">관광지 4개</div>
      <div class="course-reaction">
            <div class="course-comment-info">
              <img class="course-comment-img" src="@/assets/course-icons/Course_comment.png">
              <div class="course-comment-count">23</div>
            </div>
            <div class="course-like">
              <img class="course-like-img" src="@/assets/course-icons/Course_like.png">
              <div class="course-like-count">23</div>
            </div>
          </div>
    </div>
    <!-- <div class="course-map">
      ss
    </div> -->
    <kakao-map></kakao-map>
    <div class="course-info-container">
      <div class="course-info-explain">
        <div class="explain-title">설명</div>
        <div calss="course-comment">{{ course.comment }}</div>
      </div>
      <hr>
      <div class="course-info-detail">
        <div class="total-day">{{ course.days }}</div>
        <div v-for="(attractions,x) in course.plans" :key="x">
          <div class="day-info">
            <div class="day-title">{{ x+1 }}일차</div>
            <div class="day-date">{{ attractions[0].date}}</div>
          </div>
          <div class="attractions" v-for="(attraction,y) in attractions" :key="y">      
            <div class="attraction-name">
              {{ attraction.name }}
            </div>
            <div class="attraction-address">
              {{ attraction.address }}
            </div>
          </div>
          <hr>
        </div>
      </div>
      <div class="course-comments-container">
        <div class="course-comments-head">
          <div class="course-comments-title">댓글</div>
          <div class="course-comments-add">댓글 작성하기</div>
        </div>
        <div class="course-comments-detail-container" v-for="(comment, index) in comments" :key="index">
          <div class="course-comments-detail-title">
            <img class ="course-comment-userimg" src="@/assets/profile_image.png">
            <div class="course-comment-username">
              {{ comment.username }}
            </div>
          </div>
          <div class="course-comment-comment">
            {{ comment.comment }}
          </div>
          <div class="course-comment-createdAt">
            {{ comment.createdAt }}
          </div>
          <hr>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import KakaoMap from "@/components/course/KakaoMap.vue";
export default {
  data() {
    return {
      course: {
          id:1,
          username: "이예은",
          title: "떠나요 제주도",
          attractionsName: "월정리 해변, 우도, 성산일출봉, 만장동굴, 우무, 빛의 벙커",
          days: "2박 3일",
          plans : [
            [
              {
                id: 1,
                day: "1",
                date:"2023-05-19",
                name: "월정리 해변",
                address: "제주도 제주시 정자일로 80"
              },
              {
                id: 2,
                day: "1",
                date:"2023-05-19",
                name: "만장굴",
                address: "제주도 제주시 정자일로 80"
              }
            ],
            [
              {
                id: 1,
                day: "2",
                date:"2023-05-20",
                name: "성산일출봉",
                address:"제주도 제주시 정자일로 80",
              }
            ],
            [
              {
                id: 1,
                day: "3",
                date:"2023-05-20",
                name: "성산일출봉",
                address:"제주도 제주시 정자일로 80",
              }
            ]
          ],
          createdAt: "2023-05-19",
          comment: "걷는 거 싫어해서 적게 걷는 코스를 계획해봤어요."
      },
      comments: [
        {
          id: 1,
          username: "멋진 사나이 조인혁",
          comment: "여자친구 내놔",
          createdAt: "2023-05-21"
        },
        {
          id: 2,
          username: "멋진 사나이 박지환",
          comment: "여자친구가 걷는 거 싫어하는데 괜찮은 코스네요",
          createdAt: "2023-05-21"
        },
        {
          id: 3,
          username: "미친 쳇바퀴",
          comment: "그녀와 나는요 언젠간 만날거죠 변해버린 모습 변해버린 시간 속에 그녀도 날 못잊을 거야 나는 믿어요 그만큼 사랑했죠 그래서 우린 한 번은 만나야만 해요 우리가 처음만난 그 시간 그자리에 내가 매일 기다린다고 언제라도",
          createdAt: "2023-05-21"
        },
      ]
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
  components: {
    KakaoMap
  }
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
  /* justify-content: space-around; */
  align-items: end;
}
.course-title {
    height: 39px;

    color: aliceblue;

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 39px;

    margin: 0px 145px 19px 27px;
    
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
      margin-bottom: 15px;
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
    .course-comment-info{
      width: 32px;
      height: 21px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .course-comment-img{
      width: 15px;
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
    /* .course-map{
      height: 514px;
      border: 1px solid black;
    } */

    .course-info-container{
      margin: 10px 30px;
    }

    .course-info-explain{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 0px 25px;
      gap: 5px;

      width: 330px;
      height: 96px;
    }

    .explain-title{
      width: 185px;
      height: 36px;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
    }

    .course-comment{
      width: 328px;
      height: 53px;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 19px;
    }

    .course-info-detail{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5px;
    }
     .total-day{
      width: 100%;
      height: 36px;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
    }
    .day-info{
      display: flex;
      align-items: flex-start;
      padding: 10px 15px;
      gap: 16px;

      width: 329px;
      height: 39px;
    }
    .day-title{
      width: 217px;
      height: 29px;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
    }

    .day-date{
      width: 71px;
      height: 19px;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 19px;
    }
    .attractions{
      justify-content: center;
      align-items: flex-start;
      padding: 3px 15px;
      gap: 13px;

      width: 330px;
      height: 42px;

    }
    .attraction-name{
      font-weight: bold;
    }
    .attraction-address{
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 19px;
    }
    .course-comments-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 16px 25px;
      gap: 5px;
    }

    .course-comments-head{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 182px;

      width: 309px;
      height: 37px;
    }
    .course-comments-title{
      width: 34px;
      height: 26px;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
    }

    .course-comments-add{
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: right;
      color: #496DEF;

      flex: none;
      order: 1;
      flex-grow: 0;
    }

    .course-comments-detail-title{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 6px 0px 0px;

      width: 301px;
      height: 41px;


      /* Inside auto layout */

      flex: none;
      order: 1;
      flex-grow: 0;
    }
    .course-comment-userimg{
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 0px;
      gap: 10px;

      width: 35px;
      height: 34px;
      border-radius: 50%;
      flex: none;
      order: 0;
      flex-grow: 0;
    }
    .course-comment-username{
      width: 110px;
      height: 19px;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 300;
      font-size: 13px;
      line-height: 19px;

      margin-left: 10px;
    }

    .course-comment-comment{
      gap: 13px;

      width: 303px;

      margin: 5px 0px;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 400;
      font-size: 13px;
      line-height: 19px;
    }

    .course-comment-createdAt{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: flex-start;
      padding: 0px;

      width: 303px;
      height: 27px;
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 17px;
    }

   
</style>