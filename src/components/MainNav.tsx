import { Button } from "@/components/ui";
import { useAuth0 } from "@auth0/auth0-react";
import { UsernameMenu } from "@/components";

export const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const loginHandler = async () => await loginWithRedirect();

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          onClick={loginHandler}
          variant="ghost"
          className="font-bold text-xl hover:text-orange-500 hover:bg-white"
        >
          Log In
        </Button>
      )}
    </span>
  );
};
