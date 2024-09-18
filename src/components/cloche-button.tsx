import { h, FC, BaseProps } from "tsx-dom";

interface ClocheButtonProps extends BaseProps {
  text?: string
  onclick?(event: Event): any
}

function default_click_action(this: HTMLElement, event: Event) {
  event.preventDefault();
  console.log('default click action!');
}

export const ClocheButton: FC<ClocheButtonProps> = ({ text = "ClocheButton", onclick = default_click_action }: ClocheButtonProps) => (
  <button id="cloche-button" onClick={onclick} class="button is-primary oswald-font cloche-button cloche-button-hidden">{text}</button>
);
