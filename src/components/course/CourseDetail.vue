<template>
  <div class="main-container">
    <div class="main-img">
       <div class="course-title">{{ course.title }}</div>
       <div class="course-like-container">
        <img class="course-like-img" src="@/assets/Course_detail_like.png">
       </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      course: {
          id:4,
          username: "이예은",
          title: "떠나요 제주도",
          attractions: "월정리 해변, 우도, 성산일출봉, 만장동굴, 우무, 빛의 벙커"
        }
    }
  },
  created(){
    this.getCourse(this.$router.params.id);
  },
  methods: {
    getCourse(id) {
      console.log(id);
    }
  },
}
</script>

<style scoped>
.main-container{
  margin: 0px;
}

.main-img{
  width: 392px;
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
.course-like-container{
    width: 43px;
    height: 43px;
    margin-bottom: 21px;
  }
  .course-like-img{
  }
</style>