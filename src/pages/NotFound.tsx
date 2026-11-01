import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-red-600">Halaman tidak ditemukan</h1>
      <Link to="/" className="mt-2 inline-block text-blue-600 underline">
        Kembali ke beranda
      </Link>
    </div>
  );
}