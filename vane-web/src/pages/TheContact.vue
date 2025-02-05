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

  const isLoaded = ref(false);

  onMounted(() => {
    isLoaded.value = true;
  });
</script>
