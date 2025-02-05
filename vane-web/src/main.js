import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import ES from "./locale/es.json";
import EN from "./locale/en.json";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faHouseLaptop,
  faPeopleGroup,
  faWheelchair,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

import {
  faWhatsapp,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { router } from "./router";

library.add(
  faHouseLaptop,
  faPeopleGroup,
  faWheelchair,
  faWhatsapp,
  faUserTie,
  faGithub,
  faInstagram,
  faLinkedin
);

const app = createApp(App);

export const API_URL = "https://vane-web.onrender.com"; //"http://localhost:8000";

export const i18n = createI18n({
  locale: "es",
  fallbackLocale: "en",
  messages: {
    es: ES,
    en: EN,
  },
});

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(i18n);
app.mount("#app");

function settingLang() {
  const lang = window.navigator.language.split("-");
  console.log(lang);
  if (lang[0].toLowerCase() != "es" || lang[0].toLowerCase() != "en") {
    i18n.global.locale.value = "en";
  } else {
    i18n.global.locale.value = lang[0];
  }
}

settingLang();
