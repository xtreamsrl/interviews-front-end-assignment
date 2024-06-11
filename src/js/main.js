import { createApp } from "vue";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";

// router
import { router } from "../router";

// Import our custom CSS
import "../scss/style.scss";

import App from "../App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
