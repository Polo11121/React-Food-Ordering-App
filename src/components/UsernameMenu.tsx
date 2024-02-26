import { Fragment } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator,
} from "@/components/ui";
import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { LogoutButton } from "@/components";
import { NAVBAR_LINKS } from "@/lib/links";

export const UsernameMenu = () => {
  const location = useLocation();
  const { user } = useAuth0();

  return (
    <DropdownMenu key={location.pathname}>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {NAVBAR_LINKS.map(({ label, path }) => (
          <Fragment key={path}>
            <DropdownMenuItem>
              <Link className="font-bold hover:text-orange-500" to={path}>
                {label}
              </Link>
            </DropdownMenuItem>
            <Separator />
          </Fragment>
        ))}
        <DropdownMenuItem>
          <LogoutButton className="flex flex-1 font-bold bg-orange-500" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
