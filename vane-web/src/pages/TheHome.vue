<template lang="">
  <div class="w-auto overflow-x-hidden">
    <Navbar></Navbar>
    <Landing></Landing>
    <!-- <TerapyTypesRedux></TerapyTypesRedux> -->
    <Navigation></Navigation>
    <WhatsappBtn></WhatsappBtn>
    <Contact> </Contact>
    <Footer></Footer>
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
</script>
