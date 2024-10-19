import { ReactNode } from "react";
import "./CabinetSection.style.scss";

interface CabinetSectionProps {
  title: string;
  lineItems: ReactNode[];
}

function CabinetSection({ title, lineItems }: CabinetSectionProps) {
  return (
    <div className="CabinetSection">
      <div>
        <div className="menu-title">{title}</div>
        <div className="menu-item-container">
          {lineItems.map((item, index) => (
            <div className="menu-item" key={index}>{item}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CabinetSection;
