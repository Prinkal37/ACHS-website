export default function Admissions() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Admissions</h1>
      <form className="bg-white p-6 rounded shadow-md mb-6 max-w-lg mx-auto">
        <h2 className="text-xl font-semibold mb-4">Apply Now</h2>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Your Name" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" className="w-full border rounded px-3 py-2" placeholder="Your Email" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Class Applying For</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="Class" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
      <div className="bg-gray-50 p-4 rounded shadow-sm text-center">[Downloadable PDFs placeholder]</div>
    </section>
  );
}
