<template>
    <div>
        <div class="heading">
            <h3> <p>Here's Something about me</p></h3>
        </div>  
         <div class="about-details">
             <div class="about-img-container">
                 <img class="about-image" src="../assets/my.jpg"/>
             </div>
             <div class="about-content" v-for="data in about" :key="data.id">
                 {{data}}
             </div>
         </div>        
    </div>
</template>

<script>
export default {
    name:"About",
    props : ["about"],
}
</script>
<style scoped>

.about-content{
padding: 0 10px 15px 25px;
font-size: 15px;
letter-spacing: 1px;
}
.about-details {
    clear: both;
}
.about-image{
    height: 180px;
    border: 2px solid #7D7D7D;
    /* width: 250px; */
    float: left;
    margin: 0 25px 10px 25px;
    border-radius: 20px;
}
@media only screen and (max-width: 425px) {
    .about-image{       
        float: none; 
    }
    .about-img-container,.about-content{
        text-align: center;   
    }
}
</style>