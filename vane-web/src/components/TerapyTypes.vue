<template lang="">
  <Navbar />

  <div class="relative lg:pb-40">
    <img
      :src="bg"
      class="absolute top-0 opacity-15 h-full lg:h-full lg:w-full object-cover lg:object-cover"
      alt=""
    />
    <div
      class="flex flex-col gap-10 justify-start font-poppins lg:mx-20 pt-10 relative"
    >
      <div class="lg:mx-24 mx-10 mt-2">
        <ul class="flex flex-col lg:gap-7 gap-12 text-start">
          <li class="flex flex-col gap-5">
            <h2 class="lg:text-4xl text-2xl font-semibold">
              {{ $t("terapies.first.title") }}
            </h2>
            <p class="lg:text-xl text-lg">
              {{ $t("terapies.first.text") }}
            </p>
          </li>
          <li class="flex flex-col gap-5">
            <h2 class="lg:text-4xl text-2xl font-semibold">
              {{ $t("terapies.second.title") }}
            </h2>
            <p class="lg:text-xl text-lg">
              {{ $t("terapies.second.text") }}
            </p>
          </li>
          <li class="flex flex-col gap-5">
            <h2 class="lg:text-4xl text-2xl font-semibold">
              {{ $t("terapies.third.title") }}
            </h2>
            <div class="flex flex-col gap-5">
              <p class="lg:text-xl text-lg">
                {{ $t("terapies.third.text") }}
              </p>
              <ul
                class="text-xl lg:gap-5 gap-10 lg:mx-10 lg:ml-7 ml-5 list-disc flex flex-col"
              >
                <li class="lg:text-xl text-lg">
                  {{ $t("terapies.third.list.a") }}
                </li>
                <li class="lg:text-xl text-lg">
                  {{ $t("terapies.third.list.b") }}
                </li>
                <li class="lg:text-xl text-lg">
                  {{ $t("terapies.third.list.c") }}
                </li>
                <li class="lg:text-xl text-lg">
                  {{ $t("terapies.third.list.d") }}
                </li>
                <li class="lg:text-xl text-lg">
                  {{ $t("terapies.third.list.e") }}
                </li>
                <li class="lg:text-xl text-lg">
                  {{ $t("terapies.third.list.f") }}
                </li>
              </ul>
            </div>
          </li>
          <li class="flex flex-col gap-5">
            <h2 class="lg:text-4xl text-2xl font-semibold">
              Supervisión a profesionales que trabajan con personas con
              discapacidad
            </h2>
            <p class="lg:text-xl text-lg text-justify">
              <!-- Abordo aspectos técnicos, habilidades y recursos de los
              profesionales (psicólogo, acompañante terapéutico, docente, entre
              otros) para aumentar la eficacia en la evaluación e intervención
              que realizan en su labor profesional. implica varios aspectos
              clave: -->
              Abordo aspectos técnicos, habilidades y recursos de los
              profesionales (psicólogo, acompañante terapéutico, docente, entre
              otros) para aumentar la eficacia en la evaluación e intervención
              que realizan en su labor profesional. Implica varios aspectos
              clave:
            </p>
            <ul
              class="flex flex-col gap-3 text-xl lg:mx-10 list-disc lg:ml-7 ml-5 pb-20 lg:pb-0"
            >
              <li class="lg:text-xl text-lg text-justify">
                Técnicas de comunicación efectiva y adaptativa.
              </li>
              <li class="lg:text-xl text-lg text-justify">
                <!-- Entrenamiento en métodos de intervención y apoyo personalizado.
                Capacitación en el uso de adecuaciones de acceso y de
                aprendizaje. Enseñanza de estrategias para fomentar la autonomía
                y la inclusión social pensando en resolver las barreras para la
                inclusión. Apoyo emocional y estrategias para manejar el estrés
                y la fatiga profesional. -->
                Entrenamiento en métodos de intervención y apoyo personalizado.
                Capacitación en el uso de adecuaciones de acceso y de
                aprendizaje.
              </li>
              <li class="lg:text-xl text-lg text-justify">
                Enseñanza de estrategias para fomentar la autonomía y la
                inclusión social pensando en resolver las barreras para la
                inclusión.
              </li>
              <li class="lg:text-xl text-lg text-justify">
                Apoyo emocional y estrategias para manejar el estrés y la fatiga
                profesional.
              </li>

              <li class="lg:text-xl text-lg text-justify">
                <!-- Adaptación de estrategias según las necesidades individuales de
                cada persona con discapacidad, fomentando la flexibilidad para
                ajustar métodos de trabajo según el progreso y cambios en las
                condiciones de las personas. -->
                Adaptación de estrategias según las necesidades individuales de
                cada persona con discapacidad, fomentando la flexibilidad para
                ajustar métodos de trabajo según el progreso y cambios en las
                condiciones de las personas.
              </li>
              <li class="lg:text-xl text-lg text-justify">
                <!-- Acompaño a que los profesionales que trabajan con personas con
                discapacidad puedan ofrecer un apoyo integral y de calidad,
                promoviendo su bienestar y desarrollo máximo. -->
                En síntesis, acompaño a que los profesionales que trabajan con
                personas con discapacidad puedan ofrecer un apoyo integral y de
                calidad, promoviendo su bienestar y desarrollo máximo.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <!-- <img
        :src="border"
        class="absolute 2xl:-bottom-32 lg:-bottom-20 2xl:size-96 bottom-0 size-64 right-0 rotate-180"
        alt=""
      /> -->
    </div>
  </div>
  <div class="lg:mt-0">
    <Contact />
    <Footer />
  </div>
  <WhatsappBtn />
</template>
<script setup>
  import { ref } from "vue";
  import borderImg from "../assets/border-corner.svg";
  import bgImg from "../assets/landing.jpg";
  import Contact from "./Contact.vue";
  import Footer from "./Footer.vue";
  import WhatsappBtn from "./WhatsappBtn.vue";
  import Navbar from "./Navbar.vue";

  const border = ref(borderImg);
  const bg = ref(bgImg);
</script>
