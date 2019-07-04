<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>

        <header>
          <div class="header-title">
            <h2><strong>Modal app</strong></h2>
          </div>
          <div class="reg-login">
            <button class="btn btnPrimary" @click="modalRegistration= !modalRegistration">Registration</button>
            <modalRegistration v-show="modalRegistration" @close="modalRegistration=false" />

            <button class="btn btnPrimary" @click="modalLogin= !modalLogin">Login</button>
            <modalLogin v-show="modalLogin" @close="modalLogin=false" />
          </div>
        </header>

        <div class="container main">
          <button class="btn btnPrimary" @click="modalFirst= !modalFirst">Show first modal</button>
          <!-- first modal -->
            <!-- v-if="modalFirst" - doesn't work with animation, remove element from DOM-->
          <modals 
            title="First mod"
            floor="2019"           
            v-show="modalFirst"
            @close="modalFirst= false"
          >
            <!-- use <form> <ul> or other tag with slot name-->
                <div slot="body">
                      <p>Text Text Text</p>
                      <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Well Done!</button>
                </div>

                <div slot="footer">
                      <p>real footer</p>
                </div>

          </modals>

          <button class="btn btnPrimary" @click="modalSecond.show= !modalSecond.show">Show modal with form</button>
          <!-- second modal -->
            <!-- v-if="modalFirst" - doesn't work with animation, remove element from DOM--> 
          <modals 
            title="Modal with form"
            v-show="modalSecond.show"
            @close="onCloseSecondForm"
          >
            <!-- use <form> <ul> or other tag with slot name-->
            <div slot="body">
                  <form @submit.prevent="submitSecondForm">
                    <label>Name:
                      <input type="text" required v-model="modalSecond.name">
                    </label>
                    <label>Email:
                      <input type="email" required v-model="modalSecond.email">
                    </label>
                    <button class="btn btnPrimary">Submit</button>
                  </form>
    
            </div>

            <div slot="footer">
                  <p>real footer</p>
            </div>

          </modals>
<!-- modal with validate -->
          <button class="btn btnPrimary" @click="modalValidate= !modalValidate">Show modal with form + validate</button>
          <modalValidate v-show="modalValidate" @close="modalValidate=false" />

          

        </div>
      </section>

    </div>
  </div>
</template>

<script>

import modals from '@/components/UI/Modal.vue'
import modalValidate from '@/components/ModalValidate.vue'

import modalRegistration from '@/components/ModalRegistration.vue'
import modalLogin from '@/components/ModalLogin.vue'

// import { required, minLength, email } from 'vuelidate/lib/validators'

export default { 
  // name: 'modals app',
  components: {
    modals, modalValidate, modalRegistration, modalLogin
  },
  data() {
    return {
      modalFirst:false,
      modalSecond: {
        show: false,
        name: '',
        email:''
      },
      modalValidate:false,
      modalRegistration:false,
      modalLogin:false
    }
  },
  //  validations: {
  //    modalSecond: {
  //       name: {
  //         required,
  //         minLength: minLength(4)
  //       },
  //       email: {
  //         required,
  //         email
  //       }
  //    }
  // },
  methods: {
    submitSecondForm() {
      console.log({
        name:this.modalSecond.name,
        email:this.modalSecond.email
      });
      this.onCloseSecondForm()
    },
    onCloseSecondForm() {
      this.modalSecond.name=''
      this.modalSecond.email=''
      this.modalSecond.show=false
      // this.$v.$reset() 
      
    }
  }
}
</script>

<style lang="scss">

.main {
    display:flex;
    flex-direction: column;
    align-items: center;
    button {
      background-color: rgba(10, 87, 110, 0.404) !important;
      border: rgba(10, 87, 110, 0.404) !important;
      width: 33%;
      margin: 0 0 30px 0;

    }
}

header {
  // width: 1080px;
 
  display:flex;
  justify-content: space-around;
  h2 {
    color: rgba(41, 30, 2, 0.89);


  }
}

.reg-login {
  display:flex;
  justify-content: flex-end;
}

.reg-login>button {
      background-color: transparent !important;
      border:none !important;
      color:rgba(41, 30, 2, 0.89)!important;
    margin: 0 0 30px 10px;
  }

</style>
