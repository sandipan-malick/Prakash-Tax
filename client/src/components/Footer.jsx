export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Prakash Tax Solutions
          </h2>
          <p className="text-sm">
            Trusted tax & documentation services with accuracy and transparency.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p>📞 9734350935</p>
          <p>✉️ prakashchandra.dalui@gmail.com</p>
          <p>📍 Hooghly, West Bengal</p>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="font-semibold mb-3">Working Hours</h3>
          <p>Monday – Saturday</p>
          <p>10:00 AM – 8:00 PM</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm bg-blue-950 py-4">
        © {new Date().getFullYear()} Prakash Tax Solutions. All Rights Reserved.
      </div>
    </footer>
  );
}
