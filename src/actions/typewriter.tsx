import { h, FC, BaseProps } from "tsx-dom";

const dobby_text = "Un testo molto lungo per fare gli auguri a mia sorella, da mostrare animandolo come una macchina da scrivere, il famoso effetto typewriter";

export const typewrite_effect = (element: HTMLElement, text: string, split_str: string, accumulator = "", timeout = 200) => {
  let acc = accumulator;


  if (accumulator.length < text.length) {
    let shifted_str = split_str.shift();
    acc += shifted_str;
    console.log('acc: ', acc);
    element.innerHTML += shifted_str;
    setTimeout(() => typewrite_effect(element, text, split_str, acc, timeout), timeout);
    // typewrite_effect(element, text, split_str, acc, timeout);
  }
}
