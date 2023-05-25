<template>
    <div>
      <div id="map"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "KakaoMap",
    props: {
      plans: []
    }, 
    data() {
    return {
      // map 객체 설정
      map: null,
      coordinate: [],
      first: [],
    };
  },
  setup() {},
  created() {},
  mounted() {
    if (window.kakao && window.kakao.maps) {
      this.loadMap();
    } else {
      this.loadScript();
    }
    for (var i = 0; i < this.plans.length; i++) {
      for (var j = 0; j < this.plans[i].length; j++) {
        var latitude = this.plans[i][j].latitude;
        var longitude = this.plans[i][j].longitude;
        this.coordinate.push({ latitude, longitude });
      }
    }
    this.first = this.coordinate[0];
    console.log(this.first.latitude);
  },
  unmounted() {},
  methods: {
    loadScript() {
      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=4c5b7b7b6e3f8a6e8eef32d998a17db7&autoload=false"; 
      script.onload = () => window.kakao.maps.load(this.loadMap); 

      document.head.appendChild(script);
    },
    // 맵 출력하기
    loadMap() {
      // console.log(this.first);
      const container = document.getElementById("map"); 
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), 
        level: 3
      };

      this.map = new window.kakao.maps.Map(container, options); 
      this.loadMaker();
    },
    // 지정한 위치에 마커 불러오기
    loadMaker() {
      const markerPosition = new window.kakao.maps.LatLng(
        33.450701,
        126.570667
      );

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(this.map);
    },
  },
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  #map {
    width: 100%;
    height: 514px;
    z-index: 0;
    margin: 10px 0px 0px;
  }
  
  .button-group {
    margin: 10px 0px;
  }
  
  button {
    margin: 0 3px;
  }
  </style>
  