import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";
import { useContext } from "react";
import DarkContext from "./context/dark-context";

function App() {
  const themeCtx = useContext(DarkContext);
  return (
    <div className={themeCtx.isDark ? "dark" : ""}>
      <div className="container grid grid-cols-3 grid-rows-6 h-screen bg-white dark:bg-gray-800  text-black dark:text-white">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
