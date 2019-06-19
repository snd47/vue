<template>
<!-- note list -->
    <div class="notes"> 
        <div class="note" :class="{full:!grid}" v-for="(note, index) in notes" :key="index">
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
        },
    
    grid: {
        type: Boolean,
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
    &.full {
        width: 100%;
    }
}

.note-header {
     display: flex;
    align-items:center;
    justify-content: space-between;

    h1 {
        font-size: 32px;
    }
    p {
        // display: flex;
        // align-items:center;
        // justify-content: space-between;
        color:blue;
        font-size: 22px;

    }

    svg {
        margin-right:12px;
        color:burlywood;
        &.active {
            color: blue;
        }
        &:last-child {
            margin-right: 0;
        }
    }
}

.note-body {
    p {
        margin: 20px 0;
    }
}
</style>
