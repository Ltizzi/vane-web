<template lang="">
  <Navbar :load="isLoaded" />
  <div
    class="flex flex-col gap-7 font-playfair lg:h-auto 2xl:h-auto pt-0 lg:text-xl text-lg relative 2xl:my-40 text-base-100 mt-10 caret-transparent"
  >
    <img
      :src="bg"
      class="absolute opacity-20 top-0 lg:h-auto 2xl:h-auto 2xl:-top-60 2xl:object-fill h-full lg:w-full object-cover lg:object-contain -z-10"
      alt=""
    />
    <!-- <img
      :src="border"
      alt=""
      class="w-3/5 h-16 object-cover opacity-35 mx-auto"
    /> -->
    <div
      class="lg:mx-24 mx-5 px-5 flex flex-col gap-10 py-10 indent-0 leading-10 font-poppins"
    >
      <div
        class="flex flex-col lg:flex-row gap-5 justify-center text-start my-auto"
      >
        <div class="avatar lg:hidden">
          <div class="lg:w-40 lg:h-auto size-max rounded-md mx-auto">
            <img
              :src="avatar"
              alt="Foto de la licenciada en Psicología Vanesa Carlotto Miranda"
            />
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <p class="mt-10">
            {{ $t("about.first") }}
          </p>

          <p class="hidden lg:flex">
            {{ $t("about.second") }}
          </p>
        </div>

        <div class="avatar hidden lg:flex">
          <div
            class="lg:w-80 lg:object-fill lg:h-auto mt-10 w-14 h-14 rounded-xl"
          >
            <img :src="avatar" alt="" />
          </div>
        </div>
      </div>

      <p class="lg:hidden">
        {{ $t("about.second") }}
      </p>
      <p>
        {{ $t("about.third") }}
      </p>
    </div>

    <
  </div>
  <Contact />
  <Footer />
  <WhatsappBtn />
</template>
<script setup>
  import { ref, onMounted } from "vue";
  import borderImg from "../assets/border-t-alt.svg";
  import Contact from "./Contact.vue";
  import Footer from "./Footer.vue";
  import bgImg from "../assets/landing.png";
  import avatarImg from "../assets/profile.jpg";
  import WhatsappBtn from "./WhatsappBtn.vue";
  import Navbar from "./Navbar.vue";

  const border = ref(borderImg);
  const bg = ref(bgImg);

  const avatar = ref(avatarImg);

  const isLoaded = ref(false);

  onMounted(() => {
    isLoaded.value = true;
  });
</script>
