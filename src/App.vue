<template>
  <div id="app">  
    <div id = "container">  
      <Navigation  v-bind:headings ="sections[0].headings" />
      <Header />    
      <About id="about" v-bind:about ="sections[0].about" class="content"/>
      <Skills id="skills" v-bind:skills ="sections[0].skills" class="content"/>
       <WorkDone id="work" v-bind:data ="sections[0].work" class="content full-width"/><!-- full-width -->
      <Education id="interests" v-bind:data ="sections[0].education" class="content"/>
      <Contact id="contact" class="content" />
      <Footer />
    </div>
  </div>
</template>

<script>
import json from './assets/data/data.json'
import Navigation from './components/Navigation'
import Header from './components/layout/Header'
import About from './components/About'
import Skills from './components/Skills'
import WorkDone from './components/WorkDone'
import Education from './components/Education'
import Footer from './components/layout/Footer'
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {
    Navigation,
    Header,
    About,
    Skills,
    WorkDone,
    Education,
    Footer,
    Contact
  },
  data() {
    return{
      sections : json
    }
  },
  created(){   
    document.title = "AK-Info"
  }
}
</script>

<style>
.heading h3{
      display: flex;
    flex-direction: row;
    color: #4AAE9B;
}
.heading h3::before,.heading h3::after{
     content: "";
     flex: 1 1;
     border-bottom: 2px solid #8B9C9F;         
    margin: auto 19px;
    color: #4AAE9B;
}
body{
  margin: 0;
}
#app {
  font-family: 'gotham rounded', 'open-sans', sans-serif;
  background-color: #4AAE9B;
  color: #7D7D7D;
  margin: 0;
}
.content{
 margin: 10px 100px;
 clear: both;
  overflow: hidden;
}
.content .heading,.full-width .heading{
  text-align: center;
  color: #8B9C9F;
  font-size: 25px;
  /* padding: 0 10%; */
}
.full-width{  
  clear:both;
  overflow: hidden;
  padding: 15px;
}
#container {
    margin: 0 15px;
    box-shadow: 0 10px 10px 3px rgb(39, 39, 39);
    background-color: #FAFAFA;
}
@media only screen and (max-width: 800px) {
    .content{
      margin: 10px 80px;
    }
}
@media only screen and (max-width: 425px) {
    .content{
      margin: 10px 10px;
  }
}
</style>
