import "./CategoryCard.scss";

interface ICategoryCardProps {
  name: string;
  icon: JSX.Element;
}

const CategoryCard = ({ name, icon }: ICategoryCardProps) => {
  return (
    <div className="category-card">
      <div className="category-card__left-content">
        <i className="category-card__icon">{icon} </i>
      </div>
      <div className="category-card__right-content">
        <p className="category-card__name">{name}</p>
      </div>
    </div>
  );
};

export default CategoryCard;
