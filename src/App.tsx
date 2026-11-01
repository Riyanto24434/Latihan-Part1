import { Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}