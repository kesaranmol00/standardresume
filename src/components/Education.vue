<template>
    <div>
        <div class="heading">
            <h3>
                <P>All said and done... ME IN SUMMATION</P>
            </h3>    
        </div>
        <div class="i-container"> 
        <div class="i-content">
            <img class="i-img" src="../assets/developer.jpg"/>
            <div class="img-content"> A Developer</div>
        </div>
        <div class="i-content">
            <img  class="i-img" src="../assets/gym.jpg"/>
           
            <div class="img-content"> A Gym Freak</div>
        </div>
        <div class="i-content">
            <img  class="i-img" src="../assets/foodie.jpg"/>
            <div class="img-content"> A Foodie</div>
        </div>
           
        </div>
    </div>
</template>

<script>
export default {
    name : "Education",
    props : ["data"]
}
</script>
<style scoped>
.i-container{
    
}
.i-content{
    display: inline;
    position: relative;
    text-align: center;
    
}
.img-content{
    position: absolute;
    bottom: 50px;
    right: 135px;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
}
.i-img:hover{
   filter: blur(0);
   cursor: pointer;
    transform: scale(1.1); 
}
.i-img{
    padding: 15px;
    width: 30%;
    height: 250px;
    border-radius: 50px;
    filter: blur(2px);
    transition: transform 0.8s ease;
}
@media only screen and (max-width: 425px) {
    .i-img{
        width: 90%;
        filter: none;
    transition: none;
    }
}
@media only screen and (max-width: 800px) and (min-width: 426px) {
    .i-img{
        width: 28%;
    }
    .img-content{
      right:  25px;
    }
}
@media only screen and (max-width: 1024px) and (min-width: 800px) {
    .i-img{
        width: 29%;
    }
    .img-content{
      right:55px;
    }
}
/* .dev-image,.gym-image,.foodie-image{
    display: inline-block;
    background-repeat: no-repeat;
    width: 303px;
    height: 290px;
    background-size: cover;
    border-radius: 20px;
    margin: 0 25px;
}
.dev-image{
     background-image: url('../assets/developer.jpg');
}
.gym-image{
    background-image: url('../assets/gym.jpg');    
    background-position: center;
     margin-left: 25px;
}
.foodie-image{
    background-image: url('../assets/foodie.jpg');
    background-position: center;
    
}  */
</style>