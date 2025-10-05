import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sky-500 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">GLAZE PRO</h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Premium architectural and decorative glass solutions for modern
            spaces.
          </p>

          <h3 className="text-xl font-semibold text-white mb-2">Contact Us</h3>
          <p>
            <span className="font-medium">Address:</span> 123 Glass Tower,
            Skyline Road, New Delhi, India
          </p>
          <p>
            <span className="font-medium">Phone:</span> +91 98765 43210
          </p>
          <p>
            <span className="font-medium">Email:</span> contact@glazepro.com
          </p>
          <p>
            <span className="font-medium">Hours:</span> Mon – Sat: 9:00 AM –
            7:00 PM
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-wider mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#home" className="text-blue-100 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services" className="text-blue-100 hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="#projects" className="text-blue-100 hover:text-white">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-blue-100hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Resources */}
        <div>
          <h3 className="text-sm font-semibold text-white tracking-wider mb-4">
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-blue-100 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-blue-100 hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-blue-100 hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-blue-100 hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        {/* Socials */}{" "}
        <div>
          {" "}
          <h3 className="text-sm font-semibold text-white tracking-wider mb-4">
            {" "}
            Follow Us{" "}
          </h3>{" "}
          <div className="flex space-x-4">
            {" "}
            {/* Facebook */}{" "}
            <a href="#" className="text-blue-100 hover:text-white">
              {" "}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {" "}
                <path d="M22 12a10 10 0 1 0-11 9.95V15.5h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 2 .1v2.3h-1.2c-1 0-1.3.6-1.3 1.2V12h2.5l-.4 3h-2.1v6.45A10 10 0 0 0 22 12" />{" "}
              </svg>{" "}
            </a>{" "}
            {/* Twitter */}{" "}
            <a href="#" className="text-blue-100 hover:text-white">
              {" "}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {" "}
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.14 12.14 0 0 1 3.15 4.6a4.28 4.28 0 0 0 1.32 5.71 4.22 4.22 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.44 4.2 4.3 4.3 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.97 8.59 8.59 0 0 1-5.3 1.83A8.75 8.75 0 0 1 2 19.54a12.11 12.11 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19-.01-.38-.02-.57A8.7 8.7 0 0 0 22.46 6" />{" "}
              </svg>{" "}
            </a>{" "}
            {/* LinkedIn */}{" "}
            <a href="#" className="text-blue-100 hover:text-white">
              {" "}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {" "}
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2 8.99h6v12H2v-12zm8 0h5.5v1.64h.08c.77-1.47 2.66-3 5.48-3 5.87 0 6.96 3.87 6.96 8.91v10.45h-6v-9.25c0-2.21-.04-5.06-3.08-5.06-3.09 0-3.56 2.42-3.56 4.92v9.39h-6v-12z" />{" "}
              </svg>{" "}
            </a>{" "}
            {/* Instagram */}{" "}
            <a href="#" className="text-blue-100 hover:text-white">
              {" "}
              <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                {" "}
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.5-.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />{" "}
              </svg>{" "}
            </a>{" "}
          </div>{" "}
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-white">
        <p>&copy; {new Date().getFullYear()} Glaze Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}
