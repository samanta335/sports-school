import UsePayments from "../../../../Hook/UsePayments";

const PaymentHistory = () => {
  const [payment] = UsePayments();
  return (
    <div className="overflow-x-auto  ">
      <table className="table text-center mt-2">
        <thead className="bg-base-200">
          <tr>
            <th>Student Name</th>
            <th> Student Email</th>
            <th>TransactionId</th>
            <th>Enroll Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {payment.map((history) => (
            <tr key={history._id}>
              <td>{history.name}</td>
              <td>{history.email}</td>
              <td>{history.transactionId}</td>
              <td>{history.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;
