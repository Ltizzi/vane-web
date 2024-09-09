<template lang="">
  <footer
    class="footer bg-base-300 text-base-content p-10 justify-around items-center flex lg:flex-row flex-col"
  >
    <nav
      class="justify-center lg:justify-start lg:items-start flex flex-col items-center"
    >
      <h6 class="footer-title">Links</h6>
      <router-link to="/">
        <a class="link link-hover">Inicio</a>
      </router-link>
      <router-link to="/about">
        <a class="link link-hover">Sobre mí</a></router-link
      >

      <router-link to="/info">
        <a class="link link-hover">Terapias</a></router-link
      >

      <router-link to="/faq">
        <a class="link link-hover">Preguntas Frecuentes</a>
      </router-link>
      <router-link to="/contact">
        <a class="link link-hover">Contacto</a>
      </router-link>
    </nav>
    <nav
      class="justify-center lg:justify-start lg:items-start flex flex-col items-center"
    >
      <h6 class="footer-title">Social</h6>
      <div class="grid grid-flow-col gap-4">
        <a href="https://wa.me/5491140507052" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'whatsapp']"
            class="size-7 hover:scale-110 duration-150 transition-all ease-in-out hover:text-secondary"
          />
        </a>

        <font-awesome-icon
          :icon="['fab', 'instagram']"
          class="size-7 hover:scale-110 duration-150 transition-all ease-in-out hover:text-secondary"
        />
        <font-awesome-icon
          :icon="['fab', 'linkedin']"
          class="size-7 hover:scale-110 duration-150 transition-all ease-in-out hover:text-secondary"
        />
      </div>
    </nav>
  </footer>
  <footer
    class="footer footer-center bg-gradient-to-br from-stone-600 to-stone-800 text-orange-50 p-5"
  >
    <aside>
      <p class="font-bold">
        Leonardo Terlizzi
        <br />
        Web Developer
      </p>
      <p>Copyright © {{ new Date().getFullYear() }} - All right reserved</p>
    </aside>
    <nav>
      <div class="grid grid-flow-col gap-4 -mt-7">
        <a href="https://github.com/Ltizzi" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'github']"
            class="size-7 hover:scale-110 duration-150 transition-all ease-in-out hover:text-accent"
          />
        </a>
        <a href="https://www.linkedin.com/in/lterlizzi/" target="_blank">
          <font-awesome-icon
            :icon="['fab', 'linkedin']"
            class="size-7 hover:scale-110 duration-150 transition-all ease-in-out hover:text-accent"
          />
        </a>
      </div>
    </nav>
  </footer>
</template>
<script setup></script>
<style lang=""></style>
