import { useEffect, useState } from "react";

const PopularClass = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularClass")
      .then((res) => res.json())
      .then((data) => setPopularClass(data));
  }, []);
  return (
    <div className="mt-16">
      <h3 className="text-3xl font-medium uppercase text-center">
        Popular Class
        <br />
        ----------------------
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {popularClass.map((classes) => (
          <div key={classes.id} className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Class Name: {classes.className}</h2>
              <p>
                <span className="font-medium">Instructor Name:</span>
                {classes.instructorName}
              </p>
              <p>
                <span className="font-medium">Price:</span>
                {classes.price}
              </p>
            </div>
            <figure>
              <img src={classes.img} alt="Shoes" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
