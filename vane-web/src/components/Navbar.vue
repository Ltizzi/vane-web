import i18n from '@/i18n';
<template lang="">
  <div class="navbar bg-base-100 z-50">
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
            <summary>{{ $t("navbar.btn_info") }}</summary>
            <ul class="bg-base-100 rounded-t-none p-2 z-50">
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
          <!-- <label class="swap">
            <input type="checkbox" />
            <div class="swap-on" @click="$i18n.locale = 'es'">ES</div>
            <div class="swap-off" @click="$i18n.locale = 'en'">EN</div>
          </label> -->

          <div class="locale-changer">
            <select v-model="$i18n.locale" class="w-10 max-w-x">
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
<script setup></script>
