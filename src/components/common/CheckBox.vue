<template>
  <label>
    <input type="checkbox" :value="checked" @input="checked = !checked" />
    <span class="check" :class="`${checked ? 'on' : ''}`"></span>
  </label>
</template>

<script>
export default {
  name: "CheckBox",
  data() {
    return {
      checked: false,
    };
  },
};
</script>

<style scoped>
label {
  display: inline-block;
  cursor: pointer;
  margin: 0px;
  height: 24px;
  width: 24px;
}
input[type="checkbox"] {
  display: none;
}
.check {
  display: inline-block;
  width: 16px;
  height: 12px;
  background: url("@/assets/NotCheck.svg") no-repeat;
  background-size: 100%;
  opacity: 0.5;
}
.on {
  background: url("@/assets/Check.svg") no-repeat;
  background-size: 100%;
  opacity: 1;
}
</style>
