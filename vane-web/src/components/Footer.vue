<template lang="">
  <footer class="footer bg-base-300 text-base-content p-10 justify-around">
    <nav>
      <h6 class="footer-title">Links</h6>
      <a class="link link-hover">Sobre mí</a>

      <a class="link link-hover">Terapias</a>
      <a class="link link-hover">Preguntas Frecuentes</a>
      <a class="link link-hover">Contacto</a>
    </nav>
    <nav>
      <h6 class="footer-title">Social</h6>
      <div class="grid grid-flow-col gap-4">
        <font-awesome-icon :icon="['fab', 'whatsapp']" class="size-7" />
        <font-awesome-icon :icon="['fab', 'instagram']" class="size-7" />
        <font-awesome-icon :icon="['fab', 'linkedin']" class="size-7" />
      </div>
    </nav>
  </footer>
  <footer class="footer footer-center bg-primary text-primary-content p-5">
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
        <font-awesome-icon :icon="['fab', 'github']" class="size-7" />
        <font-awesome-icon :icon="['fab', 'linkedin']" class="size-7" />
      </div>
    </nav>
  </footer>
</template>
<script setup></script>
<style lang=""></style>
