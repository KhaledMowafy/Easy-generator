import { useEffect, useState } from "react";
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
export const AuthButtons = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({name:null, email:null});

  useEffect(() => {
    const loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      setUser(JSON.parse(loggedIn));
    }
  }, []);

  const handleLogout = ()=>{
    localStorage.clear();
    window.location.reload();
  }
  return (
    <div className="flex space-x-3 justify-center items-center">
      {user.name!==null ? (
        <div className="flex justify-center items-center">
        <h6 className="text-2xl font-semibold ">Hello, {user.name}</h6>
        <Button
          variant="outline"
          className="text-sm"
          onClick={handleLogout}
        >
          Log Out
        </Button>
        </div>
      ) : (
        <Button
          variant="outline"
          className="text-sm"
          onClick={() => navigate("/sign-in")}
        >
          Log In
        </Button>
      )}

      <Button variant="outline" className="text-sm" onClick={()=>navigate('/protected')}>
        Protected route
      </Button>
      <Button variant="solid" className="text-sm">
        Start Free Trial
      </Button>
    </div>
  );
};
