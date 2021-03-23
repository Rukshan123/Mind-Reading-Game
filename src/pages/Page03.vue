<template >
    <q-page>

 
    <q-img class="page3Image"
    src="~assets/BG 3.png">
    
    
      <q-img class="Circule" src="~assets/Circule.png">
        <img  id="resultIcon" :src="icon" alt=""> 
      </q-img>
      


       <div class="btnSetPage4">
         <q-btn  class="BtnsPage4PlayAgain" style="margin-left:6px; "  to="/page02">
       <img src="~assets/Butt-03.png" class="BtnsImgsPage4PlayAgain" > 
       </q-btn>

        
        <q-btn  @click="confirm = true" class="BtnsPage4Exit"  >
       <img src="~assets/Butt-02.png" class="BtnsImgsPage4Exit"> 
      </q-btn>

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


 
    
    

    </q-page>
</template>
<script>
export default{

    data(){
      return{
     confirm: false,
      icon:null,
      
      }
    },   
    created(){
      var image = JSON.parse(localStorage.getItem('value')) 
      var img = image.icon
      this.icon = img
       
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
   
    },

    methods:{
      closeApp () {
      navigator.app.exitApp();
     
    }
    }
   
}
    
</script>

<style>
.BtnsImgsPage4PlayAgain{
  position: absolute;
  width: 105%  !important;
  height: 125%  !important;
}
.BtnsImgsPage4Exit{
    position: absolute;
  width: 105%  !important;
  height: 125%  !important;
}
.page3Image {
  width: 100vw;
  height:100vh ;
  
}
.Circule{
  position: absolute;
  top: 12%;
  left: 7%;
  width: 37%;
   background-color: transparent !important;
}
.btnSetPage4{
 
 
  justify-content: center ;
 background-color: transparent !important;
 position: absolute;
 top: 90%;
 left: 0;
 right: 5%;
 margin: auto;
}
.BtnsPage4Exit{
   border-radius: 25%;
    width: 20%;
    right: 0;
    bottom: 30px;
       position: absolute;
    -webkit-box-shadow: 0px 0px 8px 6px rgba(240,240,240,1);
-moz-box-shadow: 0px 0px  8px 6px rgba(240,240,240,1);
box-shadow: 0px 0px  8px 6px rgba(240,240,240,1);
  
}
.BtnsPage4PlayAgain{
  border-radius: 25%;
    width: 20%;
    /* height: 113%; */
    right: 0;
    bottom: 105px;
    position: absolute;
    -webkit-box-shadow: 0px 0px 8px 6px rgba(240,240,240,1);
-moz-box-shadow: 0px 0px  8px 6px rgba(240,240,240,1);
box-shadow: 0px 0px  8px 6px rgba(240,240,240,1);
}


#resultIcon{
     position: absolute;
     top: 15.6%;
     left: 15.3%;
    border-radius: 100%;
    width:70%;
    box-shadow: 0px 1px 15px -3px rgb(0 0 0);
 
}

.q-img__image{
  
    background-position: 0 !important;
}

@media all and (min-width: 375px) and (max-width: 425px){
#resultIcon {
    left: 34vw;
    top: 25vh;
    margin: auto;
    border-radius: 100%;
    width: 100px;
    box-shadow: 0px 1px 15px -3px rgb(0 0 0);
}

}



</style>