import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-blue-600 text-white px-6 py-3 shadow">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="font-bold text-xl">MyCompany</div>
        <ul className="hidden md:flex gap-6">
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>
        {/* mobile placeholder */}
        <button className="md:hidden border px-3 py-1 rounded">Menu</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
