import React from "react";
import "./styles.scss";

const NutritionalContentTable = ({ nutritionalContent }) => {
  return (
    <div
      className="nutritional-content-table"
      itemscope=""
      itemtype="https://schema.org/NutritionInformation"
    >
      <h3 itemprop="name">Nutritional Content</h3>
      <table>
        <tbody>
          {Object.keys(nutritionalContent).map((key) => (
            <tr key={key}>
              <td itemprop={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </td>
              <td>
                <span itemprop="value">{nutritionalContent[key].value}</span>{" "}
                <span itemprop="unitText">{nutritionalContent[key].unit}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Add necessary props validation here

export default NutritionalContentTable;
