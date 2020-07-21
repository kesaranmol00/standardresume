<template>
    <div>
        <div class="heading">
            <h3>
                 <p> Contact info </p>
            </h3>
        </div>
        <div id="f-left">
             <a href="https://www.google.com/maps/dir/32.6807679,+74.883424//@32.6814176,74.8639303,14z/data=!3m1!4b1!4m7!4m6!1m3!2m2!1d74.883424!2d32.6807679!1m0!3e0" target="_blank" 
             id="map" title="location"></a>
           <!-- <img src="../assets/location.png" href="google.com"
           target="_blank"/> -->
        </div>
        <div id="f-right">
            <form id="form">
                <p class="f-heading">Drop me a line</p>
                <input type="text" id="e-sub" placeholder="About"><br>
                <textarea type="text" id="e-body" placeholder="Detail"></textarea><br><br>
                <input @click="sendEmail()" type="button" class="c-btn" value="Send">
                <input @click="formReset()" class="c-btn" type="button" value="Reset">
            </form>
        </div>
    </div>
</template>
<script>
export default {
    methods : {
        sendEmail(){   
            let sub =document.getElementById("e-sub").value;            
            let body = document.getElementById("e-body").value;
            // body = "Hi Anmol,\n\n" + body;
            window.open('mailto:anmolkesar24@gmail.com?subject='+sub+'&body='+body);
            
        },
        formReset(){
            document.getElementById("form").reset();
        }
    }
}
</script>

<style scoped>
#map{
    background-repeat: no-repeat;
    background-size: cover;
    /* background-color: transparent; */
    background-position: center;
    background-position: 50% 50%;
    background-image: url('../assets/location.png');
    width: 250px;
    height: 210px;
    display: inline-block;
    /* padding-left: 60px; */
    border-radius: 7px;
}
#f-left{
    float: left;
    width: 60%;
    text-align: center;
    margin-bottom: 30px;
}
#f-right{
    float: right;
    width: 40%;
    text-align: left;
}
#e-sub, #e-body{
    width: 70%;  
    margin-top:5px ;  
}
#e-body{
    width: 72%;
    height: auto;
    height: 100px;
}
form input{
    padding: 5px;
}
.c-btn{
    background-color: #036266;
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 15px;
}
.c-btn:last-child{
    margin-left: 20px;
}
.f-heading{
    margin-top: 0;
    color: #036266;
    font-weight: bold;
    font-size: 18px;
}
@media only screen and (max-width: 425px) {
    #f-right, #f-left{
        float: none;
        width: 100%;
        text-align: center;
    }
    #map{
        width: 80%;
        height: 200px;
    }
    #f-right{
        padding: 20px 0;
    }
    #f-left{
        margin-bottom: 0;
    }
    .c-btn{
        padding: 6px 11px;
    }
}
</style>