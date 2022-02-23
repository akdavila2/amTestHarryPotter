import React from "react";
import PreLoad from "./PreLoad";
import Student from "./Student";

import useData from './useData';

const Cards = () => {
  
  const[ready, data, fetching]= useData("students");
  console.log(1, ready, data, fetching);
  if(fetching)return <PreLoad />

// const items= data.map(student=><Student  key={student.name} student= {student} />);
  return (
    <section className="cards-container">
      {data.map(student=><Student  key={student.name} student= {student} />)}
    </section>
  );
};

export default Cards;
