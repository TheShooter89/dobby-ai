import './style.css'
import './components/navbar.css'
import './components/viewbox.css'
import './components/dobby.css'
import './components/cloche-button.css'
import './components/interaction-box.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import dobby_logo from "/dobby.svg";

import { h, FC, BaseProps } from "tsx-dom";

import { Navbar, PhantomNavbar } from "./components/navbar.tsx";
import { ViewBox } from "./components/viewbox.tsx";

import { typewrite_effect } from "./actions/typewriter.tsx";

const body = document.querySelector<HTMLDivElement>('body');

body?.insertBefore(<ViewBox />, body.firstChild);
body?.insertBefore(<Navbar />, body.firstChild);

const dobby_bubble_text = document.getElementById("dobby-bubble-text");
// const dobby_text = "Augurio estremamente lungo da far typewriter";
const dobby_text = "Un testo molto lungo per fare gli auguri a mia sorella, da mostrare animandolo come una macchina da scrivere, il famoso effetto typewriter";

setTimeout(() => typewrite_effect(dobby_bubble_text, dobby_text, dobby_text.split(""), "", 65), 1000);
// typewrite_effect(dobby_bubble_text, dobby_text, dobby_text.split(""), "", 100);
