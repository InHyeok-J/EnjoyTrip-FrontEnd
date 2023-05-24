<template>
  <div class="tab-bar">
    <div class="icons">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-item', { active: activeTab === index }]"
        @click="changeTab(index)"
      >
        <div
          :class="[
            'tab-icon',
            tab.iconClass,
            {
              'active-icon': activeTab === index,
              [`${tab.iconClass}-active`]: activeTab === index,
            },
          ]"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { iconClass: "home-icon", route: "" },
        { iconClass: "search-icon", route: "attraction" },
        { iconClass: "map-icon", route: "courses" },
        { iconClass: "profile-icon", route: "login" },
      ],
      activeTab: 0,
    };
  },
  created() {
    if (localStorage.getItem("trify-user")) {
      console.log("user");
      // 세션에 사용자 정보가 있는 경우 profile-icon을 클릭하면 "/mypage"로 이동하도록 설정합니다.
      this.tabs[3].route = "mypage";
    }
  },

  methods: {
    changeTab(index) {
      const prevActiveTab = this.activeTab; // 이전 활성화된 탭의 인덱스를 저장합니다.
      this.activeTab = index; // 클릭한 탭을 활성화합니다.

      const route = this.tabs[index].route; // 클릭한 탭에 해당하는 라우트 정보를 가져옵니다.
      if (this.$router.currentRoute.path !== route) {
        // 현재 라우트와 클릭한 탭의 라우트가 다른 경우에만 라우터를 변경합니다.
        this.$router.push("/" + route).catch((err) => {
          if (err.name !== "NavigationDuplicated") {
            throw err;
          }
        });
      }

      this.$nextTick(() => {
        const prevActiveIconClass = `${this.tabs[prevActiveTab].iconClass}-active`; // 이전 활성화된 탭의 아이콘 클래스명을 가져옵니다.
        const activeIconClass = `${this.tabs[this.activeTab].iconClass}-active`; // 현재 활성화된 탭의 아이콘 클래스명을 가져옵니다.
        const icons = document.querySelectorAll(".tab-icon"); // 모든 탭 아이콘 요소를 선택합니다.

        if (icons && icons[prevActiveTab] && icons[this.activeTab]) {
          icons[prevActiveTab].classList.remove(prevActiveIconClass);
          // 이전 활성화된 탭의 아이콘에서 활성화 클래스를 제거합니다.
          icons[this.activeTab].classList.add(activeIconClass);
          // 현재 활성화된 탭의 아이콘에 활성화 클래스를 추가합니다.
        }
      });
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
  z-index: 100;
  background: #ffffff;
  box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.15);
  border-radius: 0;

  display: flex;
  justify-content: space-around;
  align-items: center;
}
.icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 268px;
  height: 43px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 9px;
}

.tab-item {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab-icon {
  width: 31px;
  height: 31px;
  flex: none;
  order: 0;
  flex-grow: 0;
  background-size: 100%;
  background-position: center;
}

.home-icon {
  background-image: url("@/assets/tab-icons/home_unclicked.svg");
}
.search-icon {
  background-image: url("@/assets/tab-icons/search_unclicked.svg");
}
.map-icon {
  background-image: url("@/assets/tab-icons/map_unclicked.svg");
}
.profile-icon {
  background-image: url("@/assets/tab-icons/profile_unclicked.svg");
}
.home-icon-active {
  background-image: url("@/assets/tab-icons/home_clicked.svg");
}
.search-icon-active {
  background-image: url("@/assets/tab-icons/search_clicked.svg");
  transform: scale(1.2); /* 크기 변화 설정 */
}
.map-icon-active {
  background-image: url("@/assets/tab-icons/map_clicked.svg");
  transform: scale(1.2); /* 크기 변화 설정 */
}
.profile-icon-active {
  background-image: url("@/assets/tab-icons/profile_clicked.svg");
  transform: scale(1.2); /* 크기 변화 설정 */
}
</style>
