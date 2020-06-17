<template>
    <div>
        <div class="img"></div>
        <!-- <div class="bg-text">
            <h1>Anmol Kesar</h1>
            <p>Full Stack developer</p>
        </div> -->
    </div>
</template>

<style scoped>
.img {
    background-repeat: no-repeat;
    background-size: cover;
    background-color: transparent;
    background-position: center;
    /* background-position: 50% 50%;  logo-img*/
    background-image: url('../../assets/banner.jpg');
    /* min-height: 0px; */
    padding-top: 80px;
    padding-bottom: 80px;
    height: 401px;
    /* filter: blur(8px);
    -webkit-filter: blur(8px) */
}
/* Position text in the middle of the page/image */
.bg-text {
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0, 0.4); /* Black w/opacity/see-through */
  color: white;
  font-weight: bold;
  border: 3px solid #f1f1f1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  width: 75%;
  padding: 20px;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
}
@media only screen and (max-width: 800px) {
  .img{
      height: 275px;
  }
}
@media only screen and (max-width: 425px) {
  .img{
      height: 225px;
  }
}
</style>