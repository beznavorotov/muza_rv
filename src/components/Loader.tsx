import React from "react";

export function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-serif text-yellow-500 mb-5">MUZA</h1>
        <div className="w-12 h-12 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
