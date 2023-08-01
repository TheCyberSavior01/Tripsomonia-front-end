import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { router } from "./routes/routes";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <div className="app">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
