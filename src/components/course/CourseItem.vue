<template>
  <div class="box">
    <div class="text-block">
      <div class="name-text">{{ title }}</div>
      <div class="address-text">{{ address }}</div>
    </div>
    <img src="@/assets/deleteIcon.svg" @click="remove" />
    <img src="@/assets/dragIcon.svg" />
  </div>
</template>

<script>
export default {
  name: "CourseItem",
  props: ["title", "address", "day", "id"],
  methods: {
    remove() {
      this.$emit("remove");
    },
  },
};
</script>

<style scoped>
.box {
  background-color: #f5f5f5;
  border-radius: 8px;
  margin: 12px 0px;
  min-height: 78px;
  display: flex;
  justify-content: space-between;
  padding: 12px;
  align-content: center;
  cursor: pointer;
}
.text-block {
  width: 80%;
}
.name-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
}
.address-text {
  font-weight: 200;
  font-size: 16px;
  line-height: 23px;
}
img {
  width: 20px;
}
</style>
