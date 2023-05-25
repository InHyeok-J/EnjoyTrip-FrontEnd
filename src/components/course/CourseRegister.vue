<template>
  <div class="main-container">
    <div class="title-block">
      <div class="info-text">제목</div>
      <common-input
        placeholder="제목을 입력하세요"
        tpye="text"
        :value="title"
        @onChange="onChangeTitle"
      ></common-input>
    </div>
    <div class="date-block">
      <div class="time-block date-select">
        <div class="info-text">시작일</div>
        <input
          type="date"
          data-placeholder="날짜 선택"
          required
          aria-required="true"
          class="day"
          :value="startDate"
          @change="onChangeStartDate"
        />
      </div>
      <div class="time-block">
        <div class="info-text">일정</div>
        <div class="dropdown-container">
          <b-form-select
            id="days"
            class="custom-dropdown"
            variant="custom"
            :value="selected"
            @change="changeOption"
            :options="options"
          ></b-form-select>
        </div>
      </div>
    </div>
    <br />

    <div class="schedule-block" v-for="day in selected" :key="day">
      <div class="info-text">
        <div class="day-text">{{ day }}일차</div>
        <div class="add-attraction" @click="addAttraction(day)">
          장소 추가하기
        </div>
      </div>
      <draggable
        :list="attractions[`day${day}`]"
        :clone="clone"
        :group="{ name: 'attractions', address: 'address', pull: pullFunction }"
        @start="start"
      >
        <course-item
          :title="attraction.name"
          :address="attraction.address"
          v-for="attraction in attractions[`day${day}`]"
          :key="attraction.attractionId"
          @remove="removeAttraction(day, attraction.attractionId)"
        ></course-item>
      </draggable>
    </div>

    <div class="description-block">
      <div class="info-text">설명</div>
      <textarea
        placeholder="설명을 입력하세요"
        class="description"
        :value="description"
        @change="onChangeDescription"
      ></textarea>
    </div>

    <div class="button-block">
      <button class="common-btn" @click="submit">작성 완료</button>
    </div>
  </div>
</template>

<script>
import CommonInput from "@/components/common/CommonInput.vue";
import CourseItem from "./CourseItem.vue";
import draggable from "vuedraggable";
import { mapGetters, mapState } from "vuex";
import userConstant from "@/store/constants/userConstant";
import http from "@/api/axios";
// let idGlobal = 5;
export default {
  name: "CourseRegister",
  components: { CommonInput, CourseItem, draggable },
  data() {
    return {
      options: [
        { value: 1, text: "당일 치기" },
        { value: 2, text: "1박 2일" },
        { value: 3, text: "2박 3일" },
        { value: 4, text: "3박 4일" },
      ],
      controlOnStart: true,
    };
  },
  created() {},
  computed: {
    ...mapState({
      title: (state) => state.courseStore.title,
      startDate: (state) => state.courseStore.startDate,
      description: (state) => state.courseStore.description,
      selected: (state) => state.courseStore.selected,
      attractions: (state) => state.courseStore.attractions,
    }),
    attraction() {
      return this.$store.mutations.installData;
    },
    ...mapGetters({
      getImageData: "courseStore/getImage",
    }),
  },
  methods: {
    changeOption(e) {
      this.$store.commit("courseStore/changeOption", e);
    },
    clone: ({ name, address, attractionId }) => {
      return { name, address, attractionId };
    },
    pullFunction() {
      return this.controlOnStart ? "clone" : true;
    },
    start({ originalEvent }) {
      this.controlOnStart = originalEvent.ctrlKey;
    },
    onChangeTitle(inputValue) {
      this.$store.commit("courseStore/onChangeTitle", inputValue);
    },
    onChangeStartDate(e) {
      this.$store.commit("courseStore/onChangeStartDate", e.target.value);
    },
    onChangeDescription(e) {
      this.$store.commit("courseStore/onChangeDescription", e.target.value);
    },
    addAttraction(day) {
      this.$router.push("/courses/regist/search?day=" + day);
    },
    removeAttraction(day, id) {
      const arr = this.attractions[`day${day}`];
      this.attractions[`day${day}`] = arr.filter(
        (atr) => atr.attractionId != id
      );

      this.$store.commit("courseStore/removeAttraction", { day, id });
    },
    async submit() {
      //여기서 입력 처리를 하면 된다.
      console.log("작성!");
      console.log(this.$store.state.courseStore);
      try {
        //배열을 다 돌면서 image가 있는것을 찾아서 넣는다.

        const image = this.getImage(this.attractions);
        const dataArr = this.getParseData(this.attractions);
        let data = {
          title: this.$store.state.courseStore.title,
          isPublic: true,
          schedule: this.$store.state.courseStore.selected,
          description: this.$store.state.courseStore.description,
          attractions: dataArr,
          image,
        };
        console.log(data);
        await http.post("/courses", data);
        alert("등록 성공!");
        this.$router.push("/courses");
      } catch (e) {
        console.log(e);
        if (e.response.data && e.response.status === 401) {
          alert("로그인이 필요합니다.");
          this.$store.commit(userConstant.CALL_MU_INIT_USER_INFO);
          this.$router.push("/login");
          return;
        }
        alert("코스 등록 실패!");
      }
    },
    getParseData(attractions) {
      let data = [];
      const keys = Object.keys(attractions);

      for (let i = 0; i < keys.length; i++) {
        const dayData = attractions[keys[i]];
        if (dayData != null) {
          for (let j = 0; j < dayData.length; j++) {
            data.push({
              attractionId: dayData[j].attractionId,
              day: i + 1,
              date: new Date(this.$store.state.courseStore.startDate),
            });
          }
        }
      }
      return data;
    },
    getImage(attractions) {
      const keys = Object.keys(attractions);

      for (let i = 0; i < keys.length; i++) {
        const dayData = attractions[keys[i]];
        if (dayData != null) {
          for (let j = 0; j < dayData.length; j++) {
            if (dayData[j].image != null && dayData[j].image.length > 0) {
              return dayData[j].image;
            }
          }
        }
      }
      return null;
    },
  },
};
</script>

<style scoped>
.main-container {
  margin: 0 30px;
}
.title-block {
  margin-top: 40px;
}
.date-block {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
}
.info-text {
  padding-left: 5px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.day-text {
  color: #696969;
  font-size: 16px;
}
.time-block {
  width: 50%;
}
.add-attraction {
  cursor: pointer;
  font-size: 16px;

  color: #496def;
}
input[type="date"]::before {
  content: attr(data-placeholder);
  width: 100%;
}

input[type="date"]:focus::before,
input[type="date"]:valid::before {
  display: none;
}
.day {
  padding: 10px;
  height: 40px;
  width: 120px;
  border: none;
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 23px;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  color: #4a4a4a;
}

.custom-dropdown {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 0px 25px 0px 15px;
  width: auto;
  height: 40px;
  font-size: 14px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border: none; /* border 제거 */
}
.description-block {
  margin-top: 50px;
}
.description {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 12px 16px;
  width: 100%;
  border: none;
  resize: none;
  height: 150px;
}
.schedule-block {
  margin-top: 20px;
}
.button-block {
  margin-top: 50px;
  margin-bottom: 20px;
}
</style>
