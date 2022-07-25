import "./BaseButton.scss";

interface IBaseButtonProps {
  variant: "primary" | "secondary";
  name: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const BaseButton = ({ variant, name }: IBaseButtonProps) => {
  return <button className={`base-button base-button--${variant}`}>{name}</button>;
};

export default BaseButton;
