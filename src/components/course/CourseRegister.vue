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
          v-model="startDate"
        />
      </div>
      <div class="time-block">
        <div class="info-text">일정</div>
        <div class="dropdown-container">
          <b-form-select
            id="days"
            class="custom-dropdown"
            variant="custom"
            v-model="selected"
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
        v-model="description"
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

let idGlobal = 5;
export default {
  name: "CourseRegister",
  components: { CommonInput, CourseItem, draggable },
  data() {
    return {
      dummy: [
        {
          attractionId: 1,
          name: "우도 땅콩 빵집",
          address: "제주도 제주시 정자일로 80",
        },
        {
          attractionId: 2,
          name: "만장굴",
          address: "제주도 제주시 봉선중앙로 93",
        },
        {
          attractionId: 3,
          name: "성산일출봉",
          address: "제주도 제주시 남구 93",
        },
        {
          attractionId: 4,
          name: "오륙도 (부산 국가지질공원)",
          address: "경상북도 포항시 북구 송라면 동해대로3218번길",
        },
      ],
      attractions: {
        day1: [],
        day2: null,
        day3: null,
        day4: null,
      },
      description: null,
      startDate: null,
      title: null,
      prevSelect: 1,
      selected: 1,
      options: [
        { value: 1, text: "당일 치기" },
        { value: 2, text: "1박 2일" },
        { value: 3, text: "2박 3일" },
        { value: 4, text: "3박 4일" },
      ],
      controlOnStart: true,
    };
  },
  created() {
    this.attractions.day1 = [...this.dummy];
  },
  methods: {
    changeOption() {
      if (this.prevSelect === this.selected) return; // 선택한 값이 이전과 같으면 리턴

      if (this.prevSelect < this.selected) {
        // 선택한 값이 이전보다 크면 배열을 추가로 생성
        for (let i = this.prevSelect + 1; i <= this.selected; i++) {
          this.attractions[`day${i}`] = [];
        }
      } else {
        // 선택한 값이 이전보다 작으면 배열을 삭제
        for (let i = this.prevSelect; i > this.selected; i--) {
          this.attractions[`day${i}`] = null;
        }
      }
      this.prevSelect = this.selected;
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
      this.title = inputValue;
    },
    addAttraction(day) {
      //더미데이터를 넣을 거임
      const dum = {
        // attractions: idGlobal++,
        attractionId: idGlobal++,
        name: "집집집" + idGlobal,
        address: "서울특별시 강남구",
      };
      this.attractions[`day${day}`].push(dum);
    },
    removeAttraction(day, id) {
      const arr = this.attractions[`day${day}`];
      this.attractions[`day${day}`] = arr.filter(
        (atr) => atr.attractionId != id
      );
    },
    submit() {
      //여기서 입력 처리를 하면 된다.
      console.log("작성!");
      const data = {
        title: this.title,
        description: this.description,
        planDay: this.selected,
        startDate: this.startDate,
        attractions: this.attractions, // 나중에 개발할때 타입 변경하시면 돼요 -넵
      };
      console.log(data);
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
