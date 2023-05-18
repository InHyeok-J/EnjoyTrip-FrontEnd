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
        
        <div class=logout>
            <button class="common-btn">
                로그아웃
            </button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main-container{
    margin: 0px 9%;
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
}
.name { 
}
.email { 
}
.setting{
}
.setting-button { 
	width:30px;
	height:30px;
    background-image:url("@/assets/setting_button.png");
	background-size:cover;
    margin-top: 50%;
}
.common-btn{
    margin-top: 30px;
    background-color: #E7E7E7;
    font-family: 'Noto Sans KR';
    color: #000;
    align-items: center;
    text-align: center;
}
.info { 
    /* margin-top: 36px; */
    /* margin-left: 20px; */
    display: block;
    width: 100%;
}
.info-kind { 
	background-color:white;
	/* Auto layout */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 17px 24px;
    gap: 10px;

    width: 25%;
    height: auto;

}
.info-title {
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
.info-count{
    width: 93px;
    height: 44px;

    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 41px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #000000;
}



</style>