import data from "./data";
import { useState } from "react";
import React from "react";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelect(id) {
    if (selected === id) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  }

  function handleMultiSelect(id) {
    let multiarr = [...multiple];

    const index = multiarr.indexOf(id);

    if (index === -1) {
      multiarr.push(id);
    } else {
      multiarr.splice(index, 1);
    }

    setMultiple(multiarr);
  }

  return (
    <div className="Wrapper">
      <h1>Accordian</h1>

      <button onClick={() => setMultiSelect(!multiSelect)}>
        {multiSelect ? "Disable Multi-Select" : "Enable Multi-Select"}
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                onClick={
                  multiSelect
                    ? () => handleMultiSelect(item.id)
                    : () => handleSingleSelect(item.id)
                }
                className="title"
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {multiSelect
                ? multiple.includes(item.id) && (
                    <div className="answer">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="answer">{item.answer}</div>
                  )}
            </div>
          ))
        ) : (
          <div> No Data Found!!</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
