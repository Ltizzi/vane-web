<template lang="">
  <div class="bg-secondary 2xl:flex-row flex w-full 2xl:h-auto">
    <div class="w-1/2 bg-primary">
      <div
        class="w-96 bg-opacity-95 py-7 px-5 bg-primary-content mx-auto my-20 rounded-xl flex flex-col gap-4 justify-center shadow-2xl shadow-secondary-content"
      >
        <input
          type="text"
          placeholder="Nombre"
          class="input input-bordered input-warning w-full max-w-xs bg-secondary-content bg-opacity-20 mx-auto text-white font-playfair text-xl placeholder:text-white"
        />
        <input
          type="text"
          placeholder="Teléfono"
          class="input input-bordered input-warning w-full max-w-xs bg-secondary-content bg-opacity-20 mx-auto text-white font-playfair text-xl placeholder:text-white"
        />

        <input
          type="text"
          placeholder="E-mail"
          class="input input-bordered input-warning w-full max-w-xs bg-secondary-content bg-opacity-20 mx-auto text-white font-playfair text-xl placeholder:text-white"
        />

        <textarea
          class="textarea textarea-warning bg-secondary-content bg-opacity-30 mx-2 text-white font-playfair text-xl placeholder:text-white"
          placeholder="Mensaje"
          rows="7"
        ></textarea>
        <button class="btn btn-accent bg-secondary-content text-white">
          Envíar
        </button>
      </div>
    </div>

    <div
      class="text-white 2xl:text-6xl font-playfair font-semibold 2xl:w-1/2 text-center flex flex-col gap-5 justify-center"
    >
      <h1>Contacto</h1>
      <div class="flex flex-col text-6xl">
        <h3 class="text-2xl italic">Reserva tu sesión,</h3>
        <h3 class="text-2xl italic">haz una consulta</h3>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style lang=""></style>
