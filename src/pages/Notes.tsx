import { useEffect, useState } from "react";
import { supabase } from "../integrations/supabase/client";

export default function Notes() {
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

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-600">Halaman Catatan</h1>
      <p className="mt-2">{status}</p>
    </div>
  );
}