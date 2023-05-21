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
        { iconClass: 'home-icon', route: '/' },
        { iconClass: 'search-icon', route: 'attraction' },
        { iconClass: 'map-icon', route: 'course' },
        { iconClass: 'profile-icon', route: 'login' },
      ],
      activeTab: 0,
    };
  },
  methods: {
    changeTab(index) {
      const prevActiveTab = this.activeTab;
      this.activeTab = index;

      const route = this.tabs[index].route;
      if (this.$router.currentRoute.path !== route) {
        this.$router.push(route).catch((err) => {
          if (err.name !== 'NavigationDuplicated') {
            throw err;
          }
        });
      }

      this.$nextTick(() => {
        const prevActiveIconClass = `${this.tabs[prevActiveTab].iconClass}-active`;
        const activeIconClass = `${this.tabs[this.activeTab].iconClass}-active`;
        const icons = document.querySelectorAll('.tab-icon');

        icons[prevActiveTab].classList.remove(prevActiveIconClass);
        icons[this.activeTab].classList.add(activeIconClass);
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
  background-image: url('@/assets/tab-icons/home_unclicked.svg');
}
.search-icon {
  background-image: url('@/assets/tab-icons/search_unclicked.svg');
}
.map-icon {
  background-image: url('@/assets/tab-icons/map_unclicked.svg');
}
.profile-icon {
  background-image: url('@/assets/tab-icons/profile_unclicked.svg');
}
.home-icon-active {
  background-image: url('@/assets/tab-icons/home_clicked.svg');
}
.search-icon-active {
  background-image: url('@/assets/tab-icons/search_clicked.svg');
}
.map-icon-active {
  background-image: url('@/assets/tab-icons/map_clicked.svg');
}
.profile-icon-active {
  background-image: url('@/assets/tab-icons/profile_clicked.svg');
  transform: scale(1.2); /* 크기 변화 설정 */
}
</style>
