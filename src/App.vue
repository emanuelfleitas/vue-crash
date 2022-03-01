<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="container">
    <Header title="Task Trackerd"/>
    <Tasks @toggle-reminder="toggleReminder()" @delete-task="deleteTask()" :tasks="tasks" />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
export default {
  name: 'App',
  components: {
    Header,
    Tasks
  },
  data() {
    return {
      tasks:[]
    }
  },
  methods: {
    deleteTask(id){
      if(confirm('Are you sure?')){
        this.tasks = this.tasks.filter((task)=>{
          task.id !==id
        })
        console.log(this.tasks);
      }
    },
    toggleReminder(id){
      console.log(id)
    }
  },
  created() {
    this.tasks = [
      {
        id:1,
        text:'Doctors Appointment',
        day:'March 1st at 2:30pm',
        reminder:true
      },
      {
        id:2,
        text:'Meeting school',
        day:'March 3 at 2:30pm',
        reminder:true
      }
      ,
      {
        id:3,
        text:'Foof Shooping',
        day:'March 3 at 11:00am',
        reminder:false
      }
    ]
  },

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #235B0C ;
  margin-top: 60px;
}
.container {
  padding:50px ;
  margin:20px;
  border:1px solid #EEEEEE;
  box-shadow:2px 1px 3px 1px;
}

.btn{
  font-weight: bold;
  padding:10px;
  border:1px solid #235B0C ;
  color: #FBFCFC ;
  
}

.btn:hover{
  cursor: pointer;
  padding:10px;
  border:1px solid #235B0C ;
  color: #FBFCFC ;
}


</style>
