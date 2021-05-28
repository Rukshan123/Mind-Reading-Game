<template>
  <div class=" main01" >
    
    <q-img class="page2Image" src="~assets/BG.png">



    <img src="~assets/MG-02.png" alt="" class="howToPlay" >
    <img src="~assets/How to play.png" alt="" class="guiImg" >
        <div class="abcd">

      
        <q-btn class="controllBtnsPlay" @click="soundStop">
          <img src="~assets/playnow.png" class="controllBtnsImgs" />
      </q-btn>


      <q-btn  class="controllBtnsQuit"  @click="confirm = true" >
          <img src="~assets/Butt-02.png" class="controllBtnsImgs" />
        </q-btn>

         
          <div v-for="(ic, index) in iconF" :key="ic.ic" class="single_icon">
            <span class="num"> {{ index }} </span><img class="symble" :src="ic.icon" />
          </div>
        </div>

      <q-dialog v-model="confirm" persistent >
      <q-card >
        <q-card-section class="row items-center">
          <span class="q-ml-sm" style="font-weight:600"> Are you sure you want to quit..?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Yes" color="red" @click="closeApp" />
        </q-card-actions>
      </q-card>
    </q-dialog>
       
   </q-img>
 <audio id="play" src="../assets/sounds/mind_reader_2.mp3"></audio>
</div>
</template>

<script>
import icon01 from "../assets/icons/icons-01.png";
import icon02 from "../assets/icons/icons-02.png";
import icon03 from "../assets/icons/icons-03.png";
import icon04 from "../assets/icons/icons-04.png";
import icon05 from "../assets/icons/icons-05.png";
import icon06 from "../assets/icons/icons-06.png";
import icon07 from "../assets/icons/icons-07.png";
import icon08 from "../assets/icons/icons-08.png";
import icon09 from "../assets/icons/icons-09.png";
import icon10 from "../assets/icons/icons-10.png";
import $ from 'jquery'
import { LocalStorage } from 'quasar';
export default {
  data() {
    return {
      confirm: false,
      test:icon09,
      iconF: [
        { icon: icon01 },{ icon: icon02 },{ icon: icon03 },{ icon: icon04 },{ icon: icon05 },{ icon: icon06 },
        { icon: icon07 },{ icon: icon08 },{ icon: icon09 },{ icon: icon10 },{ icon: icon01 },{ icon: icon02 },
        { icon: icon03 },{ icon: icon04 },{ icon: icon05 },{ icon: icon06 },{ icon: icon07 },{ icon: icon08 },
        { icon: icon09 },{ icon: icon10 },{ icon: icon01 },{ icon: icon02 },{ icon: icon03 },{ icon: icon04 },
        { icon: icon05 },{ icon: icon06 },{ icon: icon07 },{ icon: icon08 },{ icon: icon09 },{ icon: icon10 },
        { icon: icon01 },{ icon: icon02 },{ icon: icon03 },{ icon: icon04 },{ icon: icon05 },{ icon: icon06 },
        { icon: icon07 },{ icon: icon08 },{ icon: icon09 },{ icon: icon10 },{ icon: icon01 },{ icon: icon02 },
        { icon: icon03 },{ icon: icon04 },{ icon: icon05 },{ icon: icon06 },{ icon: icon07 },{ icon: icon08 },
        { icon: icon09 },{ icon: icon10 }
        
      ],

     
    };
  },
  methods: {
    
    renderIcons() {
      var newArray = this.iconF;
      const shuffleArray = newArray => {
          for (let i =  newArray.length -1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = newArray[i];
            newArray[i] = newArray[j];
            newArray[j] = temp;
          }
        return newArray
      };
      shuffleArray(newArray)

      let randomIcon = newArray[0]
      newArray[9] = randomIcon,   newArray[18] = randomIcon,  newArray[27] = randomIcon
      newArray[36] = randomIcon,  newArray[45] = randomIcon
      localStorage.setItem('value', JSON.stringify( newArray[9]))
    }  ,
   
    closeApp () {
      navigator.app.exitApp();
     
    },

      soundStop(){
        document.getElementById('play').pause();
              this.$router.push("/page03");
     
    },
     
       },    
      mounted(){
      document.getElementById('play').play();
    },

  created() { 
    this.renderIcons();
    document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    StatusBar.hide()
    StatusBar.overlaysWebView(false);


}
document.addEventListener("deviceready", function(){
    var autoHideNavigationBar = true;
    window.navigationbar.setUp(autoHideNavigationBar);      
}, false);
   },

 }

</script>

<style>
.howToPlay{
   width: 25vw;
   position:absolute ;
   top: 1%;
     left: 1%;
}
.guiImg{
  position:absolute ;
  width: 25vw;
  left: 1%;
  height: 86%;
  bottom: 0;
}
.page03BackBtn{
  top: 2px;
  width: 70px;
  height: 40px;
  position: relative;
 

}


.symble {
    width: 91%;
    position: relative;
    bottom: 12%;
    border-radius:100%;
  border: 2px solid rgb(240, 240, 240);
}

.controllBtnsPlay {
   background-color: transparent !important;
  position: absolute;
  right: 2.5%;
    width: 19%;
    height: 9%;
    bottom: 2%;
box-shadow: 0px 1px  10px 7px rgba(240,240,240,1);

}
.controllBtnsQuit{
   /* background-color: transparent !important; */
  /* border-radius: 50%; */
  right: 25.5%;
   bottom: 2%;
  position: absolute !important;
  width: 19%;
    height: 9%;
box-shadow: 0px 1px  10px 7px rgba(240,240,240,1);
}
.controllBtnsImgs{
position: absolute;
  width: 115%;
  height: 120%;
}

.page2Image {
 width:100%;
 height: 100%;
 background-position: 0;

}

.num {
    position: relative;
    left: 26%;
    -webkit-text-fill-color: black;
    color: white;
    -webkit-text-stroke-width: 0.2px;
    
}
.single_icon {
      font-size: 15px;
    font-weight:900;
    width: 9%;
    display: inline-block;
    overflow: hidden;
    margin: auto;
    margin-bottom: -1%;
    
  
}
.abcd {
       background-color: transparent !important;
    position: absolute;
    right: 0;
    bottom: 3%;
    margin: auto;
    height: 100vh;
    width: 72%;
    display: inline-block;
}
.main01{
  width: 100vw;
  height: 100vh;
}

.q-img__image{
  
    background-position: 0 !important;
}

@media all and (min-width: 375px) and (max-width: 425px){
  .abcd {
    background-color: transparent !important;
    position: absolute;
    right: 0;
    top: 8%;
    bottom: 3%;
    margin: auto;
    height: 100vh;
    width: 58%;
    display: inline-block;
}
.single_icon {
    width: 10%;
    font-size: 11px;
}
.btnSet {
    top: 75%;
    left: 40%;
}
.controllBtns {
    width: 32%;
}
}
 
</style>
