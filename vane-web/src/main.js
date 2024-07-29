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

import {
  faWhatsapp,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { router } from "../router";

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

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
