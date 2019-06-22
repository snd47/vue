<template>
    <div class="new-note">
        <label>Title
            <input v-model="note.title" type="text">
        </label>

<!-- <label class="priority"> -->
    <span>Priority</span>

    <label class="priority">
        <div>  
            <input v-model="note.priority" type="radio"  name="priority" value ="low" checked="true" />
            <span>low</span>
        </div>
        <div>  
            <input v-model="note.priority" type="radio"  name="priority" value ="normal"/><span>normal</span>
            
        </div>
        <div>  
            <input v-model="note.priority" type="radio" name="priority" value ="high"/>
            <span>high</span>
        </div>
    </label>
<!-- </label> -->
        <label>Description   
            <textarea v-model="note.descr"></textarea>
        </label>   

         <button class="btn btnPrimary" @click="addNote">new note</button>
            <!-- <p>{{note.title}}</p> -->
        </div>
</template>

<script>
export default {
    props: {
        note:{
            type:Object,
            required:true
        } 
    },
    methods: {
        addNote() {
            this.$emit('addNote', this.note)
        }
    }
}
</script>

<style lang="scss">

.new-note {
    text-align:center;
    margin-bottom: 20px;
}

.priority {
    display:flex;
    justify-content: space-around;
    margin: 0 0 20px 0;
   
       input { margin-bottom: 0;
    }
     
}
</style>
