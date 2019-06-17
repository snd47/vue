<template>
<!-- note list -->
    <div class="notes"> 
    <div class="note" v-for="(note, index) in notes" :key="index">
            <div class="note-header">
                <p>{{note.title}}</p>
                <p style="cursor: pointer;" @click="removeNote(index)">x</p>
            </div>
            <div class="note-body">
                <p>{{note.descr}}</p>
                <p>{{note.date}}</p>
                <hr align="left" width="300" size="2" color ="#ff9900">
            </div>
        </div>
        </div>
</template>

<script>
export default {
    props: {
        notes: {
            type: Array,
            required: true
        }
    },
    methods: {
        removeNote(index) {
            console.log(`Note id - ${index} removed`)
            this.$emit('remove', index)
        }
    }
}
</script>


<style lang="scss">
.notes {
    display: flex;
    align-items:center;
    justify-content: space-between;
    flex-wrap:wrap;
    padding: 40px 0;
}

.note {
    width: 48%;
    padding: 18px 20px;
    margin: 5px 0;
    background-color: #fff;
}

.note-header {
     display: flex;
    align-items:center;
    justify-content: space-between;
    p {
        // display: flex;
        // align-items:center;
        // justify-content: space-between;
        color:blue;
        font-size: 22px;

    }
}

.note-body {
    p {
        margin: 20px 0;
    }
}
</style>
