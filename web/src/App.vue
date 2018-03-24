<template>
  <div id="app">
    <cabecera></cabecera>
    <router-view/>
  </div>
</template>

<script>

  import cabecera from "./components/cabecera";

  export default {
    name: 'App',
    components: {cabecera}
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
