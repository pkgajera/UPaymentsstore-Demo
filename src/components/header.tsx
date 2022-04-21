import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-row-1">
      <div className="grid grid-cols-2 mt-5 py-3 bg-white rounded-md shadow-md radial-bg">
        <div
          onClick={() => navigate("/")}
          className="text-3xl font-bold my-1 cursor-pointer flex flex-col ml-4 justify-center"
        >
          UPayments Store
        </div>
        <div className="flex items-center justify-end mr-4 cursor-pointer">
          <div className="text-3xl font-bold my-1 flex flex-col ml-4 justify-center">
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
