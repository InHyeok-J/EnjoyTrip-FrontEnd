<template>
  <input class="common-input" :placeholder="placeholder" :type="type" />
</template>

<script>
export default {
  name: "CommonInput",
  props: ["type", "placeholder"],
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
</style>
