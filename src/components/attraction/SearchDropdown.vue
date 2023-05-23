<template>
  <div>
    <button class="rectangle" @click="toggleDropdown">
      {{ selectedOption }}
    </button>
    <ul v-if="isOpen">
      <li
        class="rectangle"
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      selectedOption: '전체',
      options: ['Option 1', 'Option 2', 'Option 3'],
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = true;
    },
  },
};
</script>
<style>
.rectangle {
  height: 44px;
  top: 4px;
  padding: 0px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  display: flex;
  align-items: center;

  flex-direction: column;

  color: #000000;
}
</style>
