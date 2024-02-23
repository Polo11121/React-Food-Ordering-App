import { CircleUserRound, Menu } from "lucide-react";
import { MobileNavLinks } from "@/components";
import {
  Button,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui";
import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

export const MobileNav = () => {
  const location = useLocation();
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  const loginHandler = async () => await loginWithRedirect();

  return (
    <Sheet key={location.pathname}>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2">
              <CircleUserRound className="text-orange-500" />
              {user?.email}
            </span>
          ) : (
            <span>Welcome to MernEets.com!</span>
          )}
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={loginHandler}
              className="flex-1 font-bold bg-orange-500"
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
