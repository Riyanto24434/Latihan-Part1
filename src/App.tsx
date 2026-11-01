import { useEffect, useState } from "react";
import { supabase } from "./integrations/supabase/client";

export default function App() {
  const [status, setStatus] = useState("Menghubungkan...");

  useEffect(() => {
    supabase
      .from("notes")
      .select("*")
      .then(({ data, error }) => {
        setStatus(
          error
            ? "Error: " + error.message
            : "Berhasil! Jumlah catatan: " + (data?.length ?? 0)
        );
      });
  }, []);

  return <h1 className="p-4 text-2xl font-bold text-blue-600">{status}</h1>;
}