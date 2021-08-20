import React, {useState} from 'react';
import City from "./City";

function State({ index, name, cities }) {
  const [clicked, setClicked] = React.useState(false);
  function handleClicked() {
    setClicked(!clicked);
  }
  return (
    <li>
      <h3 id={"state" + (index + 1)} onClick={handleClicked}>
        {name}
      </h3>
      {clicked ? (
        <ul>
          {cities.map((item) => (
            <City
              name={item.name}
              towns={item.towns}
              index={cities.indexOf(item)}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
}
export default State;
