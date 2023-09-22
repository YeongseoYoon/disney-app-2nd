import GlobalStyles from "@/styles/GlobalStyles";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyles />
      <Outlet />
    </>
  );
}

export default App;
