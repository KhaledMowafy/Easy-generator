// src/pages/AuthorizedPage.tsx

import { ShieldCheck } from "lucide-react";

export const AuthorizedPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 text-center px-4">
      <ShieldCheck className="w-16 h-16 text-green-500 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Access Granted</h1>
      <p className="text-gray-600 text-base mb-6">
        You are authorized to view this content.
      </p>
      <a
        href="/"
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium"
      >
        Return Home
      </a>
    </div>
  );
};
