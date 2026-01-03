export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Get in touch with Prakash Tax Solutions for reliable service
        </p>

        {/* Contact Info + Map */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Office Info</h2>
            <p><strong>Owner:</strong> Prakash Chandra Dalui</p>
            <p><strong>Phone:</strong> 9734350935</p>
            <p><strong>Email:</strong> prakashchandra.dalui@gmail.com</p>
            <p><strong>Working Hours:</strong> Mon–Sat 10 AM – 8 PM</p>
            <p className="mt-4"><strong>Main Branch:</strong> Dasghara, Hooghly, WB</p>
            <p><strong>Outside Branch:</strong> Bandel, Hooghly, WB</p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Find Us on Map</h2>
            <iframe
              title="Prakash Tax Solutions Map"
              src="https://www.google.com/maps?q=Dasghara,Hooghly,West%20Bengal&output=embed"
              width="100%"
              height="300"
              className="rounded-lg border"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-blue-600 font-semibold hover:underline">Facebook</a>
            <a href="#" className="text-pink-600 font-semibold hover:underline">Instagram</a>
          </div>
        </div>

      </div>
    </div>
  );
}
