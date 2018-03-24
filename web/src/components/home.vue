<template>

    <article>


      <div class="container">
        <br><br>
        <h1 class="header center orange-text">Mateu Game Maker</h1>
        <div class="row center">
          <h5 class="header col s12 light">La manera más fácil de convertir en realidad tus videojuegos.</h5>
        </div>
        <div class="row center">
          <router-link :to="{ name: 'manual' }" id="download-button" class="btn-large waves-effect waves-light orange">Get Started</router-link>
        </div>
        <div class="row center">
        <ul>
          <li>Para niños</li>
          <li>Para diseñadores</li>
          <li>Para game designers</li>
        </ul>
        </div>
        <br><br>

      </div>

      <div class="row">
        <div class="col s12 m3">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
            <h5 class="center">Sin programar</h5>

            <p class="light">Define la lógica de tu videojuego utilizando un editor tipo Scratch del MIT.</p>
          </div>
        </div>

        <div class="col s12 m3">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
            <h5 class="center">Assets</h5>

            <p class="light">Importa assets desde Sketch o desde Github.</p>
          </div>
        </div>

        <div class="col s12 m3">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Tecnología</h5>

            <p class="light">Incorpora a tu juego toda la tecnología para que solo tengas que preocuparte de la parte creativa.</p>
            <p class="light">3D, multijugador, física, etc en tu videojuego sin tener que estudiar un master ;)</p>
          </div>
        </div>

        <div class="col s12 m3">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Prototipado</h5>

            <p class="light">Utiliza Mateu Game Maker para crear prototipos y exporta después el proyecto a Unreal, Godot, Unity o Libgdx para terminar de desarrollar tu videojuego.</p>
          </div>
        </div>

      </div>


    </article>


</template>
<script></script>
<style></style>
