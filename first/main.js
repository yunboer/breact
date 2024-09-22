import createElement from "./createElement.js";
import render from "./render.js";

const element = createElement("h1", { title: "foo" }, "Hello", createElement("a", { href: "https://bilibili.com" }, "Hello"));
const container = document.getElementById('root');
render(element, container);