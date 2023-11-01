import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "@/layouts/Main";
import Models from "@/routes/Models";
import Scenarios from "@/routes/Scenarios";
import Groups from "@/routes/Groups";
import Group from "@/routes/Group";
import Runs from "@/routes/Runs";
import Run from "@/routes/Run";
import Landing from "@/routes/Landing";
import Leaderboard from "@/routes/Leaderboard";

export default function App() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-explicit-any
  const legacyRelease = (window as any).LEGACY_RELEASE;

  return (
    <Router basename={"/" + legacyRelease}>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Landing />} />
          <Route path="/models" element={<Models />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/scenarios" element={<Scenarios />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/groups/:groupName" element={<Group />} />
          <Route path="/runs" element={<Runs />} />
          <Route path="/runs/:runName" element={<Run />} />
        </Route>
      </Routes>
    </Router>
  );
}
