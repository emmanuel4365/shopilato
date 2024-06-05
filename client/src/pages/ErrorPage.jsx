import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  let error = useRouteError();

  return (
    <div>
      <h2>ErrorPage</h2>
      <h3>{error.data}</h3>
      <Link to="/">Back to HomePage</Link>
    </div>
  );
};
export default ErrorPage;
