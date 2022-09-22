import React, { useState } from 'react';
import FAQAccordion from './FAQAccordion';
import { getAllFAQData } from '../../services/data-files/FAQData';
import PageGradientTitle from '../shared/PageGradientTitle';

const FAQ = () => {
  const [faqData] = useState(getAllFAQData());
  const [data, setFilterData] = useState(faqData);
  const [selectedItem, setSelectedItem] = useState(0);

  function filterData(query) {
    console.log(faqData);
    let data = [];

    for (let i = 0; i < faqData.length; i++) {
      let desc = [];
      for (let j = 0; j < faqData[i].description.length; j++) {
        if (
          faqData[i].description[j].answer.toLowerCase().includes(query) ||
          faqData[i].description[j].question.toLowerCase().includes(query)
        ) {
          let _dict = {};
          _dict['question'] = faqData[i].description[j].question;
          _dict['answer'] = faqData[i].description[j].answer;

          desc.push(_dict);
        }
      }

      if (desc.length != 0) {
        data.push({ title: faqData[i].title, description: desc });
      }
    }
    setFilterData(data);
    return data;
  }

  const select = (id) => {
    if (id === selectedItem) {
      setSelectedItem(0);
    } else {
      setSelectedItem(id);
    }
  };

  return (
    <div className='section-spacing'>
      <div className='flex justify-start items-center flex-col gap-6'>
        {/* Start Title Section */}
        <h2 className=' text-textTitle text-[40px] font-semibold pb-10'>
          FREQUENTLY ASKED QUESTIONS
        </h2>
        {/* End Title Section */}
        <div className='w-full flex flex-col items-center justify-end lg:h-[520px] h-unset relative faq-bg lg:pt-20 lg:pb-[100px] pb-10 pt-20'>
          <h2 className=' text-white lg:text-4xl text-xl font-semibold py-8'>
            Hello, how can we help?
          </h2>
          <input
            type='text'
            placeholder='Ask a question....'
            className='lg:py-3 py-2 px-6 lg:w-2/4 w-[90%] outline-none rounded-xl bg-[#DED897] bg-opacity-20 text-white placeholder:font-light placeholder:text-white'
            onChange={(e) => filterData(e.target.value)}
          />
        </div>
        {/* FAQ content section starts */}
        <div className=' w-full flex flex-col'>
          {data.map(({ title, description }, key) => (
            <div key={key}>
              <h2></h2>

              <div className='pt-14'>
                <PageGradientTitle
                  title={title}
                  className='text-semibold text-[28px]'
                />
              </div>

              {description.map(({ question, answer, answer1, answer2, answer3, answer4,answer5, id }) => (
                //  <div onClick={handleClick} >
                <FAQAccordion
                  key={id}
                  id={id}
                  question={question}
                  answer={answer}
                  answer1={answer1}
                  answer2={answer2}
                  answer3={answer3}
                  answer4={answer4}
                  answer5={answer5}
                  selectedItem={selectedItem}
                  setSelectedItem={(id) => select(id)}
                />
                //  </div>
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