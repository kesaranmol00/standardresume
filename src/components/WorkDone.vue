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
        $(".w-done").width((100/ (this.data.length)) + '%');
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
  border: solid 10px #036266;
  width: 10px;
  height: 10px;
  margin: 0 30%;

}
li:last-child .counter{
    border: solid 10px #4AAE9B;
}
li:last-child .counter::before{
   display: none
}
 .counter::before{
    display: inline-block;
    content: "";
    border-top: .2rem solid #036266;
    width: 110px;
    margin: 0 25px;
    transform: translateY(-7px);
    pointer-events: none;
 }
.counter:hover{
    transform: scale(1.1);
    box-shadow: 0 7px 5px #08554730;
    border-color: #4AAE9B;;
}

// .counter:hover::before{
//     width: 90px;
//     transform: scale(1);
// }
.w-done-year{
 margin: 15px 24px 0 0;

 display: block;
}
.d-none{
    display: none
}

// @media only screen and (min-width: 800px) {
//     .counter::before{   
//     width: 65px;
//  }
//     .w-done-year {
//         margin: 15px 8px 0 0;
//     }
// }
@media only screen and (max-width: 800px) and (min-width: 426px) {
    .counter::before{   
    width: 33px;
 }
 .w-done-year {
        margin: 15px 0 0 0;
    }
}

@media only screen and (max-width: 425px) {
    .w-done{
    display: block;
    width: 100% !important;
    }
    .counter::before{   
        display: none;
     }
     .w-done-year {
        margin: 8px 0px 20px 8px;
        display: inline;
    }
    
    .counter{
        margin: 0;
        display: inline-block;
    }
    .w-done::after{
            display: block;
            content: "";
            border-left: 3px solid #036266;
            transform: translateY(-2px);
            height: 66px;
            margin: 0 0 0 40%;
    }
    .w-done:last-child::after{
        display: none
    }
}
</style>