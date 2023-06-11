import UsePayments from "../../../../Hook/UsePayments";

const EnrollClass = () => {
  const [payment] = UsePayments();
  return (
    <div className="overflow-x-auto  ">
      <h1 className="text-2xl text-purple-600 text-center font-medium">
        Total Enrolled Class: {payment.length}
      </h1>
      <table className="table text-center mt-2">
        <thead className="bg-base-200">
          <tr>
            <th>Class Name</th>
            <th>Instructor Name</th>
            <th>Price</th>
            <th>Enroll Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {payment.map((enrolledClass) => (
            <tr key={enrolledClass._id}>
              <td>{enrolledClass.className}</td>
              <td>{enrolledClass.instructor}</td>
              <td>{enrolledClass.price}</td>
              <td>{enrolledClass.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnrollClass;
