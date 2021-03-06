import React, { useState } from "react";
import "./style1.css";

const Policy = () => {
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  // When the button is clicked
  const btnHandler = () => {
    alert("U agreed!");
  };

  return (
    <div className="TNC__page">
      <div className="TNC__text">
        <h2>Terms and Condition</h2>
      </div>
      <div className="TNC__row">
        <div className="TNC__col-TNC__sm">
          <div className="TNC__col">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              voluptatibus, iure laboriosam blanditiis culpa, praesentium quo
              cum asperiores ipsa similique qui eligendi iusto officiis eveniet
              voluptatum perspiciatis aliquam incidunt laudantium!
            </p>
            <h6 style={{ color: "red" }}>Lorem ipsum dolor sit amet </h6>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                velit cupiditate expedita nihil ipsum dolorum officia ad ipsam
                voluptatem suscipit cumque quis, sunt eaque excepturi! Harum
                obcaecati veritatis dicta placeat!
              </li>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                vitae dolore ea eum sapiente, voluptates placeat quia nostrum
                beatae adipisci, ab quibusdam debitis dicta. Libero iste
                voluptatum iure inventore reprehenderit?
              </li>
              <li>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
                corrupti dolor, veritatis excepturi doloribus totam ea numquam
                molestiae porro, nihil nulla vitae quo cupiditate inventore
                accusamus saepe dolorem. Esse, at.
              </li>
            </ul>

            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              voluptatibus, iure laboriosam blanditiis culpa, praesentium quo
              cum asperiores ipsa similique qui eligendi iusto officiis eveniet
              voluptatum perspiciatis aliquam incidunt laudantium!
            </p>
          </div>
        </div>
        <div className="TNC__col-TNC__sm">
          <div className="TNC__sm">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              voluptatibus, iure laboriosam blanditiis culpa, praesentium quo
              cum asperiores ipsa similique qui eligendi iusto officiis eveniet
              voluptatum perspiciatis aliquam incidunt laudantium!.Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus,
              iure laboriosam blanditiis culpa, praesentium quo cum asperiores
              ipsa similique qui eligendi iusto officiis eveniet voluptatum
              perspiciatis aliquam incidunt laudantium!.Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Ipsum voluptatibus, iure
              laboriosam blanditiis culpa, praesentium quo cum asperiores ipsa
              similique qui eligendi iusto officiis eveniet voluptatum
              perspiciatis aliquam incidunt laudantium!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              voluptatibus, iure laboriosam blanditiis culpa, praesentium quo
              cum asperiores ipsa similique qui eligendi iusto officiis eveniet
              voluptatum perspiciatis aliquam incidunt laudantium!
            </p>
          </div>
        </div>
      </div>

      <div className="TNC__App">
        <div className="TNC__container">
          <div>
            <input type="checkbox" id="agree" onChange={checkboxHandler} />
            <label htmlFor="agree">
              {" "}
              I agree to <b>terms and conditions</b>
            </label>
          </div>

          <button disabled={!agree} className="TNC__btn" onClick={btnHandler}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
export default Policy;
