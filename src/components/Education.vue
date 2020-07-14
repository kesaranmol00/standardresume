<template>
    <div>
        <div class="heading">
            <h3>
                <P>All said and done... ME IN SUMMATION</P>
            </h3>    
        </div>
        <div class="slideshow-container"> 
            <div class="mySlides fade">
                <img class="i-img" src="../assets/developer.jpg"/>
                <span class="text"><h4>Techie</h4> Software engineering (SE) is the profession concerned with specifying, designing, developing and maintaining software applications by applying technologies and practices from computer science, project management, and other fields.
SE applications are used in a wide range of activities, from industry to entertainment.<br><br> Software applications improve user productivity and quality of life. Application software examples: office suites, video games, and the world wide web. System software examples: embedded systems and operating systems.
SE technologies and practices improve the productivity of developers and the quality of the applications they create</span>
            </div>
            <div class="mySlides fade">
                <img  class="i-img" src="../assets/gym.jpg"/>
            
                <span class="text"><h4>Fitness</h4> Exercise is one of the most important factors in a persons’ life.  Physical activity, or the lack of it, can result in a person having a healthy life or cause them to have diabetes.  The benefits of exercise are countless. The positive health results, the improvement in attitude, even better academic performance are all factors which make not exercising inexcusable.
                <br><br>
                   Lack of excercise can cause many diseases. The key to reducing the risk of these diseases is making small changes to your daily lives - eating healthier food, getting your 5-a-day, having treats occasionally, and taking more exercise. Improving your lifestyle with small steps in the right direction will have a big impact on your well-being.</span>
            </div>
            <div class="mySlides fade">
                <img  class="i-img" src="../assets/foodie.jpg"/>
                <span class="text"> <h4>Foodie</h4>Healthy food is one of the most important part in leading a healthy life. Combined with physical activity, a balanced food can help us to reach and maintain a Healthy weight.<br><br> Healthy food habits can reduce the risk of chronic diseases. It can also improve our concentration and promotes our overall health.</span>
            </div>  
            <div class="mySlides fade">
                <img  class="i-img" src="../assets/music.jpg"/>
                <span class="text"> <h4>Music Lover</h4>The soothing power of music is well-established. It has a unique link to our emotions, so can be an extremely effective stress management tool. <br><br>As music can absorb our attention, it acts as a distraction at the same time it helps to explore emotions. This means it can be a great aid to meditation, helping to prevent the mind wandering.</span>
            </div>  
            
<a class="prev" v-on:click="plusSlides(-1)">&#10094;</a>
<a class="next" v-on:click="plusSlides(1)">&#10095;</a>        
        </div>
        <br>
        <div style="text-align:center">
            <span class="dot" v-on:click="currentSlide(1)" ></span> 
            <span class="dot" v-on:click="currentSlide(2)"></span> 
            <span class="dot" v-on:click="currentSlide(3)"></span>
            <span class="dot" v-on:click="currentSlide(4)"></span>  
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
Vue.prototype.slideIndex = 1
export default {
    name : "Education",
    props : ["data"],
    methods :{
        currentSlide(n){
         this.showSlides(this.slideIndex = n)
        },
        plusSlides(n) {
            this.showSlides(this.slideIndex += n);
        },
        showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) {this.slideIndex = 1}    
            if (n < 1) {this.slideIndex = slides.length}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[this.slideIndex-1].style.display = "block";  
            dots[this.slideIndex-1].className += " active";
        } 
    }
    ,
     mounted : function(){
        this.showSlides(this.slideIndex); 
    }
}
</script>
<style scoped>
* {box-sizing: border-box;}
body {font-family: Verdana, sans-serif;}
.mySlides {display: none;}
img {vertical-align: middle;}
/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Caption text */
.text {
  /* color: #000; */
  font-size: 15px;
  padding: 0 12px;
  position: absolute;  
  width: 65%;
  float: right;
  letter-spacing: 1px;
  top:2px
}

/* The dots/bullets/indicators */
.dot {
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
.i-img{
    padding: 15px;
    width: 30%;
    height: 250px;
    border-radius: 50px;   
    margin-left: 20px;
}
/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  color: #000;
  font-weight: bold;
  font-size: 25px;
  padding: 5px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
  color: #fff;
}
@media only screen and (max-width: 425px) {
    .text {
        float: none;
        display: none;
    }
    .i-img{
       width: 88%;
       display: block;
    }
}
</style>