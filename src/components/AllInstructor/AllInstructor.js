import React from "react";
import Instructor from "../Instructor/Instructor";
import "./AllInstructor.css";

const AllInstructor = () => {
  const instructors = [
    {
      id: 1,
      name: "Prince",
      img: "https://tse1.mm.bing.net/th?id=OIP.o0J_eJQYyUBXu0balhv2RwHaE8&pid=Api&P=0&w=237&h=158",
    },
    {
      id: 2,
      name: "Abidal",
      img: "https://tse3.mm.bing.net/th?id=OIP.4Aw8azHwner6EU78l-LIlAHaE7&pid=Api&P=0&w=237&h=158",
    },
    {
      id: 3,
      name: "Kristo",
      img: "https://tse2.mm.bing.net/th?id=OIP._u33uXEEpU1IDtVyEnBXYQHaEK&pid=Api&P=0&w=280&h=157",
    },
    {
      id: 4,
      name: "Sufian",
      img: "https://tse1.mm.bing.net/th?id=OIP.tQWLMp5d0A_LNts7KlDKJQHaEo&pid=Api&P=0&w=275&h=171",
    },
    {
      id: 5,
      name: "Ahmed",
      img: "https://tse3.mm.bing.net/th?id=OIP.iMVSCdtyWJpRe5LbDYAS1gHaEc&pid=Api&P=0&w=262&h=157",
    },
    {
      id: 6,
      name: "Rahat",
      img: "https://tse4.mm.bing.net/th?id=OIP.fPcS8cbNurFgOTiaohIjHwHaE8&pid=Api&P=0&w=237&h=158",
    },
  ];

  return (
    <div className="container">
      <h2 className="text-gray text-center">Our Instructor</h2>
      <div className="row instructors">
        {instructors.map((instructor) => (
          <Instructor key={instructor.id} instructor={instructor}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default AllInstructor;
