<template>
    <div class="main-container">
        <div class="profile">
            <div class="image" @click="userIndoModify">
                <div class="img"></div>    
                <div class="img-modify">
                    <div class="txt">
                        수정
                    </div>  
                </div>
            </div>
            <div class="user-infoes">
                <div class="user-info">    
                    <div class="title">닉네임
                        <div class="block">
                            <div class="back">
                                <input type="text" class="value" v-model="user.name">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="user-info">    
                    <div class="title">이메일
                        <div class="block">
                            <div class="back">
                                <input type="text" class="value" v-model="user.email" readonly>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="user-info">    
                    <div class="title">가입 방식
                        <div class="block">
                            <div class="back">
                                <input type="text" class="value" v-model="user.provider" readonly>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="user-info">    
                    <div class="title">가입일
                        <div class="block">
                            <div class="back">
                                <input type="text" class="value" v-model="user.createdAt" readonly>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="withdraw">
                <button class="common-btn" @click="withdrawShow = true">
                    회원 탈퇴
                </button>
            </div>

            <div class="modal" v-if="withdrawShow">
                <div class="modal-content">
                    <div class="modal-msg">정말 탈퇴하시겠습니까?</div>
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
export default {
    data() {
        return {
            user: {
                name: "이예은",
                email: "yeeun-lee@naver.com",
                provider: "이메일 가입",
                createdAt : "2023-05-03"
            },
            withdrawShow: false,
        };
    },
    // created() {
	// 	this.getTodo(this.$route.params.id);
	// },
    methods: {
        // getTodo() {
		// 		http
		// 			.get("/mypage/manage")
		// 			.then((response) => {
        //                 this.user = response.data;
		// 			})
		// 			.catch((exp) => alert("getTodo처리에 실패하였습니다." + exp));
		// },
        userIndoModify() {
            console.log("프로필 수정");
            return;
        },
        userWithdraw() {
            console.log("회원 탈퇴");
        },
        confirm() {
            // 확인 버튼을 클릭한 경우 수행할 동작
            // 예: 회원 탈퇴 처리 등
            this.withdrawShow = false; // 모달 닫기
        },
        cancel() {
            // 취소 버튼을 클릭한 경우 수행할 동작
            // 예: 모달 닫기 등
            this.withdrawShow = false; // 모달 닫기
        }
    },
}
</script>

<style scoped>
.main-container{
    margin: 0px 30px;
}
.profile { 
	height:auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}
.image {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 100%;
    height: 20%;
    padding : 18.5px 0px 10px
}
.img{
    width: 104.75px;
    height: 100.33px;
	background-image:url("@/assets/profile_image.png");
    border-radius:500px;
	background-size:cover;
    background-position: center;
    
    transform: translate( 50%, 0% );
}
.img-modify{
    width: 104.75px;
    height: 100.33px;
    border-radius:500px;
    background-size: center;
    background-position: center;;
    background-color: rgba(0, 0, 0, 0.335);

    transform: translate( -50%, 0% );

    display: flex;
    justify-content: center;
    align-items: center;
}
.txt{
    color: white;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
}
.user-infoes{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
}
.user-info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0px;
    gap: 5px;

    height: 94px;
}
.title{
    width:100%;
    height: 21px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 1000;
    font-size: 14px;
    line-height: 20px;
}
.block{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 5px 0px 0px;
    
    gap: 10px;
    width: 100%;
    height: 47px;
}
.back{
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 16px;

    width: 100%;
    height: 47px;

    background: #F5F5F5;
    border-radius: 8px;
}
.value{
    display: flex;
    flex-direction: row;
    align-items: center;
    
    width: 100%;
    height: 23px;
    color: #282732;

    background-color: #F5F5F5;
    border: 0px;
}
.withdraw{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
}
.common-btn{
    margin-top: 60px;
    width: 95%;
    height: 50px;
    background-color: #E7E7E7;
    font-family: 'Noto Sans KR';
    color: #FFFFFF;
    background: #F46F6F;
    text-align: center;
}
.modal {
  position: fixed;
  left: calc(50% - 264.88px/2 + 0.44px);
  top: calc(50% - 109.34px/2 + 0.17px);
  width: 264.88px;
  height: 109.34px;
  
  box-shadow: 1.54px 3.08px 7.7px 1.54px rgba(0, 0, 0, 0.2);
  border-radius: 15.4px;
  
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-msg{
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
}
.button-container {
    width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 10px;
}
.confirm-btn{
    /* width: 81px;
    height: 42px; */

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    color: #F46F6F;
    
}
.cancle-btn{
    /* width: 81px;
    height: 42px; */

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;

    color: #65D4A5;
}
</style>