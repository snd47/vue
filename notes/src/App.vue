<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
        <!-- div #app -->
          <h1>{{title}}</h1> 
        <div class="message" v-if="message">
            <p>{{message}}</p>
        </div>
        <!-- new note -->
        <div class="new-note">
            <input v-model="note.title" type="text">
            <textarea v-model="note.descr"></textarea>
            <button @click="addNote">new note</button>
            <!-- <p>{{note.title}}</p> -->
        </div>

        <!-- note list -->
        <div class="note" v-for="(note, index) in notes" :key="index">
            <div class="note-header">
                <p>{{note.title}}</p>
            </div>
            <div class="note-body">
                <p>{{note.descr}}</p>
                <p>{{note.date}}</p>
                <hr align="left" width="300" size="2" color ="#ff9900">
            </div>
        </div>
        <!-- div #app -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default { 

  data() {
    return {
      title: 'Notes App',
                message: null,
                note: {
                    title:'',
                    descr:''
                },
     notes: [
                    {
                        title: 'First Note',
                        descr: 'Description for first note',
                        date: new Date(Date.now()).toLocaleString()
                    },
                    {
                        title: 'Second Note',
                        descr: 'Description for second note',
                        date: new Date(Date.now()).toLocaleString()
                    },
                    {
                        title: 'Third Note',
                        descr: 'Description for third note',
                        date: new Date(Date.now()).toLocaleString()
                    }
                ]

      }
    },
    methods: {
                addNote() {
                    // console.log(this.note)
                    // this.notes.push({
                    //     title:this.note.title,
                    //     descr:this.note.descr
                    // })
                        let {title, descr} = this.note // destructuring

                        if (title === '') {
                            this.message='title can`t be blank!'
                            return false
                        }
                        this.notes.push({
                            title,                      // title:title
                            descr,
                            date: new Date(Date.now()).toLocaleString()
                        })
                        this.note.title = ''
                        this.note.descr = ''
                        this.message = null

                }
            }
  
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
