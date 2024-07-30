<template lang="">
  <div class="grid grid-cols-2 gap-0 2xl:w-full 2xl:h-auto mt-10">
    <div class="h-full bg-secondary bg-opacity-85">
      <div class="text-center align-middle my-44">
        <!--    @click="goTo('about')" -->
        <router-link to="/about">
          <button
            class="btn btn-outline text-white align-middle font-playfair capitalize text-2xl hover:bg-secondary-content"
          >
            Sobre mí
          </button>
        </router-link>
      </div>
    </div>
    <div class="h-full bg-accent bg-opacity-85">
      <div class="text-center align-middle my-44">
        <router-link to="/info">
          <button
            class="btn btn-outline text-white align-middle font-playfair capitalize text-2xl hover:bg-content"
          >
            Terapias
          </button>
        </router-link>
      </div>
    </div>
    <div class="col-span-2 h-full bg-primary bg-opacity-85">
      <div class="text-center align-middle my-44">
        <button
          class="btn btn-outline text-white align-middle font-playfair capitalize text-2xl hover:bg-secondary-content"
          @click="goTo('faq')"
        >
          Preguntas frecuentes
        </button>
      </div>
    </div>
  </div>
  <div class="h-auto text-center">
    <h1
      class="text-primary relative font-semibold text-6xl font-playfair w-2/3 italic mx-auto my-96 flex flex-row align-middle"
    >
      <!-- <img :src="quoteL" class="w-10 absolute" alt="" /> -->
      "Porque conectarnos (en el tiempo) más allá de la distancia es posible"
      <!-- <img :src="quoteR" class="w-10 absolute right-0" alt="" /> -->
    </h1>
  </div>
</template>
<script setup>
  import { useRouter } from "vue-router";
  // import quoteRsvg from "../assets/quote-r.svg";
  // import quoteLsvg from "../assets/quote-l.svg";
  // import { ref } from "vue";

  const router = useRouter();

  // const quoteR = ref(quoteRsvg);
  // const quoteL = ref(quoteLsvg);

  function goTo(route) {
    switch (route) {
      case "faq":
        router.push("/faq");
        break;
      case "about":
        router.push("/about");
    }
  }
</script>
