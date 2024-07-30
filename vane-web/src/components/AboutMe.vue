<template lang="">
  <div
    class="flex flex-col gap-7 font-playfair lg:h-screen pt-24 text-2xl relative"
  >
    <img
      :src="bg"
      class="absolute opacity-25 top-0 lg:h-screen h-full lg:w-screen object-cover"
      alt=""
    />
    <img
      :src="border"
      alt=""
      class="w-3/5 h-16 object-cover opacity-35 mx-auto"
    />
    <div
      class="lg:mx-24 mx-5 px-5 flex flex-col gap-10 py-10 indent-16 leading-10 text-justify"
    >
      <div class="flex flex-col lg:flex-row gap-5 justify-center my-auto">
        <div class="avatar lg:hidden">
          <div class="lg:w-40 lg:h-auto size-28 rounded-full mx-auto">
            <img :src="avatar" alt="" />
          </div>
        </div>
        <p class="mt-10">
          Soy Vanesa Carlotto Miranda, Licenciada en Psicología de la Facultad
          de Ciencias Empresariales y Sociales (UCES), MN.56669 MP.74831.
          Profesora en Educación Especial con Orientación en Discapacidad Mental
          en el Instituto Superior del Profesorado en Educación Especial
          (Ispee). Especialista en Psicología Clínica con Niños y Adolescentes
          de UBA.
        </p>
        <div class="avatar hidden">
          <div class="lg:w-40 lg:h-auto w-14 h-14 rounded-xl">
            <img :src="avatar" alt="" />
          </div>
        </div>
      </div>

      <p>
        Cuento con más de una década de experiencia de experiencia en el ámbito
        de la salud mental, brindando atención a personas de todas las edades
        que atraviesan diversas dificultades emocionales y psicológicas. En mi
        práctica profesional busco crear un espacio seguro y confidencial donde
        mis pacientes puedan explorar sus pensamientos, sentimientos y
        experiencias trabajando juntos para desarrollar estrategias efectivas
        para afrontar los desafíos que enfrentan.
      </p>
      <p>
        Creo en la capacidad de cada persona para crecer y mejorar su calidad de
        vida. Mi compromiso es acompañar a mis pacientes en este proceso,
        brindándoles las herramientas y el apoyo necesarios para alcanzar su
        bienestar emocional.
      </p>
    </div>

    <img
      :src="border"
      alt=""
      class="w-3/5 h-16 object-cover opacity-35 mx-auto"
    />
  </div>
  <Contact />
  <Footer />
  <WhatsappBtn />
</template>
<script setup>
  import { ref } from "vue";
  import borderImg from "../assets/border-t-alt.svg";
  import Contact from "./Contact.vue";
  import Footer from "./Footer.vue";
  import bgImg from "../assets/mountain.png";
  import avatarImg from "../assets/avatar_ph.png";
  import WhatsappBtn from "./WhatsappBtn.vue";

  const border = ref(borderImg);
  const bg = ref(bgImg);

  const avatar = ref(avatarImg);
</script>
