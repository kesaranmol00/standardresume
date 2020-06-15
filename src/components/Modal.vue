
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
          class="modal-body a-left"
          id="modalDescription"
        >
        
          <slot name="body">
               <ul>
                  <li v-for="data in detail" :key="data.id">
                      {{data}}
                  </li>
                </ul>
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
    name: 'modal',
    props : ["detail"],
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width:80%
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
    font-size: 20px;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
    font-size: 27px;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 6px;
    font-size: 15px;
    padding: 10px;
  }
  /* li{
    padding: 5px;
  } */
  .a-left{
    text-align: left;
  }
</style>