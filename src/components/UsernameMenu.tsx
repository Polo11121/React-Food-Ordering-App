import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator,
} from "@/components/ui";
import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const UsernameMenu = () => {
  const location = useLocation();
  const { user, logout } = useAuth0();

  const logoutHandler = () => logout();

  return (
    <DropdownMenu key={location.pathname}>
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
        <CircleUserRound className="text-orange-500" />
        {user?.email}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>
          <Link className="font-bold hover:text-orange-500" to="/user-profile">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            onClick={logoutHandler}
            className="flex flex-1 font-bold bg-orange-500"
          >
            Log out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
