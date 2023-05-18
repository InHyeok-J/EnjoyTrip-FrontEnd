<template>
    <div class="main-container">
        <div class="profile">
            <div class="image"></div>
            <div class="user">
                <div  class="name">이예은</div><br>
                <div  class="email">yeeun_1ee@naver.com</div>
            </div>
            <div class="setting">
                <button class="setting-button"/>
            </div>
        </div>
        
        <div class="logout">
            <button class="common-btn">
                로그아웃
            </button>
        </div>

        <div class="review">
            <button class="review-block">
                <div class="review-title">내가 작성한 <b>여행 코스</b></div>
                <div class="review-count">38</div>
            </button>
            <button class="review-block">
                <div class="review-title">내가 작성한 <b>여행 후기</b></div>
                <div class="review-count">5</div>
            </button>
        </div>

        <div class="details">
            <div class="detail-title">내가 작성한 <b>여행 코스</b></div>
            <div class="detail-imgs" v-for="(num, index) in 5" :key="index">
                <button class="detail-img" v-for="(num, index) in 3" :key="index"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
 data: function () {
    return {
      nums: [1,2,3,4,5,6,7,8,9],
    };
  }
}
</script>

<style scoped>
.main-container{
    margin: 0px 30px;
}
.profile { 
	height:auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.image {
	border-radius:500px;
	width:69px;
	height:69px;
	background-image:url("@/assets/profile_image.png");
	background-size:cover;
    background-position: center;
}
.user{
    display: flex;
    flex-direction: column;
    width: 60%;
}
.setting-button { 
	width:30px;
	height:30px;
    background-image:url("@/assets/setting_button.png");
	background-size:cover;
    
}
.common-btn{
    margin-top: 30px;
    background-color: #E7E7E7;
    font-family: 'Noto Sans KR';
    color: #000;
    align-items: center;
    text-align: center;
}
.review { 
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 15px;
}
.review-block { 
	background-color:white;
	/* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 17px 24px;
    gap: 10px;

    width: 40%;
    height: auto;

    border-radius: 10px;

}
.review-title {
    width: 87px;
    height: 44px;

    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #000000;
}
.review-count{
    width: 93px;
    height: 44px;

    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.details{
    display: flex;
    flex-direction: column;
    margin-top: 15px;
}
.detail-title{
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 29px;
    margin: 10px 5px;
}
.detail-imgs{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 5px 5px;
}
.detail-img{
    width: 30%;
    height: 100px;
    
    border-radius: 10px;

    background-image: url("@/assets/경복궁.jpg");
	background-size: 300%;
    background-position: center;
}

</style>