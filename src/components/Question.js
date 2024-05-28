import React from "react";

function Question(props) {
  const { question, options, selected, setAnswer, onSubmit } = props;
  return (
    <div className="question">
      <h2>{question}</h2>
      {/* <table>
        <tbody>
          {options.map((option, index) => (
            <tr
              key={index}
              onClick={() => setAnswer(option)}
              className={selected === option ? "selected" : ""}
            >
              <td>
                <input type="radio" />
              </td>
              <td>{option}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      <table>
        <tbody>
          {options.map((opt, idx) => (
            <tr key={idx}>
              <input
                type="radio"
                id="html"
                name="fav_language"
                value={opt}
                onClick={() => setAnswer(opt)}
                checked={opt === selected}
                className={selected === opt ? "selected" : ""}
              />{" "}
              <label for="html">{opt}</label>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={onSubmit} disabled={selected === null}>
        Next
      </button>
    </div>
  );
}

export default Question;
