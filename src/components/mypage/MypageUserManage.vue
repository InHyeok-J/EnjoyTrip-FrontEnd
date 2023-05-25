<template>
  <div class="main-container">
    <div class="header">
      <div class="bcak-btn">
        <button @click="moveBack">
          <img
            class="bcak-btn-img"
            src="@/assets/LeftArrow.svg"
            alt="back icon"
          />
        </button>
      </div>
      <div class="title-text">정보 변경</div>
      <div class="modify">
        <button class="modify-btn" @click="modify">수정 완료</button>
      </div>
    </div>

    <div class="profile">
      <div class="image">
        <div
          class="img"
          :style="`background-image: url(${
            uploadImageUrl != null
              ? uploadImageUrl
              : user.profileImg == null
              ? require('@/assets/Logo.png')
              : user.profileImg
          }),  linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));`"
          @click="userPhotoModify"
        >
          <div class="update-text">수정</div>
        </div>
        <input
          type="file"
          id="file-input"
          style="display: none"
          @change="fileSelect"
        />
      </div>
      <div class="user-infoes">
        <div class="user-info">
          <div class="title">
            닉네임
            <div class="block">
              <div class="back">
                <input type="text" class="value" v-model="user.nickname" />
              </div>
            </div>
          </div>
        </div>
        <div class="user-info none-cursor">
          <div class="title">
            이메일
            <div class="block">
              <div class="back">
                <input
                  type="text"
                  class="value"
                  v-model="user.email"
                  readonly
                />
              </div>
            </div>
          </div>
        </div>
        <div class="user-info none-cursor">
          <div class="title">
            가입 방식
            <div class="block">
              <div class="back">
                <input
                  type="text"
                  class="value"
                  :value="providerConvert()"
                  readonly
                />
              </div>
            </div>
          </div>
        </div>
        <div class="user-info none-cursor">
          <div class="title">
            가입일
            <div class="block">
              <div class="back">
                <input
                  type="text"
                  class="value"
                  :value="dateConvert()"
                  readonly
                />
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
import { nicknameValidator } from "@/utils/inputValidator";
import { patchUserProfile, deleteUser } from "@/api/userApi";
import userConstant from "@/store/constants/userConstant";
export default {
  data() {
    return {
      user: null,
      withdrawShow: false,
      uploadImageFile: null,
      uploadImageUrl: null,
    };
  },
  created() {
    this.user = this.$store.state.userStore;
  },
  methods: {
    userPhotoModify() {
      console.log("유저 사진 수정");
      document.getElementById("file-input").click();
    },
    moveBack() {
      const path = this.$route.path;
      if (path.includes("mypage")) {
        this.$router.push("/mypage");
        return;
      }
      this.$router.push("/login");
    },
    async modify() {
      if (!nicknameValidator(this.user.nickname)) {
        alert("닉네임 형식이 일치하지 않습니다.");
        return;
      }

      try {
        const response = await patchUserProfile(
          this.user.nickname,
          this.uploadImageFile
        );

        alert("수정 성공!");
        this.$store.dispatch(userConstant.CALL_ACTION_USER_INFO, response.data);
        this.$router.push("/mypage");
      } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 401) {
          alert("로그인이 필요합니다.");
          this.$store.commit(userConstant.CALL_MU_INIT_USER_INFO);
          this.$router.push("/login");
          return;
        }
        alert("프로필 수정 실패!");
      }
    },
    fileSelect(e) {
      var input = e.target;
      if (input.files && input.files[0]) {
        this.uploadImageFile = input.files[0];
        var reader = new FileReader();
        reader.onload = (e) => {
          this.uploadImageUrl = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    },
    providerConvert() {
      if (this.user.provider === "LOCAL") {
        return "이메일 인증";
      }
      return "카카오";
    },
    dateConvert() {
      const today = new Date(this.user.createdAt);

      const result =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1 < 9
          ? "0" + (today.getMonth() + 1)
          : today.getMonth() + 1) +
        "-" +
        (today.getDate() < 9 ? "0" + today.getDate() : today.getDate());
      return result;
    },
    userWithdraw() {
      console.log("회원 탈퇴");
    },
    async confirm() {
      try {
        await deleteUser();
        alert("탈퇴 성공!");
        this.$store.commit(userConstant.CALL_MU_INIT_USER_INFO);
        this.$router.push("/login");
      } catch (e) {
        console.log(e);
        if (e.response && e.response.status === 401) {
          alert("로그인이 필요합니다.");
          this.$store.commit(userConstant.CALL_MU_INIT_USER_INFO);
          this.$router.push("/login");
          return;
        }

        alert("회원 탈퇴 실패!");
      }
      this.withdrawShow = false; // 모달 닫기
    },
    cancel() {
      this.withdrawShow = false; // 모달 닫기
    },
  },
};
</script>

<style scoped>
.none-cursor {
  pointer-events: none;
}
.main-container {
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
.back-btn-img {
  margin: 10px;
}
.title-text {
  font-weight: bold;
  font-size: 18px;
  width: 120%;
  height: 24px;
  padding: 4px 10% 0px 2%;
}
.modify {
  width: 120%;
  height: 24px;
  padding: 4px 5% 0px 15%;
}
.modify-btn {
  color: #496def;
  font-weight: bold;
  font-size: 18px;

  float: right;
}
.profile {
  margin: 0px 30px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20%;
  margin-top: 18px;
  padding: 18.5px 0px 10px;
}
.img {
  width: 104.75px;
  height: 100.33px;

  border-radius: 500px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  align-items: center;
  display: flex;
  justify-content: center;
}
.update-text {
  color: white;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 27px;
}
.user-infoes {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 5px;
}
.user-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 0px;

  height: 94px;
}
.title {
  width: 100%;
  height: 21px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 1000;
  font-size: 14px;
  line-height: 20px;
}
.block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 0px 0px;

  gap: 10px;
  width: 100%;
  height: 47px;
}
.back {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 16px;

  width: 100%;
  height: 47px;

  background: #f5f5f5;
  border-radius: 8px;
}
.value {
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 23px;
  color: #282732;

  background-color: #f5f5f5;
  border: 0px;
}
.withdraw {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}
.common-btn {
  margin-top: 60px;
  width: 95%;
  height: 50px;
  background-color: #e7e7e7;
  font-family: "Noto Sans KR";
  color: #ffffff;
  background: #f46f6f;
  text-align: center;
}
.modal {
  position: fixed;
  left: calc(50% - 264.88px / 2 + 0.44px);
  top: calc(50% - 109.34px / 2 + 0.17px);
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
.modal-msg {
  font-family: "Noto Sans KR";
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
.confirm-btn {
  /* width: 81px;
    height: 42px; */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;
  color: #f46f6f;
}
.cancle-btn {
  /* width: 81px;
    height: 42px; */

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 23px;

  color: #65d4a5;
}
</style>
