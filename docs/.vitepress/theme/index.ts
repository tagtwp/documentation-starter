// https://vitepress.dev/guide/custom-theme
// Import types
import type { Theme } from 'vitepress'

// Import default theme
import DefaultTheme from 'vitepress/theme'

// Import styles
import "./style.css";
// Custom Scrollbars on Windows
import "./scrollbar.css";
// Custom Style override
// import "./custom.css";
import "./tailwind.postcss";

// Import components
import Card from "./components/Card.vue";
import Landing from "./layouts/Landing.vue";
import Sections from "./components/Landing/Sections.vue";
import Features from "./components/Landing/Features.vue";
import ZoomableImage from "./components/ZoomableImage.vue";

export default {
  extends: DefaultTheme,
  Layout: Landing,
  enhanceApp({ app, router, siteData }) {

    app.component("Card", Card);
    app.component("LandingSection", Sections);
    app.component("LandingFeatures", Features);
    app.component("ZoomableImage", ZoomableImage);

  }
} satisfies Theme
