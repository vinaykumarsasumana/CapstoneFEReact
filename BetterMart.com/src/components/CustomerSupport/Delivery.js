import React, { useState, useEffect } from "react";
import "./CustomerSupport.css";

const Delivery = () => {
  const [agree, setAgree] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
  };

  // When the button is clicked
  const btnHandler = () => {
    alert("U agreed!");
  };

  return (
    <div className="CS__page">
      <div className="CS__text">
        <h2
          style={{
            backgroundColor: "var(--c2d)",
            color: "white",
            textDecoration: "none",
          }}
        >
          Delivery
        </h2>
      </div>
      <div className="CS__row">
        <div className="CS__col-CS__sm">
          <div className="CS__col">
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
        <div className="CS__col-CS__sm">
          <div className="CS__sm">
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
    </div>
  );
};
export default Delivery;
