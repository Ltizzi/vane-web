<template lang="">
  <div class="w-auto overflow-x-hidden bg-neutral caret-transparent">
    <Navbar :load="state.nav"></Navbar>
    <Landing @scroll="scroll" @animLoaded="landingLoaded"></Landing>
    <!-- <TerapyTypesRedux></TerapyTypesRedux> -->
    <Navigation v-show="state.landing"></Navigation>
    <WhatsappBtn
      :class="[
        state.nav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-48',
        'transition-all ease-in-out duration-300',
      ]"
    ></WhatsappBtn>
    <Contact id="contact" v-show="state.landing"> </Contact>
    <Footer v-show="state.landing"></Footer>
  </div>
</template>
<script setup>
  import Landing from "../components/Landing.vue";
  import TerapyTypesRedux from "../components/TerapyTypesRedux.vue";
  import Navigation from "../components/Navigation.vue";
  import WhatsappBtn from "../components/WhatsappBtn.vue";
  import Contact from "../components/Contact.vue";
  import Footer from "../components/Footer.vue";
  import Navbar from "../components/Navbar.vue";
  import { onBeforeMount, reactive } from "vue";
  import { API_URL } from "../main";
  import { useHead } from "@vueuse/head";

  const state = reactive({
    landing: false,
    nav: false,
  });

  useHead({
    title:
      "Lic. Vanesa Carlotto Miranda - Psicóloga - Terapia Virtual - Terapia Remota - Psychologist - Virtual terapy - Remote Terapy - Online",
    meta: [
      {
        name: "Lic. Vanesa Carlotto Miranda - Psicóloga - Terapia Virtual - Terapia Remota - Online",
        content:
          "Sitio web oficial de la Lic. Vanesa Carlotto Miranda, psicóloga especializada en atención remota. Encuentra información sobre su enfoque terapéutico, servicios y formas de contacto.",
        lang: "es",
      },
      {
        name: "Lic. Vanesa Carlotto Miranda - Psychologist - Virtual terapy - Remote Terapy - Online",
        content:
          "Official website of Lic. Vanesa Carlotto Miranda, a psychologist specializing in remote therapy. Find information about her therapeutic approach, services, and contact options.",
        lang: "en",
      },
    ],
  });

  function scroll() {
    const contact = document.getElementById("contact");
    if (contact) {
      console.log(contact, "asdasd");
      contact.scrollIntoView({ behavior: "smooth" });
    }
  }

  function landingLoaded() {
    state.landing = true;
    setTimeout(() => {
      state.nav = true;
    }, 900);
  }

  onBeforeMount(async () => {
    //AWAKE API
    const response = await fetch(`${API_URL}/api/ping`, {
      method: "GET",
      mode: "cors",
    });
  });
</script>
