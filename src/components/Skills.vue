<template>
    <div>
        <div class="heading">
            <h3>
                <P> Technologies I am experienced in </p>
            </h3>
        </div>
    <div v-for="skill in skills" :key="skill.id">         
        <div  v-if="skill.show" class="skills" >
        <!-- <span class="skill-img">
            <img class="img" :title="skill.name" alt="img" :src="getImgUrl(skill.src)">
        </span> -->
        <span>
            <strong class="skill-name">
                {{skill.name}}
            </strong>
            <!--  v-html="getRating(skill.rating)"  skills-->
        <span v-html="getRating(skill.rating)" class="skill-content">
                <span>{{skill.rating}}/10</span>
            </span>
        </span>
        </div>
    </div>    
        <div @click="showModal" class="morelink"> 𝙆𝙣𝙤𝙬 𝙈𝙤𝙧𝙚</div>
         <SkillModal v-show="isModalVisible" v-bind:detail="skills" @close="closeModal"/>
    </div>
</template>

<script>
import SkillModal from './SkillModal.vue';
export default {
    name:"Skills",
    props : ["skills"],
     components : {
        SkillModal
    },
    data () {
      return {
        isModalVisible: false,
      };
    },
    methods:{
         getImgUrl(pet) {
        var images = require.context('../assets/', false, /\.png$/)
        return images('./' + pet + ".png")
         },
        getRating(rating)
         {
             var images = require.context('../assets/', false, /\.png$/)             
             var emptycircle = images('./emptystar.png')
             var darkcircle = images('./Star.png')            
             var html = "";
             for(var i=1;i<=rating;i++)
             {
                 html += "<img style='height: 22px;padding : 2px' alt='img' src= "+darkcircle+">";
             }
             for(var j=5;rating<j;j--)
             {
                 html += "<img style='height: 22px;padding : 2px' alt='img' src= "+emptycircle+">"
             }             
             html += "";             
              return html;
         },
        showModal() {           
            this.isModalVisible = true;
        },
        closeModal() {
           this.isModalVisible = false;
        }
    }
}
</script>
<style scoped>
.skill-name{
    color: #7D7D7D;
    font-size: 20px;
}
/* .img{    
    height: 180px;
    width: 200px; 
    cursor: pointer;
    transition: transform 1s;
}
.img:hover {
    transform: scale(1.25);
} */
.morelink{
    float: left;
    width: 30%;
    vertical-align: middle;
    font-size: 25px;
    cursor: pointer;
    text-align: center;
    transition: transform 1.2s;
    padding-top: 15px;
}
.morelink:hover{
    text-decoration: underline;
    transform: scale(1.2);
}
.skill-content{
    display: block;
    padding: 10px;
    margin-bottom: 5px;
}
.skills{    
    text-align: center;
    display: inline-block;
    transition: transform 1.2s;
    padding:20px 0;
}
.skills:hover{
    transform: scale(1.2);
}
.skill-img{
    display: inline-block;
}
@media only screen and (min-width: 800px) {
    .skills{
        float: left;
        width : 30%;
        text-align: center;        
    }
}
@media only screen and (max-width: 800px) and (min-width: 426px) {
    .skills, .morelink{
        float: left;
        width : 50%;
        text-align: center;        
    }
}

@media only screen and (max-width: 425px) {
    .skills,.morelink{
      display: block;
      float:none;
      width:100%;
      padding-top: 5px;
  }

}
</style>