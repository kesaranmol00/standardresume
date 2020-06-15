<template>
<div>
    <div class="navigation">
        <div  v-if="!mobileView" class="d-view">
            <a class="nav-links" href="#" v-for="heading in headings" :key="heading.id">
                {{heading}}
            </a>
        </div>
        <div class="progress-container">
            <div class="progress-bar" id="myBar"></div>
        </div> 
    </div>
    <div class="m-navigation" :class="{'showd' : showNav}">
        <a v-if="mobileView" class="navigation-icon"  @click="showNav = !showNav">
            <i class="fa fa-bars" aria-hidden="true"></i>
        </a>
        <span v-if="mobileView"  class="m-view" :class="{'open' :!showNav}">
            <a class="nav-links" @click="showNav = !showNav" v-for="heading in headings" :key="heading.id">
              {{heading}}
            </a>
        </span>
    </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name : "Navigation",
     props : ["headings"],
     data() {
        return{    
        mobileView : true,
        showNav : false
        }
    },
    methods:{
        handleView() {
        this.mobileView = window.innerWidth <=425;
        },
        handleScroll() {
            var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            var scrolled = (winScroll / height) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";
        }
    },
    created(){
        this.handleView(); 
        window.addEventListener('scroll', this.handleScroll);   
    },
      mounted : function(){             
        var topfordekstop = 0;        
        if(!this.mobileView)
        { 
            topfordekstop = 85
        }
        $('.nav-links').on('click', function () {
        var targetSec = $(this).text().replace(/\s+/g,' ').trim();      
        
        $('html, body').animate({           
                scrollTop: ($('#' + targetSec).offset().top- topfordekstop)
        }, 1000);
        })
        $('.navigation-icon').click(function(){
            $(this).find('i').toggleClass('fa-times fa-bars')
        });
    }
}
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
.nav-links{
    text-decoration: none;
    text-transform: uppercase;
    color:#666;
    display: block;
}
.navigation, .m-navigation{
    width: 100%;
    position: fixed;
    color:  #000;   
    z-index: 3; 
}
.navigation{
    background-color: #FAFAFA;
    box-shadow: 0 1px 3px rgba(0,0,0,.4);
    left: 0;
}
.navigation-icon{
    float: left;
    width: 10%;
}
.m-view{
    float: right;
    width: 75%;
    margin-right: 30px;
}
.navigation-icon i{
   font-size: 20px;
    padding: 8px;
    /* background-color: black; */
    color: #000;
    border-radius: 5px;
    margin: 10px;
    border: 2px solid black;
}
.m-view .nav-links{
    border-bottom: 1px solid #eee;
    color: #666;
    /* display: block; */
    font-size: 18px;
    /* font-weight: 300; */
    text-align: center;
    padding: 10px;
}
.open{
    display: none;
}
.showd{
    background-color: #FAFAFA;
        box-shadow: 0 1px 3px rgba(0,0,0,.4);
        left: 0;
}
.d-view{
    text-align: center;
    padding: 40px 0 10px 0;
    font-size: 130%;
}
.d-view .nav-links{
    display: inline;
    padding: 30px;
}
.progress-container {
  width: 100%;
  height: 8px;
  background: #ccc;
}

.progress-bar {
  height: 8px;
  background: #4AAE9B;
  width: 0%;
}
</style>