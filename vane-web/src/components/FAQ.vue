<template lang="">
  <Navbar :load="isLoaded" />

  <div class="relative font-poppins text-base-100 mt-12 caret-transparent">
    <img
      :src="bgFAQ"
      alt=""
      class="lg:h-auto h-full lg:flex lg:w-screen lg:object-fill 2xl:object-cover 2xl:h-full -z-10 absolute top-0 opacity-10"
    />
    <div
      class="flex flex-col justify-start gap-3 lg:mx-20 mx-10 bg-base text-start leading-relaxed"
    >
      <h1
        class="text-center font-semibold lg:text-5xl text-3xl mt-8 mb-4 opacity-80"
      >
        {{ $t("faq.title") }}
      </h1>
      <h1 class="lg:text-3xl text-xl font-semibold opacity-70">
        {{ $t("faq.first.question") }}
      </h1>
      <p class="lg:text-xl text-lg opacity-65">
        {{ $t("faq.first.text") }}
      </p>
      <!-- <h1 class="lg:text-2xl text-xl underline">Te acompaño en:</h1> -->
      <ul
        class="flex flex-col lg:text-xl text-lg gap-6 mx-0 text-start opacity-65"
      >
        <li>
          {{ $t("faq.first.a") }}
        </li>
        <li>
          {{ $t("faq.first.b") }}
        </li>
        <li>
          {{ $t("faq.first.c") }}
        </li>
        <li>
          {{ $t("faq.first.d") }}
        </li>
        <li>
          {{ $t("faq.first.e") }}
        </li>
        <li>
          {{ $t("faq.first.f") }}
        </li>
        <li>
          {{ $t("faq.first.g") }}
        </li>
        <li>
          {{ $t("faq.first.h") }}
        </li>
      </ul>

      <!-- <div class="divider divider-secondary"></div> -->

      <h1 class="lg:text-3xl text-2xl font-semibold mb-4 mt-8 opacity-70">
        {{ $t("faq.second.question") }}
      </h1>
      <div class="lg:text-xl text-lg text-start opacity-65">
        <p class="indent-0">
          {{ $t("faq.second.text") }}
        </p>

        <ul class="lg:text-xl text-lg flex flex-col gap-6 mx-0 text-start mt-6">
          <li>
            {{ $t("faq.second.a") }}
          </li>
          <li>{{ $t("faq.second.b") }}</li>
          <li>
            {{ $t("faq.second.c") }}
          </li>
          <li>
            {{ $t("faq.second.d") }}
          </li>
        </ul>
        <p class="text-start py-2">
          {{ $t("faq.second.e") }}
        </p>
      </div>
    </div>
    <div class="lg:mt-20 mt-5">
      <Contact></Contact>
      <Footer></Footer>
    </div>
    <WhatsappBtn></WhatsappBtn>
  </div>
</template>
<script setup>
  import { ref, onMounted } from "vue";
  import bgFAQ from "../assets/landing.png";
  import Contact from "./Contact.vue";
  import Footer from "./Footer.vue";
  import WhatsappBtn from "./WhatsappBtn.vue";
  import Navbar from "./Navbar.vue";
  import { useHead } from "@vueuse/head";

  const bg_photo = ref(bgFAQ);

  const isLoaded = ref(false);

  useHead({
    title:
      "Frequently Asked Questions - Psicóloga - Terapia Virtual - Terapia Remota - Psychologist - Virtual terapy - Remote Terapy - Online",
    meta: [
      {
        name: "Preguntas Frecuentes - Lic. Vanesa Carlotto Miranda - Psicóloga - Terapia Virtual - Terapia Remota - Online",
        content:
          "FAQ. Sitio web oficial de la Lic. Vanesa Carlotto Miranda, psicóloga especializada en atención remota. Encuentra información sobre su enfoque terapéutico, servicios y formas de contacto.",
        lang: "es",
      },
      {
        name: "Frequently Asked Questions. Lic. Vanesa Carlotto Miranda - Psychologist - Virtual terapy - Remote Terapy - Online",
        content:
          "FAQ. Official website of Lic. Vanesa Carlotto Miranda, a psychologist specializing in remote therapy. Find information about her therapeutic approach, services, and contact options.",
        lang: "en",
      },
    ],
  });

  onMounted(() => {
    isLoaded.value = true;
  });
</script>
