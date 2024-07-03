<template lang="">
  <div class="flex flex-col justify-center mx-10 mt-5 font-serif">
    <div class="bg-stone-300 py-5 px-34 text-stone-900">
      <h1 class="text-3xl text-center">Lorem ipsum dolor sit amet</h1>
      <img :src="roomPhoto" class="absolute left-0 mt-5 w-full" alt="" />
      <h2 class="text-2xl absolute top-32 w-4/5 mx-5 italic">
        Ut enim ad minim veniam, quis ullamco
        <span class="underline">laboris nisi.</span>
      </h2>
    </div>
    <button class="bg-black rounded-md mt-80 py-2 text-lg text-white">
      Lorem ipsum dolor sit
    </button>

    <p class="my-5 text-center">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
  <div class="bg-stone-300 py-5 px-2 mx-2 rounded-md text-center font-serif">
    <h1 class="text-xl mb-5">Lorem Ipsum Dolor</h1>
    <div class="flex flex-col justify-center gap-3 my-2 text-lg">
      <p>Lorem ipsum dolor sit amet,</p>
      <p>consectetur adipiscing elit,</p>
      <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>

    <div class="flex flex-col gap-3 justify-center relative">
      <img
        :src="roomPhoto"
        class="absolute w-full opacity-20 bottom-0"
        alt=""
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <button class="bg-white rounded-md py-3 px-5 w-40 mx-auto">
        LOREM IPSUM DOLOR
      </button>
    </div>
  </div>

  <div
    class="flex flex-col justify-center text-center font-sans gap-12 mx-2 text-lg my-7"
  >
    <div class="flex flex-col justify-center gap-7">
      <h1 class="underline text-xl">Lorem ipsum dolor</h1>
      <p class="mx-5">
        Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="flex flex-col justify-center gap-7">
      <h1 class="underline text-xl">Lorem ipsum dolor</h1>
      <p class="mx-5">
        Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="flex flex-col justify-center gap-7">
      <h1 class="underline text-xl">Lorem ipsum dolor</h1>
      <p class="mx-5">
        Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="flex flex-col justify-center gap-7">
      <h1 class="underline text-xl">Lorem ipsum dolor</h1>
      <p class="mx-5">
        Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="flex flex-col justify-center gap-7">
      <h1 class="underline text-xl">Lorem ipsum dolor</h1>
      <p class="mx-5">
        Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    </div>
    <div class="flex flex-col justify-center gap-7">
      <h1 class="underline text-xl">Lorem ipsum dolor</h1>
      <p class="mx-5">
        Sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.
      </p>
    </div>
  </div>

  <div class="flex flex-col justify-start mx-4">
    <div class="flex flex-col gap-4 mb-5">
      <h1 class="text-3xl">Contacto</h1>
      <h2 class="text-2xl">¿Querés en comenzar terapia?</h2>
      <h2 class="text-xl">Llena el siguiente formulario</h2>
    </div>

    <div>
      <form class="flex flex-col justify-between gap-5">
        <div class="flex flex-row justify-between">
          <div class="flex flex-col">
            <label for="name">Nombre</label>
            <input
              type="text"
              name="name"
              id="name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
          <div class="flex flex-col">
            <label for="">Apellido</label>
            <input
              type="text"
              name=""
              id=""
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
          </div>
        </div>
        <div class="flex flex-col">
          <label for="name">E-mail</label>
          <input
            type="text"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div class="flex flex-col">
          <label for="name">Teléfono</label>
          <input
            type="text"
            name="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          />
        </div>
        <div class="flex flex-col">
          <label for="name">Mensaje</label>
          <textarea
            name=""
            id=""
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          ></textarea>

          <button class="bg-orange-600 text-white rounded-lg py-2 px-3">
            Submit
          </button>
        </div>
      </form>

      <h1 class="my-5 text-lg">Lorem impsum - Leonardo Terlizzi</h1>
    </div>
  </div>
</template>
<script setup>
  import roomPhotoSRC from "../assets/ph-room.png";
  import { ref } from "vue";

  const roomPhoto = ref(roomPhotoSRC);
</script>

<!-- 
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
-->
