<template>
    <!-- <div> class="wordone" -->
    <div>
        <div class="heading">
            <h3>
                 <p>My digital journey</p>
            </h3>
        </div>
        <div>
            <ol>
               <!-- <span class="d-none"> {{counter=1}}</span> -->
                <li class="w-done" title="click to know more" v-for="details in data" :key="details.key">
                    <!-- <div class="counter">{{counter++}}</div> -->
                    <div class="counter" @click="showModal"></div>
                    <!-- <div class = "vertical"></div> -->
                    <div class="w-done-year"> {{details.year}}</div>
                    <modal class="modelbtn" v-show="isModalVisible" v-bind:detail="details.workdone" @close="closeModal"/>
                </li>
            </ol>
        </div>
    </div>
</template>



<script>
import $ from 'jquery'
import Modal from './Modal.vue';
export default {
    name : "WorkDone",
    props : {
        data : Array
    },
    components : {
        Modal
    },
    data () {
      return {
        isModalVisible: false,
      };
    },
   mounted : function(){
       //$("li").style.width = (100/ this.data.length);
        $(".w-done").width((100/ (this.data.length+1)) + '%');
        // $(".counter").text("adsd");
        
    }, 
    methods: {
      showModal() {
        event.path[1].children[2].style.cssText = ""
      },
      closeModal() {
         event.path[3].style.cssText = "display:none"
      }
    }
}
</script>
<style lang="scss" scoped>
ol{
list-style-type: none;
}
.vertical {
    border-left: 3px solid #4AAE9B;
    height: 58px;
    position: absolute;
    margin: 17px 3px;
}
.w-done{
display: inline-block;
 text-align: center;
}
.counter{
  transition: transform 0.8s;
  cursor: pointer;
  -moz-border-radius: 20px/20px;
  -webkit-border-radius: 20px 20px;
  border-radius: 20px/20px;
  border: solid 10px #4AAE9B;
  width: 10px;
  height: 10px;
  margin: 0 30%;

}
 .counter::before{
    display: inline-block;
    content: "";
    border-top: .2rem solid #4AAE9B;
    width: 105px;
    margin: 0 1em;
    transform: translateY(-7px);
 }

.counter:hover{
    transform: scale(1.1);
}
.w-done-year{
 margin: 15px 24px 0 0;

 display: block;
}
.d-none{
    display: none
}

@media only screen and (min-width: 800px) {
    .counter::before{   
    width: 65px;
 }
    .w-done-year {
        margin: 15px 8px 0 0;
    }
}
@media only screen and (max-width: 800px) and (min-width: 426px) {
    .counter::before{   
    width: 38px;
 }
 .w-done-year {
        margin: 15px 0 0 0;
    }
}

@media only screen and (max-width: 425px) {
    .w-done{
    display: block;
    margin-left: 30%;
    
    }
    .counter::before{   
        display: none;
     }
     .w-done-year {
        margin: 8px 0px 20px 8px;
    }
}
</style>