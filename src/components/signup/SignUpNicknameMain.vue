<template>
  <div class="main-container">
    <div class="nickname-block">
      <div class="info-text">닉네임</div>
      <common-input
        placeholder="닉네임 입력"
        type="text"
        :inputvalue="nickname"
        @onChange="nicknameOnChange"
      ></common-input>
    </div>
    <div class="message-block nomal">닉네임은 한글 2~7자만 가능합니다</div>
    <div class="signup-btn-block">
      <button class="common-btn">회원가입</button>
    </div>
  </div>
</template>

<script>
import CommonInput from "../common/CommonInput.vue";
export default {
  name: "SignUpNicknameMain",

  components: { CommonInput },
  data() {
    return {
      nickname: null,
      isNicknameExp: null,
    };
  },
  methods: {
    nicknameOnChange(inputValue) {
      this.nickname = inputValue;
    },
  },
};
</script>

<style>
.main-container {
  margin: 0 30px;
  margin-top: 60px;
}
.nickname-block {
  margin-bottom: 10px;
}
.info-text {
  color: #696969;
  font-size: 16px;
  padding-left: 5px;
  margin-bottom: 12px;
}
.message-block {
  font-size: 12px;
  padding: 10px 0px 10px 15px;
}
.nomal {
  color: #696969;
  font-size: 12px;
}
.success {
  color: #496def;
  font-size: 12px;
}
.fail {
  color: #f8746b;
  font-size: 12px;
}
</style>
