<template lang="">
  <div class="navbar bg-base-100 z-50">
    <div class="flex-1">
      <router-link to="/">
        <a class="btn btn-ghost text-xl">Vanesa Carloto Miranda</a>
      </router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 z-50">
        <li>
          <details>
            <summary>Más información</summary>
            <ul class="bg-base-100 rounded-t-none p-2 z-50">
              <li>
                <router-link to="/about"><a>Sobre mí</a></router-link>
              </li>
              <li>
                <router-link to="/info"><a>Terapias</a></router-link>
              </li>
              <li>
                <router-link to="/faq"><a>Preguntas Frecuentes</a></router-link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <router-link to="/contact"><a>Contacto</a></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup></script>
