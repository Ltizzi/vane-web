<template lang="">
  <Navbar />
  <div
    class="flex flex-col gap-7 font-playfair lg:h-auto 2xl:h-auto pt-0 lg:text-xl text-lg relative 2xl:my-40"
  >
    <img
      :src="bg"
      class="absolute opacity-15 top-0 lg:h-auto 2xl:h-screen 2xl:-top-60 2xl:object-fill h-full lg:w-full object-cover lg:object-contain -z-50"
      alt=""
    />
    <!-- <img
      :src="border"
      alt=""
      class="w-3/5 h-16 object-cover opacity-35 mx-auto"
    /> -->
    <div
      class="lg:mx-24 mx-5 px-5 flex flex-col gap-10 py-10 indent-0 leading-10 text-justify font-poppins"
    >
      <div
        class="flex flex-col lg:flex-row gap-5 justify-center text-start my-auto"
      >
        <div class="avatar lg:hidden">
          <div class="lg:w-40 lg:h-auto size-max rounded-md mx-auto">
            <img :src="avatar" alt="" />
          </div>
        </div>
        <div class="flex flex-col gap-5">
          <p class="mt-10">
            Soy Vanesa Carlotto Miranda, Licenciada en Psicología de la Facultad
            de Ciencias Empresariales y Sociales (UCES), MN.56669 MP.74831.
            Profesora en Educación Especial con Orientación en Discapacidad
            Mental en el Instituto Superior del Profesorado en Educación
            Especial (Ispee). Especialista en Psicología Clínica con Niños y
            Adolescentes de la Universidad de Buenos Aires (UBA).
          </p>

          <p class="hidden lg:flex">
            Cuento con más de una década de experiencia en el ámbito de la salud
            mental, brindando atención a personas de todas las edades que
            atraviesan dificultades emocionales y psicológicas. En mi práctica
            profesional busco crear un espacio seguro y confidencial donde mis
            pacientes puedan explorar sus pensamientos, sentimientos y
            experiencias trabajando desarrollando juntos estrategias efectivas
            para afrontar los desafíos que enfrentan.
          </p>
        </div>

        <div class="avatar hidden lg:flex">
          <div
            class="lg:w-80 lg:object-fill lg:h-auto mt-10 w-14 h-14 rounded-xl"
          >
            <img :src="avatar" alt="" />
          </div>
        </div>
      </div>

      <p class="lg:hidden">
        Cuento con más de una década de experiencia en el ámbito de la salud
        mental, brindando atención a personas de todas las edades que atraviesan
        dificultades emocionales y psicológicas. En mi práctica profesional
        busco crear un espacio seguro y confidencial donde mis pacientes puedan
        explorar sus pensamientos, sentimientos y experiencias desarrollando
        juntos estrategias efectivas para afrontar los desafíos que enfrentan.
      </p>
      <p>
        Creo en la capacidad de cada persona para crecer y mejorar su calidad de
        vida. Mi compromiso es acompañar a mis pacientes en este proceso,
        brindándoles las herramientas y el apoyo necesarios para alcanzar su
        bienestar emocional.
      </p>
    </div>

    <
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
  import avatarImg from "../assets/profile.jpg";
  import WhatsappBtn from "./WhatsappBtn.vue";
  import Navbar from "./Navbar.vue";

  const border = ref(borderImg);
  const bg = ref(bgImg);

  const avatar = ref(avatarImg);
</script>
