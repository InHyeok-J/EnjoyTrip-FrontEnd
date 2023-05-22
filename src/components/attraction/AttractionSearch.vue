<template>
  <div class="main-container">
    <search-input
      placeholder="관광지를 입력해보세요"
      type="email"
      style="margin-bottom: 10px"
      :value="email"
      @onChange="emailOnChange"
    ></search-input>
    <div class="warn">검색어를 입력하세요</div>
    <div class="title keyword">최근 검색어</div>
    <div class="pills"></div>
    <div class="title filter">검색 조건</div>

    <div class="dropdown-container">
      <b-dropdown
        id="dropdown-1"
        text="관광지 유형"
        class="custom-dropdown"
        variant="custom"
      >
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Third Action</b-dropdown-item>
      </b-dropdown>
      <b-dropdown
        id="dropdown-2"
        text="시/도"
        class="custom-dropdown"
        variant="custom"
      >
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Third Action</b-dropdown-item>
      </b-dropdown>
      <b-dropdown
        id="dropdown-3"
        text="구/군"
        class="custom-dropdown"
        variant="custom"
      >
        <b-dropdown-item>First Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Second Action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Third Action</b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="title recommend">취향 저격 관광지</div>
  </div>
</template>

<script>
import SearchInput from './SearchInput.vue';
export default {
  name: 'AttractionSearch',
  components: { SearchInput },
  data() {
    return {
      email: '',
    };
  },
  methods: {
    emailOnChange(value) {
      this.email = value;
    },
  },
};
</script>

<style scoped>
.main-container {
  margin: 10px 35px;
}
.custom-dropdown {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
}

.custom-dropdown .dropdown-menu {
  border-radius: 10px;
}

.custom-dropdown .dropdown-item {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
}

.warn {
  width: 114px;
  height: 17px;
  left: 33px;
  top: 128px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;

  color: #f8746b;
}

.title {
  position: absolute;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;

  color: #000000;
  width: 217px;
  height: 24px;
}
.keyword {
  top: 175px;
}
.filter {
  top: 274px;
}
.dropdown-container {
  position: absolute;
  top: 306px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 4px 3px 10px;
  gap: 8px;

  width: 325px;
  height: 58px;

  flex: none;
  order: 1;
  flex-grow: 0;
}

.recommend {
  top: 416px;
}
</style>
