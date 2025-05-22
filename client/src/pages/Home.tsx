export default function Home() {
  return (
    <section className="container mx-auto py-12 px-4">
      {/* Hero Section */}
      <div className="mb-10">
        <div className="bg-gradient-to-r from-blue-500 to-blue-300 rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:w-1/2">
            <h1 className="text-4xl font-bold mb-4 text-white drop-shadow">Nurturing Bright Futures</h1>
            <p className="text-lg text-blue-100 mb-6">Welcome to our school website!</p>
            <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded shadow hover:bg-blue-50 transition">Contact Us</button>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-6 text-blue-800">Highlights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-400">
            <h3 className="font-bold text-lg mb-2 text-blue-700">Modern Classrooms</h3>
            <p className="text-gray-600">State-of-the-art facilities for a great learning experience.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-t-4 border-green-400">
            <h3 className="font-bold text-lg mb-2 text-green-700">Experienced Faculty</h3>
            <p className="text-gray-600">Our teachers are passionate and highly qualified.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 border-t-4 border-yellow-400">
            <h3 className="font-bold text-lg mb-2 text-yellow-700">Vibrant Student Life</h3>
            <p className="text-gray-600">Clubs, sports, and events for all-round development.</p>
          </div>
        </div>
      </div>

      {/* Academic Results Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Academic Results</h2>
        <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          {/* Placeholder for chart */}
          <div className="w-full h-48 flex items-center justify-center text-blue-400">[Academic Results Chart]</div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4 text-blue-800">Testimonials</h2>
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg shadow flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <p className="text-lg italic text-gray-700 mb-2">"This school has changed my child's life! The teachers truly care."</p>
            <div className="text-sm text-blue-700 font-semibold">- Parent</div>
          </div>
          <div className="flex-1">
            <p className="text-lg italic text-gray-700 mb-2">"I love the activities and my friends here!"</p>
            <div className="text-sm text-blue-700 font-semibold">- Student</div>
          </div>
        </div>
      </div>
    </section>
  );
}
