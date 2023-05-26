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
        v-model="content"
      ></textarea>
    </div>

    <div class="photo-block">
      <div class="info-text">사진</div>
      <div
        v-if="uploadImageFile == null"
        class="photo-rect"
        @click="photoModify"
        :style="`background-image: url(${uploadImageUrl != null})`"
      >
        <div class="plus-icon"></div>
      </div>
      <div v-else class="photo-rect2">
        <img :src="uploadImageUrl" class="uploaded" />
        <div class="removeImage" @click="resetImage">
          <img src="@/assets/deleteIcon.svg" />
        </div>
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

import userConstant from "@/store/constants/userConstant";
export default {
  name: "AttractionReview",
  components: { CommonInput },
  data() {
    return {
      id: null,
      title: null,
      content: "",
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
      this.score = value;
    },
    inputvalidate() {
      if (this.title == null || this.title.length == 0) {
        alert("제목을 입력해주세요");
        return true;
      }
      if (this.content == null || this.content.length == 0) {
        alert("설명을 입력해주세요");
        return true;
      }
      return false;
    },
    async submit() {
      if (this.inputvalidate()) {
        return;
      }
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("content", this.content);
      formData.append("score", this.score);
      formData.append("attractionId", this.id);
      formData.append("image", this.uploadImageFile);

      try {
        await postReview(this.id, formData);
        alert("리뷰 등록 성공");
        this.$router.push({
          name: "attraction-detail",
          params: { id: this.id },
        });
      } catch (e) {
        console.log(e);
        if (e.response.data && e.response.status === 401) {
          alert("로그인이 필요합니다.");
          this.$store.commit(userConstant.CALL_MU_INIT_USER_INFO);
          this.$router.push("/login");
          return;
        }
        alert("서버 에러!");
      }
    },
    resetImage() {
      this.uploadImageFile = null;
      this.uploadImageUrl = null;
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
  padding-bottom: 200px;
}
.photo-block {
  padding-top: 30px;
}
.photo-rect {
  width: 70px;
  height: 70px;
  left: 0px;
  cursor: pointer;
  /* sub */
  background: #e7e7e7;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.photo-rect2 {
  width: 100px;
  height: 100px;
  left: 0px;
  cursor: pointer;
  /* sub */
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.uploaded {
  width: 70px;
  height: 70px;
}
.removeImage {
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;

  border-radius: 10px;
  left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.removeImage > img {
  width: 20px;
  height: 20px;
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
  margin-bottom: 30px;
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
