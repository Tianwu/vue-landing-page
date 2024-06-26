import { createApp } from "vue";
import "./assets/index.css";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";

import Button from "./components/Button.vue";
import LinkButton from "./components/LinkButton.vue";

let app = createApp(App);

app.use(VueSmoothScroll);

app.component("Button", Button);
app.component("LinkButton", LinkButton);

app.mount("#app");
