<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
html,
body {
  -ms-content-zooming: none;
  -ms-overflow-style: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  margin: 0;
  padding: 0;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: auto;
  min-height: 100vh;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: none;
  font-family: "Noto Sans KR";
  overflow: auto;
}
body::-webkit-scrollbar {
  display: none; /* 크롬, 사파리, 오페라, 엣지 */
}

button {
  all: unset;
  cursor: pointer;
  font-weight: 500;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
p,
a,
li,
ul,
div,
input,
label,
strong,
span {
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: "Noto Sans KR";
  line-height: 1.1;
  color: #292929;
}
input {
  /* caret-color: #c62917; */
  cursor: auto;
  /* caret-color: #c62917; */
}
#app {
  max-width: 390px;
  height: 100vh;
  margin: 0 auto;
}
.common-btn {
  width: 100%;
  background-color: #6f8cf4;
  color: #ffffff;
  height: 50px;
  font-size: 18px;
  border-radius: 10px;
  text-align: center;

  transition: all 0.9s;
}
.common-btn:hover {
  box-shadow: 0 80px 0 0 rgba(0, 0, 0, 0.25) inset,
    0 -80px 0 0 rgba(0, 0, 0, 0.25) inset;
}
</style>
