
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
const __unconfig_default =  defineConfig({
	site: "https://docs.hackplace.org",
	integrations: [
		// https://starlight.astro.build/reference/configuration/
		starlight({
			title: "hack.place()",
			logo: {
				replacesTitle: true,
				alt: "hack.place() Logo",
				light: "./src/assets/dark-logo.svg",
				dark: "./src/assets/light-logo.svg",
			},
			editLink: {
				baseUrl:
					"https://github.com/hackplace-org/documentation/edit/main/",
			},
			sidebar: [
				{ label: "Home", link: "/" },
				{
					label: "Organization",
					autogenerate: { directory: "organization" },
				},
			],
			social: {
				discord: "https://discord.com/invite/YTZdFWgR6V",
				github: "https://github.com/hackplace-org/documentation",
				twitter: "https://twitter.com/_hackplace",
			},
			customCss: ["./src/fonts/font-face.css", "./src/styles/custom.css"],
		}),
	],
});

if (typeof __unconfig_default === "function") __unconfig_default(...[]);export default __unconfig_data;