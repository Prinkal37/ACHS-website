export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-blue-900 text-white p-6 space-y-6">
        <div className="font-bold text-2xl mb-8">Student Dashboard</div>
        <nav className="space-y-2">
          <div className="hover:bg-blue-700 rounded px-3 py-2 cursor-pointer">View Results</div>
          <div className="hover:bg-blue-700 rounded px-3 py-2 cursor-pointer">Class Info</div>
          <div className="hover:bg-blue-700 rounded px-3 py-2 cursor-pointer">Announcements</div>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Welcome, Student!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow">[View Results Placeholder]</div>
          <div className="bg-white p-6 rounded shadow">[Class Info Placeholder]</div>
          <div className="bg-white p-6 rounded shadow">[Announcements Placeholder]</div>
        </div>
      </main>
    </div>
  );
}
