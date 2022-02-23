import React, {useState} from "react";
import PreLoad from "./PreLoad";
import Card from "./Card";

import useData from './useData';
import Filter from './Filter';

const Cards = () => {
  const[view, setView]= useState("students");
  
  const[data, fetching]= useData(view);

  if(fetching) return <PreLoad />;

// const items= data.map(student=><Student key={student.name} student= {student} />);
  return (
    <>
    <Filter setView={setView}/>
    <section className="cards-container">
      {data.map(item=><Card  key={item.name} item= {item} />)}
    </section>
    </>
  );
};

export default Cards;
