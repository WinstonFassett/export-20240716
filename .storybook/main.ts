import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-addon-pseudo-states"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
  },
};
export default config;
