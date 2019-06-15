<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <section>
        <div class="container">
        <!-- div #app -->
          <h1>{{title}}</h1> 

          <!-- добавляем компонент message как тег -->
          <!-- <message>
          </message> -->
          <!-- или упрощенно так -->
          <!-- <message  v-if="message" /> -->
          <!-- <message    :mes="hello I am props" /> -->
          <message    :mes="message" />

        <div class="message" v-if="message">
            <p>{{message}}</p>
        </div>
        <!-- new note -->
        <newNote :note="note" @addNote="addNote"/>

        <notes 
          :notes="notes"
        />
        <!-- note list -->
        
        <!-- div #app -->
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import message from '@/components/Message.vue'
import newNote from '@/components/NewNote.vue'
import notes from '@/components/Notes.vue'
// @ - src

export default { 

  components: {
    // message:message
    message, newNote, notes
  },

  data() {
    return {
      title: 'Notes App',
      message: 0,
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
                        this.message = ''

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
