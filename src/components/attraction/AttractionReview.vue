<template>
  <div class="main-container">
    <div class="title-block">
      <div class="info-text">제목</div>
      <common-input
        placeholder="제목을 입력하세요"
        type="text"
        :value="title"
        @onChange="onChangeTitle"
      ></common-input>
    </div>
    <div class="info-text" style="padding-top: 30px">별점</div>
    <div class="star-block">
      <div v-for="index in 5" :key="index">
        <img
          class="star-icon"
          :src="getStarIcon(index)"
          :class="{ 'star-filled-icon': index <= score }"
          @click="setScore(index)"
        />
        <input
          type="file"
          id="file-input"
          style="display: none"
          @change="fileSelect"
        />
      </div>
    </div>

    <div class="description-block">
      <div class="info-text">내용</div>
      <textarea
        placeholder="내용을 입력하세요"
        class="description"
        v-model="description"
      ></textarea>
    </div>
    <div class="photo-block">
      <div class="info-text">사진</div>
      <div
        class="photo-rect"
        @click="photoModify"
        :style="`background-image: url(${uploadImageUrl != null})`"
      >
        <div class="plus-icon"></div>
      </div>
    </div>
    <div class="button-block">
      <button class="common-btn" @click="submit">작성 완료</button>
    </div>
  </div>
</template>
<script>
import CommonInput from "../common/CommonInput.vue";
import { postReview } from "@/api/attractionApi";
export default {
  name: "AttractionReview",
  components: { CommonInput },
  data() {
    return {
      id: null,
      title: null,
      description: "",
      score: 0,
      uploadImageFile: null,
      uploadImageUrl: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  methods: {
    photoModify() {
      console.log("사진");
      document.getElementById("file-input").click();
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
    onChangeTitle(value) {
      this.title = value;
    },
    setScore(value) {
      console.log(this.score);
      this.score = value;
    },
    submit() {
      //여기서 입력 처리를 하면 된다.
      console.log("작성!");
      const data = {
        title: this.title,
        content: this.description,
        attractionId: this.id,
        score: this.score,
      };
      console.log(data);
      const response = postReview(this.id, data);
      if (response.data == 1) alert(response.message);
      this.$router.push({ name: "attraction-detail", params: { id: this.id } });
      console.log(response);
    },
    getStarIcon(index) {
      if (index <= this.score) {
        return require("@/assets/attraction/star_filled.svg");
      } else {
        return require("@/assets/attraction/star.svg");
      }
    },
  },
};
</script>

<style scoped>
.main-container {
  margin: 0 35px;
}
.photo-block {
  padding-top: 30px;
}
.photo-rect {
  width: 70px;
  height: 70px;
  left: 0px;

  /* sub */
  background: #e7e7e7;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.plus-icon {
  width: 24px;
  height: 24px;
  background-image: url("@/assets/plus.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.title-block {
  margin-top: 40px;
}

.info-text {
  padding-left: 5px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.description-block {
  margin-top: 50px;
}
.description {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 16px 16px;
  width: 100%;
  border: none;
  resize: none;
  height: 150px;
}
textarea::placeholder {
  color: rgba(40, 39, 50, 0.3);
}

.button-block {
  margin-top: 50px;
  margin-bottom: 20px;
}
.star-block {
  display: flex;
  flex-direction: row;
  padding: 10px;
  gap: 20px;
}
.star-icon {
  /* background-repeat: no-repeat;
  background-position: center; */
  background-size: cover;
  background-image: url("@/assets/attraction/star.svg");
  transform: scale(1.6);
}
.star-filled-icon {
  background-image: url("@/assets/attraction/star_filled.svg");
  transform: scale(1.6);
}
.star-rating {
  display: flex;
  flex-direction: row;
}
</style>
