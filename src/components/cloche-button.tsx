import { h, FC, BaseProps } from "tsx-dom";

interface ClocheButtonProps extends BaseProps {
  text?: string
}

export const ClocheButton: FC<ClocheButtonProps> = ({ text = "ClocheButton" }: ClocheButtonProps) => (
  <button id="cloche-button" class="button is-primary oswald-font cloche-button cloche-button-hidden">{text}</button>
);
