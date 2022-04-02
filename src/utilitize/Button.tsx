import { FC } from "react";
interface Props {
  text: string;
  index: number;
  positions: Positions | null;
  onClick: (text: string, index: number) => void;
  classes?: string;
}
const Button: FC<Props> = (props) => {
  const { text, onClick, classes, index, positions } = props;

  return (
    <button
      className={`${classes} ${
        positions?.[1].toString() === text
          ? "active"
          : positions?.[2].toString() === text
          ? "active"
          : positions?.[3].toString() === text
          ? "active"
          : positions?.[4].toString() === text
          ? "active"
          : positions?.[5].toString() === text
          ? "active"
          : positions?.[6].toString() === text
          ? "active"
          : positions?.[7].toString() === text
          ? "active"
          : positions?.[8].toString() === text && "active"
      }`}
      onClick={() => onClick(text, index)}
    >
      {text}
    </button>
  );
};

export default Button;
