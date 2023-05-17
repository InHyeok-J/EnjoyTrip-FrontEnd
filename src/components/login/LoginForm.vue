<template>
  <div>
    <input placeholder="이메일" type="email" class="common-input" />
    <input placeholder="비밀번호" :type="`${isViewPassword ? 'text' : 'password'}`" class="common-input" />
    <div class="view-block">
      <img
        :src="require(`@/assets/${isViewPassword ? 'ViewOn.png' : 'ViewOff.png'}`)"
        class="pass-view"
        @click="changeViewMode"
      />
    </div>

    <button class="common-btn">로그인</button>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      isViewPassword: false,
    };
  },
  methods: {
    changeViewMode() {
      this.isViewPassword = !this.isViewPassword;
    },
  },
};
</script>

<style scoped>
.common-input {
  margin-bottom: 10px;
  background-color: #f5f5f5;
  height: 48px;
  padding: 12px 16px;
  border: none;
  width: 100%;
  border-radius: 8px;

  color: rgba(40, 39, 50, 0.7);
  font-size: 16px;
}
.common-input::placeholder {
  color: rgba(40, 39, 50, 0.3);
}
.view-block {
  float: right;
}
.pass-view {
  position: relative;
  margin-right: 15px;
  margin-top: -85px;
  z-index: 1;
  cursor: pointer;
}
</style>
