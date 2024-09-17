import { h, FC, BaseProps } from "tsx-dom";

interface ClocheButtonProps extends BaseProps {
  text?: string
}

export const ClocheButton: FC<ClocheButtonProps> = ({ text = "ClocheButton" }: ClocheButtonProps) => (
  <button class="button is-primary oswald-font cloche-button">{text}</button>
);
