export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold">MyLogo</div>

      {/* Links */}
      <ul className="hidden md:flex space-x-6">
        <li><a href="#" className="hover:text-blue-200">Home</a></li>
        <li><a href="#" className="hover:text-blue-200">About</a></li>
        <li><a href="#" className="hover:text-blue-200">Services</a></li>
        <li><a href="#" className="hover:text-blue-200">Contact</a></li>
      </ul>

      {/* Button */}
      <button className="md:hidden bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100">
        Menu
      </button>
    </nav>
  );
}
