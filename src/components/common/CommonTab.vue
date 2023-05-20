<template>
  <div class="tab-bar">
    <div
      v-for="(tab, index) in tabs"
      :key="index"
      :class="['tab-item', { active: activeTab === index }]"
      @click="changeTab(index)"
    >
      <i :class="tab.icon"></i>
      <!-- 아이콘을 표시하는 부분 -->
      {{ tab.title }}
      <!-- 탭의 제목을 표시하는 부분 -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: 'Tab 1', icon: 'fa fa-home' },
        { title: 'Tab 2', icon: 'fa fa-search' },
        { title: 'Tab 3', icon: 'fa fa-user' },
      ], // 탭의 제목과 아이콘을 객체로 저장합니다.
      activeTab: 0, // 활성화된 탭의 인덱스를 저장합니다.
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index; // 선택한 탭으로 활성화된 탭을 변경합니다.
    },
  },
};
</script>

<style>
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 83px;

  background: #ffffff;
  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.tab-item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab-item i {
  font-size: 20px;
}

.tab-item.active {
  font-weight: bold;
}

.home-icon {
  width: 31px;
  height: 31px;
  flex: none;
  order: 0;
  flex-grow: 0;

  background-image: url('@/assets/tab-icons/home_unclicked.svg');
  background-size: 100%;
  background-position: center;
}
.search-icon {
  width: 31px;
  height: 31px;
  flex: none;
  order: 0;
  flex-grow: 0;

  background-image: url('@/assets/tab-icons/search_unclicked.svg');
  background-size: 100%;
  background-position: center;
}
.map-icon {
  width: 28px;
  height: 28px;
  flex: none;
  order: 0;
  flex-grow: 0;

  background-image: url('@/assets/tab-icons/map_unclicked.svg');
  background-size: 100%;
  background-position: center;
}
.mypage-icon {
  width: 38px;
  height: 38px;
  flex: none;
  order: 0;
  flex-grow: 0;

  background-image: url('@/assets/tab-icons/profile_unclicked.svg');
  background-size: 100%;
  background-position: center;
}
</style>
