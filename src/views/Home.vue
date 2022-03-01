<template>
   <div>
       <h3>Home</h3>
        <Header title="Task Trackerd" @btn-click="toggleAddTask" :showAddTask="showAddTask" />
        <div v-if="showAddTask">
        <AddTask @add-task="addTask" />
        </div>
        <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'

export default {
name: 'Home',
components: {
    Header,
    Tasks,
    AddTask
  },
data() {
    return {
      tasks:[],
      showAddTask:false
    }
  },
methods: {
    deleteTask(id){
      console.log(id);
      if(confirm('Are you sure?')){
        this.tasks = this.tasks.filter((task)=> task.id !=id)
        console.log(this.tasks );
      }
    },
    toggleReminder(id){
      console.log("clic",id)
      this.tasks = this.tasks.map((task)=> task.id === id ? {...task,reminder:!task.reminder} : task)
    },
    addTask(task){
      console.log(task);
      this.tasks = [...this.tasks,task]
    },
    toggleAddTask(){
      this.showAddTask = !this.showAddTask
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
  }
}
</script>

<style>

</style>