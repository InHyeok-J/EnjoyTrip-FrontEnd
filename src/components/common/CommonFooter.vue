<template>
  <div class="footer">
    <div class = "nav">
        <button class="home"/>
        <button class="search"/>
        <button class="map"/>
        <button class="mypage"/>
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
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    box-shadow: 0px -1px 3px rgba(0, 0, 0, 0.15);
    background-color: white;
    
}
.nav{
    display: flex;
    justify-content: space-evenly;
    padding: 15px;
    
}
/* .nav-btn{
    width: 31px;
    height: 31px;
    margin-top: 15px;
} */
.home{
    width: 31px;
    height: 31px;
    flex: none;
    order: 0;
    flex-grow: 0;
    
    background-image: url("@/assets/home_not_click.png");
    background-size: 100%;
    background-position: center;
}
.search{
    width: 31px;
    height: 31px;
    flex: none;
    order: 0;
    flex-grow: 0;
    
    background-image: url("@/assets/search_not_click.png");
    background-size: 100%;
    background-position: center;
}  
.map{
    width: 28px;
    height: 28px;
    flex: none;
    order: 0;
    flex-grow: 0;
    
    background-image: url("@/assets/map_not_click.png");
    background-size: 100%;
    background-position: center;
} 
.mypage{
    width: 38px;
    height: 38px;
    flex: none;
    order: 0;
    flex-grow: 0;
    
    background-image: url("@/assets/mypage_clicked.png");
    background-size: 100%;
    background-position: center;
}
</style>
