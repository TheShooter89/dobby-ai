import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

import { h, FC, BaseProps } from "tsx-dom";

import { setupCounter } from './counter.ts'
import { Navbar } from "./navbar.tsx";

interface ButtonProps extends BaseProps { }

const App: FC<ButtonProps> = () => (<h1>app</h1>)

const body = document.querySelector<HTMLDivElement>('body');
body?.insertBefore(<App />, body.firstChild);
body?.insertBefore(<Navbar />, body.firstChild);
