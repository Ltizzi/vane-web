<template lang="">
  <Navbar :load="isLoaded" />

  <div
    class="relative lg:pb-40 bg-neutral text-base-100 2xl:mt-16 lg:mt-12 mt-12 caret-transparent"
  >
    <img
      :src="bg"
      class="absolute top-0 opacity-10 h-full lg:h-full lg:w-full object-cover lg:object-cover"
      alt=""
    />
    <div
      class="flex flex-col gap-10 justify-start font-poppins lg:mx-20 pt-10 relative"
    >
      <div class="lg:mx-24 mx-10 mt-2 leading-relaxed">
        <ul class="flex flex-col lg:gap-12 gap-12 text-start">
          <li class="flex flex-col gap-5">
            <h2 class="lg:text-4xl text-2xl font-semibold opacity-80 mt-2">
              {{ $t("terapies.first.title") }}
            </h2>
            <p class="lg:text-xl text-lg opacity-75">
              {{ $t("terapies.first.text") }}
            </p>
          </li>
          <li class="flex flex-col gap-5">
            <h2 class="lg:text-4xl text-2xl font-semibold opacity-80">
              {{ $t("terapies.second.title") }}
            </h2>
            <p class="lg:text-xl text-lg opacity-75">
              {{ $t("terapies.second.text") }}
            </p>
          </li>
          <li class="flex flex-col gap-5">
            <h2 class="lg:text-4xl text-2xl font-semibold opacity-80">
              {{ $t("terapies.third.title") }}
            </h2>
            <div class="flex flex-col gap-5">
              <p class="lg:text-xl text-lg opacity-75">
                {{ $t("terapies.third.text") }}
              </p>
              <ul
                class="text-xl lg:gap-5 gap-10 lg:mx-10 lg:ml-7 ml-5 list-disc flex flex-col opacity-75"
              >
                <li class="lg:text-xl text-lg">
                  {{ $t("terapies.third.list.a") }}
                </li>
                <li class="lg:text-xl text-lg">
                  {{ $t("terapies.third.list.b") }}
                </li>
                <li class="lg:text-xl text-lg">
                  {{ $t("terapies.third.list.c") }}
                </li>
                <li class="lg:text-xl text-lg">
                  {{ $t("terapies.third.list.d") }}
                </li>
                <li class="lg:text-xl text-lg">
                  {{ $t("terapies.third.list.e") }}
                </li>
                <li class="lg:text-xl text-lg">
                  {{ $t("terapies.third.list.f") }}
                </li>
              </ul>
            </div>
          </li>
          <li class="flex flex-col gap-5 opacity-75">
            <h2 class="lg:text-4xl text-2xl font-semibold opacity-80">
              {{ $t("terapies.fourth.title") }}
            </h2>
            <p class="lg:text-xl text-lg text-start">
              {{ $t("terapies.fourth.text") }}
            </p>
            <ul
              class="flex flex-col gap-3 text-xl lg:mx-10 list-disc lg:ml-7 ml-5 pb-20 lg:pb-0"
            >
              <li class="lg:text-xl text-lg text-start">
                {{ $t("terapies.fourth.list.a") }}
              </li>
              <li class="lg:text-xl text-lg text-start">
                {{ $t("terapies.fourth.list.b") }}
              </li>
              <li class="lg:text-xl text-lg text-start">
                {{ $t("terapies.fourth.list.c") }}
              </li>
              <li class="lg:text-xl text-lg text-start">
                {{ $t("terapies.fourth.list.d") }}
              </li>

              <li class="lg:text-xl text-lg text-start">
                {{ $t("terapies.fourth.list.e") }}
              </li>
              <li class="lg:text-xl text-lg text-start">
                {{ $t("terapies.fourth.list.f") }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="lg:mt-0">
    <Contact />
    <Footer />
  </div>
  <WhatsappBtn />
</template>
<script setup>
  import { ref, onMounted } from "vue";
  import borderImg from "../assets/border-corner.svg";
  import bgImg from "../assets/landing.jpg";
  import Contact from "./Contact.vue";
  import Footer from "./Footer.vue";
  import WhatsappBtn from "./WhatsappBtn.vue";
  import Navbar from "./Navbar.vue";
  import { useHead } from "@vueuse/head";

  const border = ref(borderImg);
  const bg = ref(bgImg);

  const isLoaded = ref(false);

  useHead({
    title: "Information",
    meta: [
      {
        name: "Información sobre las terapias. Lic. Vanesa Carlotto Miranda - Psicóloga",
        content:
          "Información y detalles sobre el tipo de terapias. Sitio web oficial de la Lic. Vanesa Carlotto Miranda, psicóloga especializada en atención remota. Encuentra información sobre su enfoque terapéutico, servicios y formas de contacto.",
        lang: "es",
      },
      {
        name: "Lic. Vanesa Carlotto Miranda - Psychologist",
        content:
          "Information and details about the type of terapies. Official website of Lic. Vanesa Carlotto Miranda, a psychologist specializing in remote therapy. Find information about her therapeutic approach, services, and contact options.",
        lang: "en",
      },
    ],
  });

  onMounted(() => {
    isLoaded.value = true;
  });
</script>
