
"use client";

import { useMemo, useState } from "react";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "PT Nusantara Digital",
    location: "Semarang",
    type: "FULL_TIME",
    salary: "Rp6–9 juta",
    category: "Teknologi",
    logo: "N",
    color: "#dcfce7",
    description: "Membangun dan mengembangkan tampilan website modern.",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Digital Studio",
    location: "Remote",
    type: "CONTRACT",
    salary: "Rp5–8 juta",
    category: "Desain",
    logo: "C",
    color: "#ede9fe",
    description: "Merancang pengalaman pengguna dan desain aplikasi.",
  },
  {
    id: 3,
    title: "Data Analyst",
    company: "Indonesia Teknologi",
    location: "Jakarta",
    type: "FULL_TIME",
    salary: "Rp5–7 juta",
    category: "Teknologi",
    logo: "I",
    color: "#dbeafe",
    description: "Mengolah data menjadi informasi untuk bisnis.",
  },
  {
    id: 4,
    title: "Backend Developer",
    company: "Digital Indonesia",
    location: "Bandung",
    type: "FULL_TIME",
    salary: "Rp7–10 juta",
    category: "Teknologi",
    logo: "D",
    color: "#fef3c7",
    description: "Mengembangkan API dan sistem backend aplikasi.",
  },
  {
    id: 5,
    title: "Digital Marketing",
    company: "Kreatif Media",
    location: "Yogyakarta",
    type: "INTERNSHIP",
    salary: "Rp3–5 juta",
    category: "Marketing",
    logo: "K",
    color: "#fce7f3",
    description: "Membantu strategi pemasaran digital perusahaan.",
  },
  {
    id: 6,
    title: "Product Designer",
    company: "Future Tech",
    location: "Remote",
    type: "FREELANCE",
    salary: "Rp5–8 juta",
    category: "Desain",
    logo: "F",
    color: "#cffafe",
    description: "Mengembangkan desain produk digital.",
  },
];

const categories = [
  { name: "Teknologi", icon: "💻", count: "120+" },
  { name: "Marketing", icon: "📈", count: "85+" },
  { name: "Desain", icon: "🎨", count: "60+" },
  { name: "Keuangan", icon: "💰", count: "45+" },
  { name: "Pendidikan", icon: "📚", count: "35+" },
  { name: "Administrasi", icon: "📋", count: "50+" },
];

const companies = [
  { name: "Nusantara Digital", logo: "N", color: "#dcfce7" },
  { name: "Creative Studio", logo: "C", color: "#ede9fe" },
  { name: "Indonesia Teknologi", logo: "I", color: "#dbeafe" },
  { name: "Future Tech", logo: "F", color: "#cffafe" },
];

const typeLabels = {
  FULL_TIME: "Full-time",
  PART_TIME: "Part-time",
  INTERNSHIP: "Magang",
  CONTRACT: "Kontrak",
  FREELANCE: "Freelance",
};

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("Semua");
  const [type, setType] = useState("Semua");

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const search = keyword.toLowerCase();

      const matchKeyword =
        !search ||
        job.title.toLowerCase().includes(search) ||
        job.company.toLowerCase().includes(search);

      const matchLocation =
        !location ||
        job.location.toLowerCase().includes(location.toLowerCase());

      const matchCategory =
        category === "Semua" || job.category === category;

      const matchType =
        type === "Semua" || job.type === type;

      return (
        matchKeyword &&
        matchLocation &&
        matchCategory &&
        matchType
      );
    });
  }, [keyword, location, category, type]);

  return (
    <main className="min-h-screen bg-[#f7faf8] text-gray-800">

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="text-2xl font-extrabold tracking-tight text-emerald-700">
            KerjaKita<span className="text-gray-800">.</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
            <a href="#beranda" className="text-emerald-700">Beranda</a>
            <a href="#lowongan" className="hover:text-emerald-700">Cari Kerja</a>
            <a href="#kategori" className="hover:text-emerald-700">Kategori</a>
            <a href="#perusahaan" className="hover:text-emerald-700">Perusahaan</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="/login" className="hidden rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 sm:block">
              Masuk
            </a>
            <a href="/register" className="rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800">
              Daftar
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="beranda" className="relative overflow-hidden bg-[#075c43]">
        <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-emerald-400 opacity-20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <span className="inline-block rounded-full border border-emerald-300/30 bg-white/10 px-4 py-2 text-sm font-medium text-emerald-100">
              ✨ Langkah awal menuju karier impianmu
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
              Temukan pekerjaan
              <span className="text-lime-300"> yang berarti </span>
              untukmu.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-emerald-100 md:text-lg">
              Temukan peluang karier terbaik, kenali perusahaan impianmu,
              dan mulai perjalanan profesional bersama KerjaKita.
            </p>

            <div className="mt-9 flex flex-wrap gap-8 text-white">
              <div>
                <p className="text-2xl font-bold">500+</p>
                <p className="mt-1 text-sm text-emerald-200">Lowongan kerja</p>
              </div>
              <div>
                <p className="text-2xl font-bold">100+</p>
                <p className="mt-1 text-sm text-emerald-200">Perusahaan</p>
              </div>
              <div>
                <p className="text-2xl font-bold">1.000+</p>
                <p className="mt-1 text-sm text-emerald-200">Pencari kerja</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-center">
            <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl">
              <div className="rounded-2xl bg-white p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
                    💼
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Karier impianmu</p>
                    <p className="text-sm text-gray-500">Dimulai dari sini</p>
                  </div>
                </div>
                <div className="mt-7 space-y-4">
                  <div className="h-3 w-full rounded-full bg-gray-100" />
                  <div className="h-3 w-4/5 rounded-full bg-gray-100" />
                  <div className="h-3 w-3/5 rounded-full bg-gray-100" />
                </div>
                <div className="mt-7 rounded-xl bg-emerald-50 p-4">
                  <p className="text-sm font-semibold text-emerald-800">
                    Peluang baru menantimu!
                  </p>
                  <p className="mt-1 text-xs text-emerald-600">
                    Cari pekerjaan sesuai kemampuanmu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 lg:px-8">
        <div className="grid gap-3 rounded-2xl bg-white p-4 shadow-xl md:grid-cols-[1fr_1fr_auto] md:p-6">
          <div>
            <label className="mb-2 block text-xs font-bold text-gray-500">
              POSISI ATAU PERUSAHAAN
            </label>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Contoh: Frontend Developer"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-bold text-gray-500">
              LOKASI PEKERJAAN
            </label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Contoh: Semarang"
              className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <button
            onClick={() => document.getElementById("lowongan")?.scrollIntoView({ behavior: "smooth" })}
            className="self-end rounded-lg bg-emerald-700 px-8 py-3 font-semibold text-white hover:bg-emerald-800"
          >
            Cari Lowongan
          </button>
        </div>
      </section>

      {/* KATEGORI */}
      <section id="kategori" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="mb-9">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Jelajahi pekerjaan
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
            Cari berdasarkan kategori
          </h2>
          <p className="mt-2 text-gray-500">
            Temukan pekerjaan sesuai bidang keahlianmu.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setCategory(item.name);
                document.getElementById("lowongan")?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`rounded-2xl border p-5 text-left transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg ${
                category === item.name
                  ? "border-emerald-600 bg-emerald-50"
                  : "border-gray-100 bg-white"
              }`}
            >
              <span className="text-3xl">{item.icon}</span>
              <h3 className="mt-4 font-bold text-gray-800">{item.name}</h3>
              <p className="mt-1 text-xs text-gray-500">{item.count} pekerjaan</p>
            </button>
          ))}
        </div>
      </section>

      {/* LOWONGAN */}
      <section id="lowongan" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
                Peluang karier
              </p>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
                Lowongan pilihan
              </h2>
              <p className="mt-2 text-gray-500">
                Pilihan pekerjaan yang mungkin cocok untukmu.
              </p>
            </div>

            <button
              onClick={() => {
                setCategory("Semua");
                setType("Semua");
                setKeyword("");
                setLocation("");
              }}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-50"
            >
              Reset filter
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-emerald-600"
            >
              <option value="Semua">Semua kategori</option>
              {categories.map((item) => (
                <option key={item.name} value={item.name}>{item.name}</option>
              ))}
            </select>

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-emerald-600"
            >
              <option value="Semua">Semua tipe pekerjaan</option>
              <option value="FULL_TIME">Full-time</option>
              <option value="PART_TIME">Part-time</option>
              <option value="INTERNSHIP">Magang</option>
              <option value="CONTRACT">Kontrak</option>
              <option value="FREELANCE">Freelance</option>
            </select>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Menampilkan <strong>{filteredJobs.length}</strong> lowongan
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.map((job) => (
              <article
                key={job.id}
                className="group rounded-2xl border border-gray-100 bg-white p-6 transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
              >
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl text-xl font-extrabold text-gray-700"
                    style={{ backgroundColor: job.color }}
                  >
                    {job.logo}
                  </div>
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {typeLabels[job.type]}
                  </span>
                </div>

                <h3 className="mt-5 text-lg font-bold text-gray-900 group-hover:text-emerald-700">
                  {job.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{job.company}</p>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {job.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-md bg-gray-100 px-3 py-1.5 text-xs text-gray-600">
                    📍 {job.location}
                  </span>
                  <span className="rounded-md bg-gray-100 px-3 py-1.5 text-xs text-gray-600">
                    {job.category}
                  </span>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                  <div>
                    <p className="text-xs text-gray-400">Estimasi gaji</p>
                    <p className="mt-1 font-bold text-emerald-700">{job.salary}</p>
                  </div>
                  <a
                    href={`/jobs/${job.id}`}
                    className="rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
                  >
                    Lihat Detail
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-gray-300 py-16 text-center">
              <p className="text-4xl">🔎</p>
              <h3 className="mt-4 font-bold text-gray-800">
                Lowongan tidak ditemukan
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Coba ubah kata kunci atau filter pencarianmu.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PERUSAHAAN */}
      <section id="perusahaan" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-700">
            Kenali perusahaan
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
            Perusahaan di KerjaKita
          </h2>
          <p className="mt-3 text-gray-500">
            Temukan tempat terbaik untuk mengembangkan kariermu.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-2xl font-extrabold text-gray-700"
                style={{ backgroundColor: company.color }}
              >
                {company.logo}
              </div>
              <h3 className="mt-4 font-bold text-gray-800">{company.name}</h3>
              <p className="mt-2 text-xs text-gray-500">Lihat peluang karier</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
        <div className="rounded-3xl bg-emerald-800 px-7 py-12 text-center md:px-16 md:py-16">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Siap menemukan pekerjaan impianmu?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-emerald-100">
            Bergabung bersama KerjaKita dan mulai langkah baru dalam perjalanan kariermu.
          </p>
          <a
            href="/register"
            className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-bold text-emerald-800 hover:bg-emerald-50"
          >
            Mulai Sekarang
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#123b30] text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 py-10 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-extrabold">
              KerjaKita<span className="text-lime-300">.</span>
            </h2>
            <p className="mt-2 text-sm text-emerald-100">
              Temukan peluang, bangun masa depan.
            </p>
          </div>
          <p className="text-sm text-emerald-100">
            © 2026 KerjaKita. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
