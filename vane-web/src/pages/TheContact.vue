<template lang="">
  <Navbar :load="isLoaded" />

  <Contact />
  <Footer />
  <WhatsappBtn />
</template>
<script setup>
  import Contact from "../components/Contact.vue";
  import WhatsappBtn from "../components/WhatsappBtn.vue";
  import Footer from "../components/Footer.vue";
  import Navbar from "../components/Navbar.vue";
  import { onMounted, ref } from "vue";
  import { useHead } from "@vueuse/head";

  const isLoaded = ref(false);

  useHead({
    title:
      "Contact - Psicóloga - Terapia Virtual - Terapia Remota - Psychologist - Virtual terapy - Remote Terapy - Online",
    meta: [
      {
        name: "Contacto - Lic. Vanesa Carlotto Miranda - Psicóloga",
        content:
          "Formulario de contacto para comunicarse con la Lic. Vanesa Carlotto Miranda. Sitio web oficial de la Lic. Vanesa Carlotto Miranda, psicóloga especializada en atención remota. Encuentra información sobre su enfoque terapéutico, servicios y formas de contacto.",
        lang: "es",
      },
      {
        name: "Lic. Vanesa Carlotto Miranda - Psychologist",
        content:
          "Contact form used to comunicate with Vanesa Carlotto Miranda. Official website of Lic. Vanesa Carlotto Miranda, a psychologist specializing in remote therapy. Find information about her therapeutic approach, services, and contact options.",
        lang: "en",
      },
    ],
  });

  onMounted(() => {
    isLoaded.value = true;
  });
</script>
