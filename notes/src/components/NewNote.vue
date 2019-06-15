<template>
    <div class="new-note">
        <label>Title
            <input v-model="note.title" type="text">
        </label>
            <label>Description
            <textarea v-model="note.descr"></textarea>
        </label>    
            <br/><br/>
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
 
}
</style>
