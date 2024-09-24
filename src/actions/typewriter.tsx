import { h, FC, BaseProps } from "tsx-dom";

export const show_button = () => {
  const btn = document.getElementById("cloche-button");

  btn?.classList.remove("cloche-button-hidden");

  console.log('removed cloche-button-hidden class from button!');
};

export const hide_button = () => {
  const btn = document.getElementById("cloche-button");

  btn?.classList.add("cloche-button-hidden");

  console.log('removed cloche-button-hidden class from button!');
};

export const default_call_after = () => console.log("[typewriter] default call_after callback called");

export const typewrite_effect = (element: HTMLElement, text: string, split_str: string[], accumulator = "", timeout = 200, call_after = default_call_after) => {
  let acc = accumulator;


  if (accumulator.length < text.length) {
    let shifted_str = split_str.shift();
    acc += shifted_str;
    console.log('acc: ', acc);
    element.innerHTML += shifted_str;
    setTimeout(() => typewrite_effect(element, text, split_str, acc, timeout, call_after), timeout);
    // typewrite_effect(element, text, split_str, acc, timeout);
  } else {
    setTimeout(() => {
      console.log("SHOW BUTTON");
      call_after();
    }, 850);
  }
}

export function animate_text(element: HTMLElement, text: string, timeout = 65, call_after = default_call_after) {
  //
  let text_split = text.split("");
  let accumulator = "";

  element.innerHTML = "";

  typewrite_effect(element, text, text_split, accumulator, timeout, call_after);
}
