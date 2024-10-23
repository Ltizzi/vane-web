<template lang="">
  <div
    class="mx-auto w-screen h-screen mt-0 lg:mt-0"
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
        :class="[
          state.first
            ? 'translate-x-0 opacity-100'
            : '-translate-x-3/4 opacity-0',
          'text-white font-perandory text-4xl mx-auto w-full lg:text-6xl 2xl:text-8xl lg:w-2/3 transition-all  ease-in-out',
          `duration-500`,
        ]"
      >
        {{ $t("landing.title") }}
        <!-- Lic. Vanesa Carlotto Miranda -->
      </h1>
      <h1
        :class="[
          state.second
            ? 'translate-y-0 opacity-100'
            : 'translate-y-40 opacity-0',
          'text-white italic font-perandory text-3xl ml-32 -mt-5 text-center w-full lg:text-5xl transition-all  ease-in-out',
          `duration-700`,
        ]"
      >
        {{ $t("landing.subtitle") }}
        <!-- Psicóloga -->
      </h1>
      <button
        :class="[
          state.third ? 'opacity-100' : 'opacity-0',
          'btn bg-info bg-opacity-90 text-base-100 w-24 mx-auto rounded-none border-4 border-accent border-transparent font-playfair text-lg transition-all  ease-in-out',
          `duration-700`,
        ]"
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
  import { onMounted, ref, reactive, onBeforeMount } from "vue";

  const roomPhoto = ref(roomPhotoSRC);

  const state = reactive({
    imgLoaded: false,
    first: false,
    second: false,
    third: false,
    duration: 0,
  });

  const emit = defineEmits(["scroll", "animLoaded"]);

  function scrollToContact() {
    emit("scroll");
  }

  function playAnim(anim, duration) {
    state.duration = duration;
    switch (anim) {
      case "first":
        setTimeout(() => {
          state.first = true;
        }, duration);
      case "second":
        setTimeout(() => {
          state.second = true;
        }, duration);
      case "third":
        setTimeout(() => {
          state.third = true;
          emit("animLoaded");
        }, duration);
    }
  }

  onMounted(() => {
    setTimeout(() => {
      playAnim("first", 200);
      if (state.first) playAnim("second", 300);
      if (state.second) playAnim("third", 400);
    }, 1000);
  });
</script>
