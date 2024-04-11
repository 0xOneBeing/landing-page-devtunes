import "./assets/css/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            {/* <Route path="/" exact component={Home} /> */}
            {routes.map((route) => (
              <Route
                key={route.id}
                path={route.path}
                exact={route.exactness}
                element={<route.component />}
              />
            ))}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
