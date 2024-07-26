import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

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

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

library.add(faHouseLaptop, faPeopleGroup, faWheelchair, faWhatsapp, faUserTie);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
