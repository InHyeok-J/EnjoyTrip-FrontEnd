<template>
    <div class="main-container">
        <div class="header">
            <div class="bcak-btn" alt="back icon" @click="moveBack" >
                <img class="bcak-btn-img" src="@/assets/LeftArrow.svg" alt="back icon" @click="moveBack" />    
            </div>
            <div class="title-text">정보 변경</div>
            <div class="modify" @click="modify">수정 완료
            </div>
        </div>
        <div class="profile">
            <div class="image">
                <div class="img"></div>    
                <div class="filebox">
                    <label for="ex_file">업로드</label>
                    <input type="file" id="ex_file"> 
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
// import http from "@/api/axios/index.js"
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
        userPhotoModify() {
            console.log("유저 사진 수정");
            
        },
        moveBack() {
            const path = this.$route.path;
            if (path.includes("mypage")) {
                this.$router.push("/mypage");
                return;
            }
            this.$router.push("/login");
        },
        modify() {
            console.log("유저 정보 수정");
            this.$router.push("/mypage");
            // http
			// 		.put("/todo/",this.todo)
			// 		.then(() => {
			// 			console.log("수정하였습니다.");
			// 			this.$router.push("/user/" + this.user.id);
			// 		})
			// 		.catch((exp) => alert("회원정보 수정에 실패하였습니다." + exp));
            // return;
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
    margin: 0px 0px;
}
.header {
  height: 54px;
  display: flex;
  align-items: center;
  
  border-bottom: 1px solid #e7e7e7;
  box-shadow: 0 6px 6px -6px #e7e7e7;
  padding: 0 10px;
}
.back-btn-img{
    margin: 10px;
}
.title-text {
  font-weight: bold;
  font-size: 18px;
  width: 120%;
  height: 24px;
  padding: 4px 10% 0px 2%;
}
.modify{
  color:#496DEF;
  width: 120%;
  height: 24px;
  font-weight: bold;
  font-size: 18px;
  text-align:right;
  padding: 4px 5% 0px 15%;
}
.profile { 
    margin: 0px 30px;
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
    margin-top:18px;
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
.filebox label {
    width: 104.75px;
    height: 100.33px;
    border-radius:500px;
    background-size: center;
    background-position: center;;
    background-color: rgba(0, 0, 0, 0.335);

    transform: translate( -50%, 3.5% );

    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
}

.filebox input[type="file"] {  /* 파일 필드 숨기기 */
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip:rect(0,0,0,0);
  border: 0;
}
.user-infoes{
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 5px;
}
.user-info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 0px;

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