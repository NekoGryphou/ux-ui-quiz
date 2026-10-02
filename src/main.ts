import { mount } from "svelte";
import "./styles/base.scss";
import App from "./app/App.svelte";

const target: HTMLElement | null = document.getElementById("app");
if (target === null) throw new Error("App container not found.");

export default mount(App, { target });
