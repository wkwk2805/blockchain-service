import "./App.css";
import Menu from "./components/header/Menu";
import Modal from "./components/modal/Modal";
import { Route, Routes } from "react-router-dom";
import { MyPage, Swap, Pool, Staking, Drops } from "./components/header/Navi";

function App() {
  return (
    <div>
      <Modal />
      <Menu />
      <Routes>
        <Route path="/" element={<Swap />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/pool" element={<Pool />} />
        <Route path="/staking" element={<Staking />} />
        <Route path="/drops" element={<Drops />} />
      </Routes>
    </div>
  );
}

export default App;
