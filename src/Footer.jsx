import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-800 text-center p-4">
      <p className="text-gray-500 text-sm">
        © {currentYear} Harshwardhan Kunde Production. All Rights Reserved.
      </p>
    </footer>
  );
}
