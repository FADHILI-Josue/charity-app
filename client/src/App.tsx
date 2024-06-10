import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import EthProvider from "./contexts/EthContext/EthProvider.tsx";
import DonatePage from "./pages/DonatePage.tsx";
import HomePage from "./pages/HomePage.tsx";

function App() {
  return (
    <BrowserRouter>
      <EthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route
            path="/tes"
            element={
              <div className="h-screen w-screen bg-black">
                <img
                  src="/child.png"
                  alt="child"
                  style={{ maskImage: "url('/mask.png')" }}
                />
              </div>
            }
          />
          <Route
            path="/*"
            element={
              <Layout cln="w-screen min-h-[70vh] flex flex-col items-center justify-center text-4xl">
                <h1>Not Found</h1>
              </Layout>
            }
          />
        </Routes>
      </EthProvider>
    </BrowserRouter>
  );
}

export default App;
