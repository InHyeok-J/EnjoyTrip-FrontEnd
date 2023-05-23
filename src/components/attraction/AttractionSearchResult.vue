<template>
  <div class="main-container"></div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "AttractionSearch",
  computed: {
    ...mapState(["result"]), // Vuex 스토어의 result 상태를 가져옴
  },
  created() {
    console.log(this.result);
  },
};
</script>
<style scoped>
.main-container {
  margin: 10px 35px;
}
</style>
