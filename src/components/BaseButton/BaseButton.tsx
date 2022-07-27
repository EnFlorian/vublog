import "./BaseButton.scss";

interface IBaseButtonProps {
  variant: "primary" | "secondary";
  name: string;
  children?: React.ReactNode;
  func?: () => void;
}

const BaseButton = ({ variant, name, func }: IBaseButtonProps) => {
  const handleClick = (e: React.MouseEvent) => {
    if (func) {
      e.preventDefault();
      func && func();
    }
  };

  return (
    <button aria-label="button" className={`base-button base-button--${variant}`} onClick={(e) => handleClick(e)}>
      {name}
    </button>
  );
};

export default BaseButton;
