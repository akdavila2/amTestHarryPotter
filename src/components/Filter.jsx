import React from "react";

const Filter = ({ setView }) => {
  const handlefilter = (event) => {
    event.preventDefault();
    setView(event.currentTarget.dataset.view);
  };
  return (
    <section className="filter">
      <button
        className="primary-button"
        onClick={handlefilter}
        data-view="students"
      >
        ESTUDIANTES
      </button>
      <button
        className="primary-button"
        onClick={handlefilter}
        data-view="staff"
      >
        STAFF
      </button>
    </section>
  );
};

export default Filter;
