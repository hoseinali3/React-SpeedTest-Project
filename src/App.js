import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "tailwindcss/tailwind.css";
import "@ant-design/charts";
import vector from "./icons/Vector.png";

function App() {
  const router = useRoutes(routes);

  return (
    <div className="relative">
      <div className="flex justify-center items-center h-screen">{router}</div>

      <img src={vector} className="absolute left-0 bottom-0 w-1/2" alt="" />
    </div>
  );
}

export default App;
