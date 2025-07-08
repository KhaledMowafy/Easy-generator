
import { Button } from "../atoms/Button";
import { useNavigate } from "react-router-dom";
export const AuthButtons = () => {
    const navigate = useNavigate()
  return (
    <div className="flex space-x-3">
      <Button variant="outline" className="text-sm" onClick={()=>navigate('/sign-in')}>
        Log In
      </Button>
      <Button variant="outline" className="text-sm">
        Book a demo
      </Button>
      <Button variant="solid" className="text-sm">
        Start Free Trial
      </Button>
    </div>
  );
};
