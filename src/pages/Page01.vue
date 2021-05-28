<template>
  <q-page >
   <!-- splash image -->
   <div class="LandingDiv">
     <!-- <transition>
        <div class="preloader"> 
    <q-img class="preloadImage"
    src="~assets/Mind Reader Splash Screen.png"> </q-img>
        </div>
    </transition> -->
     
  <img src="~assets/Logo-02.png/" alt="" class="logo">

      <img class="landingImage"
    src="~assets/MRS BG.png/"/>

    
    
     <q-btn class="btnStart" to="/page02">
      <img
        class="startImage"
        src="~assets/Start Button.png/" 
        alt="">
      </q-btn>
    



    
    </div>

  </q-page>
</template>

<script>
import { LocalStorage } from 'quasar';
export default {
data(){
  return{
     confirm: false,
      address: ''
  }
},
methods:{
 closeApp () {
      navigator.app.exitApp();
     
    },



       
   
    },


   created(){
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    StatusBar.hide()
    StatusBar.overlaysWebView(false);

  // window.navigationbar.hide();
}


document.addEventListener("deviceready", function(){
    var autoHideNavigationBar = true;
    window.navigationbar.setUp(autoHideNavigationBar);      
}, false);



   }
 }
 




</script>

<style>
.logo{
position: absolute;
    width: 25%;
    left: 37.5%;
    top: 14%;
}
.Page01CloseButton{
  position: absolute;
  top: 2%;
  right: 2%;
  width: 8%;
  height: 15%;  
  border-radius: 100%;
   background-color: transparent !important;
}
.Page01CloseButtonImgs{
  width: 100%;
}

.landingImage {
    width: 100vw;
  height:100vh ; 
}

.LandingDiv{
    width: 100vw;
  height:100vh ; 
}
.btnStart{
    /* border: 3px solid black; */
    background-color: transparent !important;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 8%;
    margin: auto;
    width: 25%;
    height: 16%;
    


}

.startImage{
  border-radius: 25%;
     position: absolute;
     top: 12%;
    width: 120%;
    box-shadow: -2px -1px 25px 12px rgb(255 255 255);


}


/* .preloader{
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       position: absolute;
       width: 100%;
       height: 100%;
       z-index: 9999;
    -moz-animation: cssAnimation 0s ease-in 2s forwards;
    -webkit-animation: cssAnimation 0s ease-in 2s forwards;
    -o-animation: cssAnimation 0s ease-in 2s forwards;
    animation: cssAnimation 0s ease-in 2s forwards;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
   } 

   @keyframes cssAnimation {
    to {
        width:0;
        height:0;
        overflow:hidden;
    }
   }
@-webkit-keyframes cssAnimation {
    to {
        width:0;
        height:0;
        visibility:hidden;
    }
}
  .preloadImage{
  height:375px ;
  width: 667px;
   } */

@media all and (min-width: 375px) and (max-width: 425px){
  .logo {
    width: 38%;
    left: 26.5%;
    top: 23%;
}
.btnStart {
    left: -38px;
    right: 0;
    bottom: 7%;
    width: 44%;
    height: 16%;
}
}

</style>



