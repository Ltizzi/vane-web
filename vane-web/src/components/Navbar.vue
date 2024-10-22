<template lang="">
  <div
    :class="[
      state.show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-48',

      'navbar bg-neutral z-50 absolute top-0 text-secondary  transition-all ease-in-out duration-500',
    ]"
  >
    <div class="flex-1">
      <router-link to="/">
        <a class="btn btn-ghost text-xl hover:cursor-pointer"
          >Vanesa Carloto Miranda</a
        >
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
