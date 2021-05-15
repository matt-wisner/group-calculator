const CalcList = (props) => {
  const calcs = props.calcs;

  var stringMath = require("string-math");
  var calcListLength = calcs.length;

  return (
    <div className="calc-list">
      {calcs
        .filter((calc) => calc.id > calcListLength - 10)
        .map((calc) => (
          <div className="math-problem" key={calc.id}>
            <ul>
              <li>
                <h3>
                  {calc.value1} = {stringMath(calc.value1)}
                </h3>
              </li>
            </ul>
          </div>
        ))}
    </div>
  );
};

export default CalcList;
