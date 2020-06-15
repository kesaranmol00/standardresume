
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            Detail Information

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body t-center"
          id="modalDescription"
        >
        
          <slot name="body">
               <div v-for="data in detail" :key="data.id">
                    <div  id="modal-skill-section" v-if="data.show == false">
                        <span id="skill-pop-name"> {{data.name}}</span>         
                        <span v-html="getRating(data.rating)" class="skill-content">
                            
                        </span>
                    </div>
                </div>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            
            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Close
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'SkillModal',
    props : ["detail"],
    methods: {
      close() {
        this.$emit('close');
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
         }
    },
    
  };
</script>

<style>

#modal-skill-section{
    padding: 6px;
}
#skill-pop-name{
    float: left;
    width :30%;
 }
  .t-center{
      text-align: center;
  }
  @media only screen and (max-width: 425px) {
    #modal-skill-section{
    padding: 12px;
    }
  }
</style>