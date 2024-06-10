import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage.tsx"
import Layout from "./components/Layout.tsx"
import DonatePage from "./pages/DonatePage.tsx"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/tes" element={<div className="h-screen w-screen bg-black">
          <img src="/child.png" alt="child" style={{ maskImage: "url('/mask.png')" }} />
        </div>} />
        <Route path="/*" element={<Layout cln='w-screen min-h-[70vh] flex flex-col items-center justify-center text-4xl'><h1>Not Found</h1></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
