import React, { useState, useEffect } from "react";
import Policy from "./Policy";
// import './App.css';

const TNC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //   const [agree, setAgree] = useState(false);

  //   const checkboxHandler = () => {
  //     // if agree === true, it will be set to false
  //     // if agree === false, it will be set to true
  //     setAgree(!agree);

  //   }

  //   // When the button is clicked
  //   const btnHandler = () => {
  //     alert('U agreed!');
  //   };

  return (
    <>
      <Policy />
    </>

    // <div className="page">
    //   <div className='text'>
    //     <h2 >Terms and Condition</h2></div>
    //   <div className="row">

    //     <div className="col-sm">
    //       <div className="col">
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus, iure laboriosam blanditiis culpa, praesentium quo cum asperiores ipsa similique qui eligendi iusto officiis eveniet voluptatum perspiciatis aliquam incidunt laudantium!</p>
    //         <h6 style={{ color: "red" }}>Lorem ipsum dolor sit amet  </h6>
    //         <ul>
    //           <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit cupiditate expedita nihil ipsum dolorum officia ad ipsam voluptatem suscipit cumque quis, sunt eaque excepturi! Harum obcaecati veritatis dicta placeat!</li>
    //           <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vitae dolore ea eum sapiente, voluptates placeat quia nostrum beatae adipisci, ab quibusdam debitis dicta. Libero iste voluptatum iure inventore reprehenderit?</li>
    //           <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta corrupti dolor, veritatis excepturi doloribus totam ea numquam molestiae porro, nihil nulla vitae quo cupiditate inventore accusamus saepe dolorem. Esse, at.</li>
    //         </ul>

    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus, iure laboriosam blanditiis culpa, praesentium quo cum asperiores ipsa similique qui eligendi iusto officiis eveniet voluptatum perspiciatis aliquam incidunt laudantium!</p>

    //       </div></div>
    //       <div className="col-sm">
    //       <div className='sm'>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus, iure laboriosam blanditiis culpa, praesentium quo cum asperiores ipsa similique qui eligendi iusto officiis eveniet voluptatum perspiciatis aliquam incidunt laudantium!.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus, iure laboriosam blanditiis culpa, praesentium quo cum asperiores ipsa similique qui eligendi iusto officiis eveniet voluptatum perspiciatis aliquam incidunt laudantium!.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus, iure laboriosam blanditiis culpa, praesentium quo cum asperiores ipsa similique qui eligendi iusto officiis eveniet voluptatum perspiciatis aliquam incidunt laudantium!</p>
    //         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptatibus, iure laboriosam blanditiis culpa, praesentium quo cum asperiores ipsa similique qui eligendi iusto officiis eveniet voluptatum perspiciatis aliquam incidunt laudantium!</p>
    //       </div></div></div>

    //     <div className="App">
    //       <div className="container">
    //         <div>
    //           <input type="checkbox" id="agree" onChange={checkboxHandler} />
    //           <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
    //         </div>

    //         {/* Don't miss the exclamation mark* */}
    //         <button disabled={!agree} className="btn" onClick={btnHandler}>
    //           Continue
    //         </button>
    //       </div></div>
    //   </div>
  );
};

export default TNC;
