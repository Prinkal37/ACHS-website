export default function Contact() {
  return (
    <section className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-4 rounded shadow-sm flex items-center justify-center min-h-[200px]">[Map Placeholder]</div>
        <form className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Send a Message</h2>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" className="w-full border rounded px-3 py-2" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Message</label>
            <textarea className="w-full border rounded px-3 py-2" rows={4} placeholder="Your Message" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Send</button>
        </form>
      </div>
    </section>
  );
}
