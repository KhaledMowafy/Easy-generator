import { useEffect, useState } from "react";
import { UnauthorizedPage } from "./Unauthorized";
import { AuthorizedPage } from "./Authorized";
const ProtectedComponent = () => {
  const [authorized, setAuthorized] = useState<boolean>(false);

  const getProtectedData = async (): Promise<any> => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (!token) {
      throw new Error("No access token found");
    }

    const response = await fetch("http://localhost:3000/auth/protected", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Unauthorized");
    }

    return response.json();
  };

  useEffect(() => {
    getProtectedData()
      .then(() => setAuthorized(true))
      .catch(() => setAuthorized(false));
  }, []);

  return <>{authorized ? <AuthorizedPage /> : <UnauthorizedPage />}</>;
};

export default ProtectedComponent;
