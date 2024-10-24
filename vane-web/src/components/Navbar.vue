<template lang="">
  <div
    :class="[
      state.show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-48',

      'navbar caret-transparent bg-neutral z-50 absolute top-0 text-secondary  transition-all ease-in-out duration-500',
    ]"
  >
    <div class="flex-1">
      <router-link to="/" class="ml-5 lg:ml-14">
        <!-- <a class="btn btn-ghost text-xl hover:cursor-pointer"
          >Vanesa Carloto Miranda</a
        > -->
        <!-- <img
          src="/logo.svg"
          alt="logo iniciales de Vanesa Carlotto Miranda"
          class="h-8 w-14 object-cover lg:ml-10 ml-2"
        /> -->
        <svg
          width="75"
          height="50"
          viewBox="0 0 52.916665 39.687501"
          version="1.1"
          id="svg1"
          inkscape:version="1.3.2 (091e20e, 2023-11-25, custom)"
          sodipodi:docname="v6.svg"
          xml:space="preserve"
          xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
          xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:svg="http://www.w3.org/2000/svg"
        >
          <sodipodi:namedview
            id="namedview1"
            pagecolor="#ffffff"
            bordercolor="#000000"
            borderopacity="0"
            inkscape:showpageshadow="2"
            inkscape:pageopacity="0.0"
            inkscape:pagecheckerboard="0"
            inkscape:deskcolor="#a2a2a2"
            inkscape:document-units="mm"
            inkscape:zoom="2.56"
            inkscape:cx="65.039062"
            inkscape:cy="100.58594"
            inkscape:window-width="1920"
            inkscape:window-height="1017"
            inkscape:window-x="-8"
            inkscape:window-y="-8"
            inkscape:window-maximized="1"
            inkscape:current-layer="layer1"
          />
          <defs id="defs1" />
          <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1">
            <text
              xml:space="preserve"
              style="
                font-style: normal;
                font-variant: normal;
                font-weight: normal;
                font-stretch: normal;
                font-size: 18.5876px;
                font-family: Perandory;
                -inkscape-font-specification: Perandory;
                white-space: pre;
                inline-size: 28.8893;
                fill: #1e1e1e;
                fill-opacity: 1;
                stroke: #272727;
                stroke-width: 0.871294;
                stroke-opacity: 1;
              "
              x="5.3824849"
              y="32.680302"
              id="text3"
              transform="matrix(1.8121035,0,0,2.3803396,-8.3315949,-42.711715)"
            >
              <tspan x="5.3824849" y="32.680302" id="tspan1">vcm</tspan>
            </text>
          </g>
        </svg>
      </router-link>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1 z-50">
        <li>
          <details>
            <summary>
              {{ $t("navbar.btn_info") }}
            </summary>
            <ul class="bg-neutral rounded-t-none p-2 z-50">
              <li>
                <router-link to="/about"
                  ><a>{{ $t("navbar.info.about") }}</a></router-link
                >
              </li>
              <li>
                <router-link to="/info"
                  ><a>{{ $t("navbar.info.terapies") }}</a></router-link
                >
              </li>
              <li>
                <router-link to="/faq"
                  ><a>{{ $t("navbar.info.faq") }}</a></router-link
                >
              </li>
            </ul>
          </details>
        </li>
        <li>
          <router-link to="/contact"
            ><a>{{ $t("navbar.contact") }}</a></router-link
          >
        </li>
        <li>
          <div class="locale-changer -mt-1.5">
            <select
              v-model="$i18n.locale"
              class="select select-primary bg-neutral select-sm text-base-100 w-16 max-w-x"
            >
              <option :value="$i18n.locale" disabled selected hidden>
                {{ $i18n.locale }}
              </option>
              <option
                v-for="locale in $i18n.availableLocales"
                :key="`locale-${locale}`"
                :value="locale"
              >
                {{ locale }}
              </option>
            </select>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
  import { onMounted, watch } from "vue";
  import { useRoute } from "vue-router";

  const props = defineProps({ load: Boolean });

  const route = useRoute();

  const state = {
    show: false,
  };

  watch(
    () => props.load,
    (newValue, oldValue) => {
      if (newValue) {
        state.show = true;
        setTimeout(() => {
          state.show = false;
        }, 1000);
      } // else state.show = false;
    }
  );
  watch(
    () => route.path,
    (newValue, oldValue) => {
      if (newValue != oldValue) {
        state.show = true;
        setTimeout(() => {
          state.show = false;
        }, 1000);
      }
    }
  );
</script>
