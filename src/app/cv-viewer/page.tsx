"use client";
// CV Viewer Page

import { useEffect } from "react";

export default function CVViewer() {
  useEffect(() => {
    // Log to help with debugging
    console.log("CV Viewer page loaded");
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">CV Viewer</h1>
      <div className="w-full max-w-4xl h-[80vh] border rounded">
        <embed
          src="/Piyush_Yadav_Resume.pdf"
          type="application/pdf"
          className="w-full h-full"
        />
      </div>
      <div className="mt-4">
        <a
          href="/Piyush_Yadav_Resume.pdf"
          download="CV_Piyush.pdf"
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
