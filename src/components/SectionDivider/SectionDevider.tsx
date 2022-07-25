import "./SectionDivider.scss";

interface ISectionDividerProps {
  title: string;
}

const SectionDivider = ({ title }: ISectionDividerProps) => {
  return (
    <div className="section-divider">
      <p className="section-divider__title">{title}</p>
    </div>
  );
};

export default SectionDivider;
