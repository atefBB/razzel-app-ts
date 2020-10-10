import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import fetch from "cross-fetch";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [apiMessage, setApiMessage] = React.useState<string>("");

  React.useEffect(() => {
    setIsLoading(true);
    (async () => {
      let apiReq = await fetch(
        `http://${process.env.HOST}:${process.env.PORT}/api`
      );

      apiReq
        .json()
        .then(data => {
          setIsLoading(false);
          let apiRes = JSON.parse(data);
          if (apiRes.hasOwnProperty("message")) {
            setApiMessage(apiRes.message);
          }
        })
        .catch(e => console.log(`Error: ${e.message}.`));
    })();
  }, []);

  if (isLoading) {
    return <p>Loading ...</p>;
  }
  if (apiMessage.length) {
    return <p>Api message: {apiMessage}</p>;
  }
  return (
    <Switch>
      <Route exact={true} path="/" component={Home} />
    </Switch>
  );
}
