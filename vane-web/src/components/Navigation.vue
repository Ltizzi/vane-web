<template lang="">
  <div
    class="grid grid-cols-2 gap-0 2xl:w-full lg:h-auto 2xl:h-auto mt-0 caret-transparent"
  >
    <div class="h-full bg-primary">
      <div class="text-center align-middle my-44">
        <!--    @click="goTo('about')" -->
        <router-link to="/about">
          <button
            class="btn btn-base-100 text-white align-middle font-playfair capitalize text-2xl rounded-none border-4 opacity-85 border-accent border-transparent hover:border-secondary hover:bg-base-100 hover:bg-opacity-40"
          >
            {{ $t("landing.navigation.btn_about") }}
            <!-- Sobre mí -->
          </button>
        </router-link>
      </div>
    </div>
    <div class="h-full bg-accent">
      <div class="text-center align-middle my-44">
        <router-link to="/info">
          <button
            class="btn btn-base-100 text-white align-middle font-playfair capitalize text-2xl rounded-none border-4 opacity-85 border-accent border-transparent hover:border-secondary hover:bg-base-100 hover:bg-opacity-40"
          >
            {{ $t("landing.navigation.btn_terapies") }}
            <!-- Terapias -->
          </button>
        </router-link>
      </div>
    </div>
    <div class="col-span-2 h-full bg-secondary">
      <div class="text-center align-middle my-44">
        <button
          class="btn btn-base-100 text-white align-middle font-playfair capitalize text-2xl hover:bg-base-100 opacity-85 hover:bg-opacity-40 rounded-none border-4 border-accent border-transparent hover:border-secondary"
          @click="goTo('faq')"
        >
          {{ $t("landing.navigation.btn_faq") }}
          <!-- Preguntas frecuentes -->
        </button>
      </div>
    </div>
  </div>
  <div class="h-auto text-center flex justify-center bg-neutral">
    <h1
      class="text-stone-800 text-7xl font-yesteryear italic mx-auto my-96 flex flex-row align-middle opacity-85"
    >
      "{{ $t("landing.phrase") }}"
      <!-- "Porque conectarnos más allá de la distancia es posible" -->
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
