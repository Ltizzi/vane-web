<template lang="">
  <div
    class="bg-gradient-to-br from-secondary to-60% to-base-100 h-auto caret-transparent"
  >
    <footer
      class="footer text-neutral p-10 justify-around items-center flex lg:flex-row flex-col"
    >
      <nav
        class="justify-center lg:justify-start lg:items-start flex flex-col items-center"
      >
        <h6 class="footer-title">Links</h6>
        <router-link to="/">
          <a class="link link-hover">{{ $t("footer.menu_items.home") }}</a>
        </router-link>
        <router-link to="/about">
          <a class="link link-hover">{{
            $t("footer.menu_items.about")
          }}</a></router-link
        >

        <router-link to="/info">
          <a class="link link-hover">{{
            $t("footer.menu_items.terapies")
          }}</a></router-link
        >

        <router-link to="/faq">
          <a class="link link-hover">{{ $t("footer.menu_items.faq") }}</a>
        </router-link>
        <router-link to="/contact">
          <a class="link link-hover">{{ $t("footer.menu_items.contact") }}</a>
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
              class="size-7 hover:scale-110 duration-150 transition-all ease-in-out opacity-65 hover:opacity-100"
            />
          </a>
          <a href="https://www.instagram.com/lic.vanesacarlottomiranda">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="size-7 hover:scale-110 duration-150 transition-all ease-in-out opacity-65 hover:opacity-100"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vanesa-carlotto-miranda-b9063849/"
          >
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              class="size-7 hover:scale-110 duration-150 transition-all ease-in-out opacity-65 hover:opacity-100"
            />
          </a>
        </div>
      </nav>
    </footer>
    <footer class="footer footer-center text-orange-50 p-5">
      <aside>
        <p class="font-bold">
          Leonardo Terlizzi
          <br />
          Web Developer
        </p>
        <p>Copyright © {{ new Date().getFullYear() }} - All rights reserved</p>
      </aside>
      <nav>
        <div class="grid grid-flow-col gap-4 -mt-7">
          <a href="https://github.com/Ltizzi" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'github']"
              class="size-7 hover:scale-110 duration-150 transition-all ease-in-out hover:text-info"
            />
          </a>
          <a href="https://www.linkedin.com/in/lterlizzi/" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'linkedin']"
              class="size-7 hover:scale-110 duration-150 transition-all ease-in-out hover:text-info"
            />
          </a>
        </div>
      </nav>
    </footer>
  </div>
</template>
<script setup></script>
<style lang=""></style>
