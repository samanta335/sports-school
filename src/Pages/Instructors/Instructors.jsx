import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="container grid grid-cols-3 mx-auto mb-5">
      {instructors.map((teacher) => (
        <div key={teacher._id}>
          <div className="card mb-5 mt-9 w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={teacher.img} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name: {teacher.name}</h2>
              <p>
                <span className="font-medium">Email: </span>
                {teacher.email}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructors;
