import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();

  return <div>{`${error}`}</div>;
}

export default ErrorBoundary;
