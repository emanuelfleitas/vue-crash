<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="container">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
     <router-link to="/jobs">Jobs</router-link> |
  </div>
  <button @click="redirect" >Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  methods: {
    redirect(){
     this.$router.push({
       name:'About'
     })
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(1)
    }
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
  color: black;
  
}

.btn:hover{
  cursor: pointer;
  padding:10px;
  border:1px solid #235B0C ;
  color: black ;
}


</style>
