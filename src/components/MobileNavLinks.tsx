import { Link } from "react-router-dom";
import { LogoutButton } from "@/components";
import { NAVBAR_LINKS } from "@/lib/links";

export const MobileNavLinks = () => (
  <>
    {NAVBAR_LINKS.map(({ label, path }) => (
      <Link
        key={path}
        to={path}
        className="flex bg-white items-center font-bold hover:text-orange-500"
      >
        {label}
      </Link>
    ))}
    <LogoutButton className="flex items-center px-3 font-bold hover:bg-gray-500" />
  </>
);
