import React from "react";
import "./styles.scss";

const NutritionalContentTable = ({ nutritionalContent }) => {
  return (
    <div className="nutritional-content-table">
      <h3>Nutritional Content</h3>
      <table>
        <tbody>
          {Object.keys(nutritionalContent).map((key) => (
            <tr key={key}>
              <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
              <td>
                {nutritionalContent[key].value} {nutritionalContent[key].unit}
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
