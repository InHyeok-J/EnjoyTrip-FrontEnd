<template>
  <div class="footer">이거왜없어짐
    <div class = "nav">
        <button class="home">
            <img src="@/assets/home_not_click.png" alt="Home">
        </button>
        <!-- <button class="search">
            <img src="@/assets/search_not_click.png" alt="Home">
        </button>
        <button class="map">
            <img src="@/assets/map_not_click.png" alt="Home">
        </button>
        <button class="mypage">
            <img src="@/assets/mypage_clicked.png" alt="Home">
        </button> -->
    </div>    

  </div>
</template>

<script>
export default {
  name: "CommonFooter",
};
</script>

<style scoped>

.footer {
    /* position: fixed;
    bottom: 0; left: 0;
    height: 100px;
    width: 100%;
    background-color: white; */
    position: fixed;
    max-width:500px ;
    height: 83px;
    bottom: 0px;
    padding: 0px 30px;

    background: #FFFFFF;
    box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.15);
    border-radius: 0px;
}
.nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 70%;
    height: 43px;
    left: 15%;
    top: 20%;
    border: 0.5px solid red;

}
.home{
    width: 31px;
    height: 31px;
    flex: none;
    order: 0;
    flex-grow: 0;
}
.home img{
    width: 31px;
    height: 31px;
}
.search{
    flex : none;
    order: 1;
    flex-grow: 0;
}  
.search img{
    width: 31px;
    height: 31px;
}
/* .map{
    padding-left:  151.8px;
    border: 0.5px solid
}
.map img{
    width: 23.25px;
    height: 22.99px;
} */
/* .mypage{
    padding-left: 227.7px;
    border: 0.5px solid
}
.mypage img{
    width: 40.3x;
    height: 40.3px;
} */
</style>
