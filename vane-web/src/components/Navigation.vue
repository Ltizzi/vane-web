<template lang="">
  <div class="grid grid-cols-2 gap-0 2xl:w-full lg:h-auto 2xl:h-auto mt-0">
    <div class="h-full bg-stone-200 bg-opacity-70">
      <div class="text-center align-middle my-44">
        <!--    @click="goTo('about')" -->
        <router-link to="/about">
          <button
            class="btn btn-accent text-white align-middle font-playfair capitalize text-2xl hover:bg-secondary-content rounded-none border-4 border-accent border-transparent hover:border-secondary-content"
          >
            Sobre mí
          </button>
        </router-link>
      </div>
    </div>
    <div class="h-full bg-stone-400 bg-opacity-70">
      <div class="text-center align-middle my-44">
        <router-link to="/info">
          <button
            class="btn btn-accent text-white align-middle font-playfair capitalize text-2xl hover:bg-secondary-content rounded-none border-4 border-accent border-transparent hover:border-secondary-content"
          >
            Terapias
          </button>
        </router-link>
      </div>
    </div>
    <div class="col-span-2 h-full bg-stone-600 bg-opacity-70">
      <div class="text-center align-middle my-44">
        <button
          class="btn btn-accent text-white align-middle font-playfair capitalize text-2xl hover:bg-secondary-content rounded-none border-4 border-accent border-transparent hover:border-secondary-content"
          @click="goTo('faq')"
        >
          Preguntas frecuentes
        </button>
      </div>
    </div>
  </div>
  <div class="h-auto text-center flex justify-center">
    <h1
      class="text-stone-800 text-7xl font-yesteryear italic mx-auto my-96 flex flex-row align-middle"
    >
      "Porque conectarnos más allá de la distancia es posible"
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
