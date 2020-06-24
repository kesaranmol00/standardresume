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
                <div class="r-content">
                    <div  class="address d-inline">
                    </div>
                    <span>
                    Jammu,<br>
                    Jammu and Kashmir,<br>
                    INDIA<br>
                    </span>
                </div>
                <!-- <div class="r-content">
                    <div class="p-number d-inline"></div>
                    <span>
                    +91 9596735336
                    </span>
                </div> -->
                <div class="r-content">
                    <div class="email d-inline"></div>
                   <span><a href="mailto:anmolkesar24@gmail.com"> Email me </a> </span>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    
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
.d-inline{
    display: inline-block;
}
.address,.p-number,.email{
    background-repeat: no-repeat;    
    width: 22px;
    height: 22px;
     background-size: cover;
}
.address{
    /* background-image: url('../assets/location-icon.png');
    icons8-address-64 */
     background-image: url('../assets/Location1.png');
}
.p-number{
    /* background-image: url('../assets/phone-icon.png');
    phone-number-icon-png-6 */
    background-image: url('../assets/Phone.png');
}
.email{
background-image: url('../assets/E-Mail.png');
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
.r-content{
    padding:15px;
}
#f-right span{
    letter-spacing: 2px;
    word-spacing: 4px;
    font-weight: bold; 
}
#f-right a{
    text-decoration: none; 
    color: #7D7D7D;   
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
}
</style>