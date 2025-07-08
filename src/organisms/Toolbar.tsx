// import { Logo } from "../atoms/Logo";
import { TopNav } from "./TopNav";
import { MainNav } from "./MainNav";
import { AuthButtons } from "../molecules/AuthButtons";
import Logo from "../assets/Logo.png";
export const Toolbar = () => {
    return (
        <header className="border-b border-gray-200 bg-white w-full">
            <div className="w-full bg-[#848FA3]">
                <div className="max-w-7xl mx-auto flex justify-end items-end space-x-10 w-full bg-[#848FA3] px-9 py-2 ">
                    <TopNav />
                </div>
            </div>
            <div className=" mx-auto flex flex-col justify-between items-center px-14 py-2 ">
                <div className="flex justify-between items-center space-x-6 w-full">
                    <div className="flex justify-center items-center">
                        <img src={Logo} alt="Logo" className="h-10 w-auto mr-5" />
                        <MainNav />
                    </div>
                    <AuthButtons />
                </div>
            </div>
        </header>
    );
};
