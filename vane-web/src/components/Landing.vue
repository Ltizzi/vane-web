<template lang="">
  <div
    class="mx-auto w-screen h-screen mt-10 lg:mt-0"
    :style="{
      backgroundImage: ` url(${roomPhoto})`,
      backgroundSize: 'cover',
      backgroundRepeate: 'no-repeat',
      height: 'screen',
      width: 'screen',
      backgroundPositionX: 'center',
    }"
  >
    <div
      class="bg-black bg-opacity-50 w-full text-center h-full flex flex-col justify-center gap-5"
    >
      <h1
        class="text-white font-perandory text-4xl mx-auto w-full lg:text-6xl 2xl:text-8xl lg:w-2/3"
      >
        {{ $t("landing.title") }}
        <!-- Lic. Vanesa Carlotto Miranda -->
      </h1>
      <h1
        class="text-white italic font-perandory text-3xl ml-32 -mt-5 text-center w-full lg:text-5xl"
      >
        {{ $t("landing.subtitle") }}
        <!-- Psicóloga -->
      </h1>
      <button
        class="btn btn-accent text-white w-24 mx-auto rounded-none border-4 border-accent border-transparent font-playfair text-lg"
        @click="scrollToContact"
      >
        {{ $t("landing.btn") }}
        <!-- Contacto -->
      </button>
    </div>
  </div>
</template>
<script setup>
  import roomPhotoSRC from "../assets/landing.png";
  import { ref } from "vue";

  const roomPhoto = ref(roomPhotoSRC);

  const emit = defineEmits(["scroll"]);

  function scrollToContact() {
    emit("scroll");
  }
</script>
