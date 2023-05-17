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
  min-height: 100%;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: none;
  font-family: "Noto Sans KR", sans-serif;
  overflow: auto;
}

button {
  all: unset;
  cursor: pointer;
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
button,
strong,
span {
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.1;
  color: #292929;
  font-weight: 500;
}
input {
  /* caret-color: #c62917; */
  cursor: auto;
  /* caret-color: #c62917; */
}
#app {
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 30px;
}
.common-btn {
  width: 100%;
  background-color: #6f8cf4;
  color: #ffffff;
  height: 50px;
  font-size: 18px;
  border-radius: 10px;
  text-align: center;
}
</style>
