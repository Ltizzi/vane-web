<template lang="">
  <div class="w-auto overflow-x-hidden">
    <Navbar></Navbar>
    <Landing @scroll="scroll"></Landing>
    <!-- <TerapyTypesRedux></TerapyTypesRedux> -->
    <Navigation></Navigation>
    <WhatsappBtn></WhatsappBtn>
    <Contact id="contact"> </Contact>
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
  import { onBeforeMount } from "vue";
  import { API_URL } from "../main";

  function scroll() {
    const contact = document.getElementById("contact");
    if (contact) {
      console.log(contact, "asdasd");
      contact.scrollIntoView({ behavior: "smooth" });
    }
  }

  onBeforeMount(async () => {
    //AWAKE API
    const response = await fetch(`${API_URL}/api/ping`, {
      method: "GET",
      mode: "cors",
    });
  });
</script>
