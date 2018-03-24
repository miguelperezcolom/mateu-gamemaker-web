<template>
<nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container">
      <ul class="right hide-on-med-and-down">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'precio' }">Precio</router-link></li>
        <li><router-link :to="{ name: 'workflow' }">Workflow</router-link></li>
        <li><router-link :to="{ name: 'manual' }">Manual</router-link></li>
      </ul>

      <ul id="nav-mobile" class="side-nav">
        <li><router-link :to="{ name: 'home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'precio' }">Precio</router-link></li>
        <li><router-link :to="{ name: 'workflow' }">Workflow</router-link></li>
        <li><router-link :to="{ name: 'manual' }">Manual</router-link></li>
      </ul>
      <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
  </nav>
</template>
<script>
  export default {

  }
</script>
<style>
  .router-link-exact-active {
    color: green;
  }
</style>
