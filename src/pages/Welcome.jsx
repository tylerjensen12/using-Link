import { Route } from "react-router-dom";

function Welcome() {
  return (
    <section>
      <h2>This is the Welcome page</h2>
      <Route path="/welcome/new-user"><p>Welcome, new user!</p></Route>
    </section>
  );
}

export default Welcome;
