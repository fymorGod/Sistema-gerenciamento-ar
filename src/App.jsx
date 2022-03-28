import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Manutencao from "./pages/Manutencao";
import Relatorios from "./pages/Relatorios";
import EmFuncionamento from "./pages/EmFuncionamento";
import Equipamentos from "./pages/Equipamentos";
import CadastroManutencao from "./pages/CadastroManutencao";
import CadastroEquipamentos from "./pages/Cadastro";
import ManutencaoProxima from "./pages/ManutencaoProxima";
import Defeituosos from "./pages/Defeituosos";
import Cadastro from "./pages/Cadastro";
import Filtros from "./pages/Filtros";
import Navegacao from "./pages/Navegacao";
import Arc from "./components/Arc";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/navegacao" element={<Navegacao />} />
          <Route path="/navegacao/equipamentos" element={<Equipamentos />} />
          
          <Route path="/navegacao/equipamentos/:id" element={<Arc />} />

          <Route path="/navegacao/manutencao" element={<Manutencao />} />
          <Route path="/navegacao/relatorios" element={<Relatorios />} />

          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/cadastro/cadastroManutencao" element={<CadastroEquipamentos />} />
          <Route path="/cadastro/cadastroEquipamentos" element={<CadastroManutencao />} />

          <Route path="/filtros" element={<Filtros />} />
          <Route path="/filtros/emFuncionamento" element={<EmFuncionamento />} />
          <Route path="/filtros/manutencaoProxima" element={<ManutencaoProxima />} />
          <Route path="/filtros/defeituosos" element={<Defeituosos />} />
          
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;
