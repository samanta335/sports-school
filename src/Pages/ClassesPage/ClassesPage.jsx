import UseClass from "../../Hook/UseClass";

const ClassesPage = () => {
  const [myClass] = UseClass();

  const approved = myClass.filter((classes) => classes.role === "approved");

  return (
    <div className="overflow-x-auto  ">
      <table className="table text-center mt-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Class Image</th>

            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Select Button</th>
          </tr>
        </thead>
        <tbody>
          {approved.map((approve, index) => (
            <tr key={approve._id}>
              <td>{index + 1}</td>

              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle ml-20 w-12 h-12">
                      <img
                        src={approve.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{approve.className}</td>
              <td>{approve.name}</td>
              <td>{approve.seat}</td>
              <td>{approve.price}</td>

              <td>
                <button className="btn btn-xs btn-accent">
                  Select the Game
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassesPage;
