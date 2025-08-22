/*
============================================================
File: src/Footer.jsx (Nayi File)
============================================================
*/
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Yeh apne aap saal le lega

  return (
    <footer className="w-full bg-gray-900 text-center p-4 mt-auto">
      <p className="text-gray-500 text-sm">
        © {currentYear} Harshwardhan Kunde Production. All Rights Reserved.
      </p>
    </footer>
  );
}
