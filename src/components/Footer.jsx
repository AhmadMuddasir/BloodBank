import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center font-light">
        <p>&copy; {new Date().getFullYear()} D Blood Bank</p>
      </div>
    </footer>
  )
}

export default Footer