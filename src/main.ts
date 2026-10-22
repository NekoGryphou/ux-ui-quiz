import "./styles/fonts.css";
import "./styles/base.scss";
import { mount } from "svelte";
import App from "./app/App.svelte";

/**
 * @private
 * @desc Element the app mounts into.
 */
const target: HTMLElement | null = document.getElementById("app");
if (target === null) throw new Error("App container not found.");

export default mount(App, { target });
