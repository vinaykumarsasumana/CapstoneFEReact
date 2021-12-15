import React, { useState, useEffect } from "react";

import Faq from "./Faq";

function FAQApp() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Faq />
    </>
    // <main>
    //   <div className='container'>
    //     <h3>frequently asked questions</h3>
    //     <section className='info'>
    //       {questions.map((question) => (
    //         <SingleQuestion key={question.id} {...question} />
    //       ))}
    //     </section>
    //   </div>
    // </main>
  );
}

export default FAQApp;
