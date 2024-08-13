<template lang="">
  <div
    class="mx-auto w-screen h-screen mt-10 lg:mt-0"
    :style="{
      backgroundImage: ` url(${roomPhoto})`,
      backgroundSize: 'cover ',
      backgroundRepeate: 'no-repeat',
      height: 'screen',
      width: 'screen',
    }"
  >
    <div
      class="bg-black bg-opacity-50 w-full text-center h-full flex flex-col justify-center gap-5"
    >
      <h1
        class="text-white font-bold font-playfair text-4xl mx-auto w-full lg:text-6xl lg:w-2/3"
      >
        Lic. Vanesa Carlotto Miranda
      </h1>
      <h1
        class="text-white font-semibold italic font-playfair text-3xl ml-32 -mt-5 text-center w-full lg:text-5xl"
      >
        Psicóloga
      </h1>
      <button
        class="btn btn-accent text-white w-20 mx-auto rounded-none border-4 border-accent border-transparent"
      >
        Contacto
      </button>
    </div>
  </div>
  <!-- <div
    class="flex flex-col justify-center mx-10 -mt-10 lg:mt-10 font-serif h-screen"
  >
    <div
      class="bg-stone-300 py-5 px-34 text-stone-900 2xl:ml-20 2xl:flex 2xl:flex-col 2xl:h-3/4 2xl:pt-12 2xl:relative 2xl:w-8/12 2xl:pl-14 rounded-xl shadow-xl shadow-neutral"
    >
      <h1 class="text-3xl text-center 2xl:text-start 2xl:text-2xl">
        Lorem ipsum dolor sit amet
      </h1>
      <img
        :src="roomPhoto"
        class="mt-5 w-full lg:w-4/12 lg:right-0 2xl:w-8/12 2xl:left-2/3 2xl:top-16 rounded-xl"
        alt=""
      />
      <button
        class="hidden btn btn-active btn-accent text-lg text-white 2xl:inline absolute left-2/3 bottom-20 w-8/12 shadow-lg shadow-neutral duration-150 transition-all ease-in-out hover:bg-black"
      >
        Contacto
      </button>
      <h2 class="text-2xl absolute top-32 w-4/5 mx-5 italic 2xl:hidden">
        Licenciada Vanesa Carloto Miranda
        <span class="underline">Psicóloga</span>
      </h2>
      <h2
        class="hidden 2xl:inline 2xl:top-32 absolute italic 2xl:mt-12 2xl:text-5xl font-normal 2xl:w-2/4"
      >
        Licenciada
        <span class="absolute top-14 left-10">Vanesa Carlotto Miranda,</span>
        <span class="underline 2xl:absolute 2xl:top-28 2xl:right-0"
          >Psicóloga</span
        >
      </h2>

      <p
        class="hidden absolute bottom-32 w-3/5 mx-3 left-5 text-xl font-extrabold my-5 text-center font-playfair text-black 2xl:inline"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>

      <h3
        class="hidden 2xl:bottom-10 2xl:absolute 2xl:w-2/4 2xl:ml-10 2xl:text-center 2xl:inline"
      >
        PSICOTERAPIA VIRTUAL | ADOLESCENTES Y ADULTOS | FAMILIAS Y PROFESIONALES
        DE PERSONAS CON DISCAPACIDAD
      </h3>
    </div>
    <button
      class="btn btn-active btn-accent mt-96 py-2 text-lg text-white 2xl:hidden"
    >
      Contacto
    </button>

    <p class="my-5 text-center font-montserrat text-black 2xl:hidden">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div> -->
</template>
<script setup>
  import roomPhotoSRC from "../assets/ph-room.png";
  import { ref } from "vue";

  const roomPhoto = ref(roomPhotoSRC);
</script>
