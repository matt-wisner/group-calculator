import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");
  var stringMath = require("string-math");

  const handleSubmit = (e) => {
    const calc = { value1: display };

    if (!stringMath(calc.value1).error) {
      fetch("http://localhost:8000/calcs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(calc),
      }).then(() => {
        console.log("new calc added");
      });
    }
  };

  return (
    <div className="calculator">
      <h2>Calculator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          maxlength="30"
          className="display"
          value={display}
          disabled
          required
        />
        <div className="calc-buttons">
          <input
            type="button"
            name="one"
            value="1"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
          <input
            type="button"
            name="two"
            value="2"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
          <input
            type="button"
            name="three"
            value="3"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
          <input
            type="button"
            className="operator"
            name="plus"
            value="+"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
          <br />
          <input
            type="button"
            name="four"
            value="4"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
          <input
            type="button"
            name="five"
            value="5"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
          <input
            type="button"
            name="six"
            value="6"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
          <input
            type="button"
            className="operator"
            name="minus"
            value="-"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
          <br />
          <input
            type="button"
            name="seven"
            value="7"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
          <input
            type="button"
            name="eight"
            value="8"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
          <input
            type="button"
            name="nine"
            value="9"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
          <input
            type="button"
            className="operator"
            name="times"
            value="*"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
          <br />
          <input
            type="button"
            className="operator"
            name="clear"
            value=" C "
            onClick={(e) => setDisplay("")}
          />
          <input
            type="button"
            name="0"
            value="0"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
          <input type="submit" className="operator" name="execute" value="=" />
          <input
            type="button"
            className="operator"
            name="div"
            value="/"
            onClick={(e) => setDisplay(display + e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Calculator;
