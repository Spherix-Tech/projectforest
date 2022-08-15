import React, { useState } from "react";
import ImageComponent from "../shared/ImageComponent";
import FAQAccordion from "./FAQAccordion";
import { getAllFAQData } from "../../services/data-files/FAQData";
import PageGradientTitle from "../shared/PageGradientTitle";

const FAQ = () => {
  const [faqData] = useState(getAllFAQData());
  const [query, setQuery] = useState("");

  return (
    <div className="section-spacing">
      <div className="flex justify-start items-center flex-col gap-6">
        {/* Start Title Section */}
        <h2 className=" text-textTitle text-[40px] font-semibold pb-10">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        {/* End Title Section */}
        <div className="w-full flex flex-col items-center justify-end lg:h-[520px] h-unset relative faq-bg lg:pt-20 lg:pb-[100px] pb-10 pt-20">
          <h2 className=" text-white lg:text-4xl text-xl font-semibold py-8">
            Hello, how can we help?
          </h2>
          <input
            type="text"
            placeholder="Ask a question...."
            className="lg:py-3 py-2 px-6 lg:w-2/4 w-[90%] outline-none rounded-xl bg-[#DED897] bg-opacity-20 placeholder:font-light placeholder:text-white"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {/* FAQ content section starts */}
        <div className=" w-full flex flex-col">
          {faqData.map(({ title, description }, key) => (
            <div key={key}>
                
              <div className="pt-14">
                <PageGradientTitle
                  title={title}
                  className="text-semibold text-[28px]"
                />
              </div>

              {description
                .filter((description) => {
                  if (
                    description.answer.toLowerCase().includes(query) ||
                    description.question.toLowerCase().includes(query)
                  ) {
                    return description;
                  }
                })
                .map(({ question, answer }, key) => (
                  <FAQAccordion key={key} question={question} answer={answer} />
                ))}
            </div>
          ))}
        </div>
        {/* FAQ content section ends */}
      </div>
    </div>
  );
};

export default FAQ;
