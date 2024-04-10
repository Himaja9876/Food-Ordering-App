import { useRouteError } from "react-router-dom";
import Header from "./Header";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <Header />
      <h1>Oops!!</h1>
      <h2>Something went wrong</h2>
      <h4>{err.status} {err.statusText}</h4>
    </div>
  );
}

export default Error;