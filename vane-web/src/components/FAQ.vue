<template lang="">
  <Navbar />

  <div class="relative font-poppins">
    <img
      :src="bgFAQ"
      alt=""
      class="lg:h-auto hidden lg:flex lg:w-screen lg:object-scale-down absolute top-0 opacity-10"
    />
    <div
      class="flex flex-col justify-start gap-5 lg:mx-20 mx-10 bg-base text-start"
    >
      <h1 class="text-center font-semibold lg:text-5xl text-3xl py-7">
        Preguntas Frecuentes
      </h1>
      <h1 class="lg:text-3xl text-xl font-semibold">
        ¿En qué ayuda la terapia psicológica?
      </h1>
      <p class="lg:text-xl text-lg">
        Contribuye a mejorar la salud mental y el bienestar emocional. A través
        del proceso terapéutico, ayudaré a que las personas puedan abordar y
        superar una variedad de desafíos emocionales y psicológicos. Te acompaño
        en:
      </p>
      <!-- <h1 class="lg:text-2xl text-xl underline">Te acompaño en:</h1> -->
      <ul class="flex flex-col lg:text-xl text-lg gap-6 mx-0 text-start">
        <li>
          El camino del autoconocimiento y crecimiento personal, brindando un
          espacio seguro y confidencial para explorar tus pensamientos,
          emociones y comportamientos. Este autoconocimiento puede llevar a un
          mayor entendimiento de ti mismo y promover el crecimiento personal.
        </li>
        <li>
          Manejar el estrés y la ansiedad, mediante técnicas terapéuticas para
          identificar y gestionar las fuentes de estrés y ansiedad en tu vida,
          enseñándote estrategias efectivas para enfrentarlas y reducir su
          impacto negativo.
        </li>
        <li>
          Mejorar las relaciones personales, enriqueciendo tus habilidades de
          comunicación y relaciones interpersonales, ayudándote a establecer
          límites saludables y a resolver conflictos de manera constructiva.
        </li>
        <li>
          Sanar heridas emocionales y traumas pasados, proporcionando
          herramientas para procesar y liberar el dolor emocional.
        </li>
        <li>
          Desarrollo de habilidades para la vida,construyendo capacidades
          prácticas para enfrentar los desafíos diarios, mejorar la toma de
          decisiones y aumentar tu resiliencia emocional.
        </li>
        <li>
          Aumento de la autoestima, al trabajar en tus pensamientos y creencias
          limitantes, la terapia puede ayudarte a construir una autoimagen más
          positiva y aumentar tu confianza en ti mismo.
        </li>
        <li>
          Apoyo en momentos difíciles, durante transiciones y momentos arduos de
          la vida, tales como pérdidas, rupturas o cambios significativos.
        </li>
        <li>
          En síntesis, invertir en tu salud mental a través de la terapia
          psicológica no solo mejora tu calidad de vida, sino que también te
          capacita para enfrentar el futuro con mayor fortaleza y optimismo.
        </li>
      </ul>

      <!-- <div class="divider divider-secondary"></div> -->

      <h1 class="lg:text-3xl text-2xl font-semibold my-3">
        ¿Por qué elegir tratamiento online?
      </h1>
      <div class="lg:text-xl text-lg text-start">
        <p class="indent-0 text-justify">
          Este tipo de terapia ofrece varias ventajas, como mayor accesibilidad
          para personas en áreas remotas, flexibilidad en horarios de sesión y
          comodidad al recibir tratamiento desde el hogar. Es posible ofrecer
          psicoterapia virtual de manera ética y efectiva, adaptando las
          técnicas y métodos tradicionales al entorno digital para garantizar
          resultados positivos para mis pacientes. Te invito a descubrir las
          ventajas de la psicoterapia virtual:
        </p>

        <ul class="lg:text-xl text-lg flex flex-col gap-6 mx-0 text-start mt-6">
          <li>
            Acceder a tratamiento desde cualquier ubicación geográfica, incluso
            áreas remotas donde los servicios presenciales podrían ser
            limitados.
          </li>
          <li>Ahorra tiempo y reduce el estrés asociado con el transporte.</li>
          <li>
            Facilita la programación de sesiones terapéuticas que se ajusten
            mejor a las agendas ocupadas de hoy en día.
          </li>
          <li>
            Es más fácil iniciar el proceso terapéutico desde la comodidad de su
            hogar, lo que puede reducir la ansiedad inicial asociada con la
            consulta presencial.
          </li>
        </ul>
        <p class="text-start py-2">
          La psicoterapia virtual no solo mejora la accesibilidad y la
          flexibilidad del tratamiento psicológico, sino que también puede hacer
          que la terapia sea más cómoda y menos intimidante para algunas
          personas, ayudando así a superar barreras tradicionales para acceder a
          la atención de salud mental.
        </p>
      </div>
    </div>
    <div class="lg:mt-20 mt-5">
      <Contact></Contact>
      <Footer></Footer>
    </div>
    <WhatsappBtn></WhatsappBtn>
  </div>
</template>
<script setup>
  import { ref } from "vue";
  import bgFAQ from "../assets/bg-hands.png";
  import Contact from "./Contact.vue";
  import Footer from "./Footer.vue";
  import WhatsappBtn from "./WhatsappBtn.vue";
  import Navbar from "./Navbar.vue";

  const bg_photo = ref(bgFAQ);
</script>
