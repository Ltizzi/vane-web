<template lang="">
  <div class="bg-stone-600 flex-col lg:flex-row flex w-full lg:h-auto">
    <div
      class="text-white text-6xl py-16 font-perandory font-semibold text-center flex flex-col gap-5 justify-center lg:hidden"
    >
      <h1>Contacto</h1>
      <div class="flex flex-col text-6xl font-perandory">
        <h3 class="text-2xl italic">Reserva tu sesión</h3>
        <!-- <h3 class="text-2xl italic">haz una consulta</h3> -->
      </div>
    </div>
    <div class="lg:w-1/2 bg-white">
      <div
        class="w-96 py-7 px-5 bg-slate-50-content mx-auto my-20 flex flex-col gap-4 justify-center shadow-2xl shadow-secondary-content"
      >
        <input
          type="text"
          placeholder="Nombre"
          class="input w-full focus:input-warning max-w-xs rounded-none bg-secondary-content bg-opacity-20 mx-auto text-white font-playfair text-lg placeholder:text-white"
        />
        <input
          type="text"
          placeholder="Teléfono"
          class="input focus:input-warning rounded-none w-full max-w-xs bg-secondary-content bg-opacity-20 mx-auto text-white font-playfair text-lg placeholder:text-white"
        />

        <input
          type="text"
          placeholder="E-mail"
          class="input focus:input-warning rounded-none w-full max-w-xs bg-secondary-content bg-opacity-20 mx-auto text-white font-playfair text-lg placeholder:text-white"
        />

        <textarea
          class="textarea focus:textarea-warning rounded-none bg-secondary-content bg-opacity-30 mx-2 text-white font-playfair text-lg placeholder:text-white"
          placeholder="Mensaje"
          rows="7"
        ></textarea>
        <button
          class="btn btn-accent bg-secondary-content rounded-none text-white"
        >
          Envíar
        </button>
      </div>
    </div>

    <div
      class="text-orange-50 lg:text-6xl font-perandory font-semibold text-center lg:flex flex-col gap-5 justify-center hidden md:w-1/2"
    >
      <h1>Contacto</h1>
      <div class="flex flex-col text-6xl">
        <h3 class="text-2xl italic">Reserva tu sesión</h3>
        <!-- <h3 class="text-2xl italic">haz una consulta</h3> -->
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang=""></style>
