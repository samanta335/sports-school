import UseClass from "../../../../Hook/UseClass";

const MyClass = () => {
  const [myClass] = UseClass();
  // console.log(myClass);
  return (
    <div className="overflow-x-auto w-full p-5">
      <table className="table">
        <thead className="bg-base-200">
          <tr>
            <th>#</th>
            <th>Class Image</th>
            <th> Name</th>
            <th> Seats</th>
            <th>Price</th>
            <th>Status</th>
            <th>Enrolled Student</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {myClass.map((classes, index) => (
            <tr key={classes._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={classes.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td>{classes.className}</td>
              <td>{classes.seat}</td>
              <td>{classes.price}</td>
              <td>pending</td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyClass;
