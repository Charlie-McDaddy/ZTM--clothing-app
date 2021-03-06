import { Routes, Route } from "react-router-dom"

import Homepage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"

import "./App.css"

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
