<template lang="">
  <div class="relative lg:pb-40">
    <img
      :src="bg"
      class="absolute top-0 opacity-25 h-full lg:h-full lg:w-full object-cover lg:object-cover"
      alt=""
    />
    <div
      class="flex flex-col gap-10 justify-start font-playfair lg:mx-20 pt-10 relative"
    >
      <h1 class="text-6xl text-center">Tratamientos</h1>
      <img
        :src="border"
        class="absolute top-32 lg:size-96 size-64 left-2 lg:left-0"
        alt=""
      />
      <div class="lg:mx-24 mx-10 mt-28">
        <ul class="flex flex-col lg:gap-7 gap-12">
          <li class="flex flex-col gap-5">
            <h2 class="text-4xl font-semibold">Terapia individual Adultos</h2>
            <p class="text-xl">
              Trabajo con cada paciente adulto la problemática actual que
              presenta teniendo en cuenta el contexto y su historia. El
              tratamiento se orienta a la toma de decisiones buscando con el
              paciente adulto la resolución de conflictos comprendiendo para
              ello los motivos
            </p>
          </li>
          <li class="flex flex-col gap-5">
            <h2 class="text-4xl font-semibold">
              Terapia individual Adolescentes
            </h2>
            <p class="text-xl">
              Acompaño a los adolescentes a superar sus dificultades
              emocionales, comportamentales y sociales. Se busca desarrollar las
              habilidades necesarias para afrontar los retos de esta etapa de la
              vida hacia el tránsito hacia la adultez. Los adolescentes que
              reciben tratamiento pueden mejorar su estado de ánimo, reducir sus
              síntomas, desarrollar habilidades de afrontamiento y mejorar sus
              relaciones con otras personas.
            </p>
          </li>
          <li class="flex flex-col gap-5">
            <h2 class="text-4xl font-semibold">
              Orientación psicológica a familiares que acompañan a personas con
              discapacidad
            </h2>
            <div class="flex flex-col gap-5">
              <p class="text-xl">
                Los años de trayectoria en el tratamiento a personas con
                discapacidad me permite proporcionar apoyo emocional,
                orientación y estrategias para ayudar a los familiares a
                enfrentar los desafíos asociados. Es así que acompaño a las
                familias a:
              </p>
              <ul class="text-xl lg:indent-3 lg:gap-5 gap-10 flex flex-col">
                <li>
                  Procesar sus emociones relacionadas con la discapacidad de su
                  ser querido, como la tristeza, la frustración o la
                  preocupación.
                </li>
                <li>
                  Informar a los familiares sobre la discapacidad en cuestión,
                  sus implicaciones y cómo pueden apoyar mejor a su familiar.
                </li>
                <li>
                  Enseñar técnicas para manejar el estrés, la ansiedad y las
                  demandas adicionales que pueden surgir debido a la
                  discapacidad.
                </li>
                <li>
                  Facilitar la comunicación efectiva entre los miembros de la
                  familia y ayudar a resolver conflictos que puedan surgir en
                  relación con la discapacidad.
                </li>
                <li>
                  Conectar a los familiares con otros profesionales, servicios o
                  recursos comunitarios que puedan beneficiar tanto al miembro
                  de la familia con discapacidad como a los cuidadores.
                </li>
                <li>
                  Ayudar a las familias a planificar para el futuro, incluyendo
                  decisiones sobre cuidado a largo plazo, educación y apoyo
                  continuo.
                </li>
              </ul>
            </div>
          </li>
          <li class="flex flex-col gap-5">
            <h2 class="text-4xl font-semibold">
              Supervisión a profesionales que trabajan con personas con
              discapacidad
            </h2>
            <p class="text-xl">
              Abordo aspectos técnicos, habilidades y recursos de los
              profesionales (psicólogo, acompañante terapéutico, docente, entre
              otros) para aumentar la eficacia en la evaluación e intervención
              que realizan en su labor profesional. implica varios aspectos
              clave:
            </p>
            <ul class="flex flex-col gap-3 text-xl lg:mx-10 mx-0 pb-20 lg:pb-0">
              <li>Técnicas de comunicación efectiva y adaptativa.</li>
              <li>
                Entrenamiento en métodos de intervención y apoyo personalizado.
                Capacitación en el uso de adecuaciones de acceso y de
                aprendizaje. Enseñanza de estrategias para fomentar la autonomía
                y la inclusión social pensando en resolver las barreras para la
                inclusión. Apoyo emocional y estrategias para manejar el estrés
                y la fatiga profesional.
              </li>
              <li>
                Adaptación de estrategias según las necesidades individuales de
                cada persona con discapacidad, fomentando la flexibilidad para
                ajustar métodos de trabajo según el progreso y cambios en las
                condiciones de las personas.
              </li>
              <li>
                Acompaño a que los profesionales que trabajan con personas con
                discapacidad puedan ofrecer un apoyo integral y de calidad,
                promoviendo su bienestar y desarrollo máximo.
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <img
        :src="border"
        class="absolute 2xl:-bottom-32 lg:-bottom-20 2xl:size-96 bottom-0 size-64 right-0 rotate-180"
        alt=""
      />
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
  import bgImg from "../assets/sunset.jpg";
  import Contact from "./Contact.vue";
  import Footer from "./Footer.vue";
  import WhatsappBtn from "./WhatsappBtn.vue";

  const border = ref(borderImg);
  const bg = ref(bgImg);
</script>
