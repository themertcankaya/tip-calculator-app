import { useState, useRef, useEffect } from "react";
import iconDollar from "./images/icon-dollar.svg";
import iconPerson from "./images/icon-person.svg";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const [lastValue, setLastValue] = useState("");

  const errorx = useRef();
  const errory = useRef();
  const divRef = useRef();
  const firstInput = useRef();
  useEffect(() => {
    if (inputValue !== "" || radioValue !== "") {
      setLastValue(inputValue || radioValue);
    }
  }, [inputValue, radioValue]);

  const handleInputChange = (e) => {
    let x = divRef.current.querySelectorAll("input[type='radio']");
    if (/^[0-9]*$/.test(e.target.value) && Number(e.target.value) >= 0) {
      setInputValue(e.target.value);
      [...x].forEach((item) => {
        item.checked = false;
        if (e.target.value) {
          item.disabled = true;
        } else {
          item.disabled = false;
        }
      });
    }
    if (e.target.value) {
      error.current.innerText = "";
    }
    setRadioValue("");
  };

  const handleBill = (e) => {
    if (/^[0-9.]*$/.test(e.target.value) && Number(e.target.value >= 0)) {
      setBill(e.target.value);
    }
    if (e.target.value) {
      errorx.current.innerText = "";
    }
  };

  const handlePeople = (e) => {
    if (/^[0-9]*$/.test(e.target.value) && Number(e.target.value >= 0)) {
      setPeople(e.target.value);
    }
    if (e.target.value) {
      errory.current.innerText = "";
    }
  };

  const handleRadioChange = (e) => {
    setRadioValue(e.target.value);
  };
  const handleReset = () => {
    setInputValue("");
    setBill("");
    setPeople("");
    setRadioValue("");
    setLastValue("");
  };
  return (
    <>
      <div className="wrapper">
        <div className="left">
          <div className="bill">
            <label htmlFor="bill">Bill</label>
            <br></br>
            <input
              type="text"
              id="bill"
              value={bill}
              onChange={handleBill}
              onBlur={(e) => {
                if (!e.target.value) {
                  errorx.current.innerText = "Can't be blank";
                }
              }}
            />
            <div ref={errorx} className="error"></div>
            <img src={iconDollar} alt="" />
          </div>
          <br />
          <br />
          <div className="div" ref={divRef}>
            <div className="radio-container" style={{ marginBottom: "5rem" }}>
              <label
                htmlFor="inp1"
                style={{ padding: "1rem", borderRadius: "0.5rem" }}
              >
                <p>5%</p>
                <input
                  type="radio"
                  id="inp1"
                  name="same-name"
                  value="5"
                  onChange={handleRadioChange}
                  checked={radioValue === "5"}
                />
                <div className="deneme"></div>
              </label>

              <label
                htmlFor="inp2"
                style={{ padding: "1rem", borderRadius: "0.5rem" }}
              >
                <p>10%</p>
                <input
                  type="radio"
                  id="inp2"
                  name="same-name"
                  value="10"
                  onChange={handleRadioChange}
                  checked={radioValue === "10"}
                />
                <div className="deneme"></div>
              </label>

              <label
                htmlFor="inp3"
                style={{ padding: "1rem", borderRadius: "0.5rem" }}
              >
                <p>15%</p>
                <input
                  type="radio"
                  id="inp3"
                  name="same-name"
                  value="15"
                  onChange={handleRadioChange}
                  checked={radioValue === "15"}
                />
                <div className="deneme"></div>
              </label>

              <label
                htmlFor="inp4"
                style={{ padding: "1rem", borderRadius: "0.5rem" }}
              >
                <p>25%</p>
                <input
                  type="radio"
                  id="inp4"
                  name="same-name"
                  value="25"
                  onChange={handleRadioChange}
                  checked={radioValue === "25"}
                />
                <div className="deneme"></div>
              </label>

              <label
                htmlFor="inp5"
                style={{ padding: "1rem", borderRadius: "0.5rem" }}
              >
                <p>50%</p>
                <input
                  type="radio"
                  id="inp5"
                  name="same-name"
                  value="50"
                  onChange={handleRadioChange}
                  checked={radioValue === "50"}
                />
                <div className="deneme"></div>
              </label>
              <div className="custom">
                <input
                  style={{ padding: "0.5rem", borderRadius: "0.5rem" }}
                  placeholder="Custom"
                  type="text"
                  value={inputValue}
                  onChange={handleInputChange}
                  onClick={handleInputChange}
                />
              </div>
            </div>
          </div>

          <br />
          <div className="people">
            <label htmlFor="people">Number of people</label>
            <br />
            <input
              id="people"
              type="text"
              value={people}
              onChange={handlePeople}
              onBlur={(e) => {
                if (!e.target.value) {
                  errory.current.innerText = "Can't be blank";
                }
              }}
            />
            <div ref={errory} className="error"></div>
            <img src={iconPerson} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="tip-amount">
            <p style={{ color: "white" }}>
              Tip Amount <br /> /person
            </p>
            <div style={{ color: "#27C3AE", fontSize: "2rem" }}>
              $
              {bill && lastValue && people
                ? `${(
                    (Number(bill) * Number(lastValue)) /
                    100 /
                    Number(people)
                  ).toFixed(2)}`
                : "0.00"}
            </div>
          </div>
          <br />
          <br />
          <div className="total-amount">
            <p style={{ color: "white" }}>
              Total <br />
              /person
            </p>
            <div style={{ color: "#27C3AE", fontSize: "2rem" }}>
              $
              {bill && lastValue && people
                ? `${(
                    (Number(bill) + (Number(bill) * Number(lastValue)) / 100) /
                    Number(people)
                  ).toFixed(2)}`
                : "0.00"}
            </div>
          </div>
          <button onClick={handleReset}>RESET</button>
        </div>
      </div>
    </>
  );
}

export default App;
