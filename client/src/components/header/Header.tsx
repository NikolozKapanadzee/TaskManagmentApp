import { Moon } from "lucide-react";
import FileCheckIcon from "../../assets/icons/FileCheckIcon";

const Header = () => {
  return (
    <header className="flex items-center justify-between pt-4 mx-12">
      <div className="flex items-center gap-2">
        <FileCheckIcon />
        <span className="font-semibold text-[20px]">TaskFlow</span>
      </div>
      <button className="w-9 h-9 inline-flex items-center justify-center cursor-pointer rounded-l hover:bg-gray-100">
        <Moon size={16} />
      </button>
    </header>
  );
};

export default Header;
