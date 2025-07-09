// src/pages/UnauthorizedPage.tsx

import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const UnauthorizedPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <Lock className="w-16 h-16 text-red-500 mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">403 - Unauthorized</h1>
      <p className="text-gray-600 text-base mb-6">
        You don’t have permission to access this page.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium"
      >
        Go back home
      </button>
    </div>
  );
};
