import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section>
      <div className="error-container  text-center">
        <img
          className="w-1/3 mx-auto mt-10"
          src="https://img.freepik.com/premium-vector/sad-woman-working-laptop-from-home-error-message-vector-cartoon-character_499739-840.jpg?w=2000"
          alt=""
        />
        <h2>
          <span>Error</span> {status || 404}
        </h2>
        <p>{error?.message}</p>
      </div>
    </section>
  );
};

export default ErrorPage;
