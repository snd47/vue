<template>
     <modal 
            title="Modal with form"
            @close="$emit('close')"
          >
            <!-- use <form> <ul> or other tag with slot name-->
            <div slot="body">
                  <form @submit.prevent="">
                    <label>Name:
                      <input type="text" required >
                    </label>
                    <label>Email:
                      <input type="email" required >
                    </label>
                    <button class="btn btnPrimary">Submit</button>
                  </form>
    
            </div>

            <div slot="footer">
                  <p>real footer</p>
            </div>

          </modal>
</template>

<script>
import modal from '@/components/UI/Modal.vue'
export default {
    components :{
        modal
    }
}
</script>
