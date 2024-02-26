import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui";

type LogoutButtonProps = {
  className?: string;
};

export const LogoutButton = ({ className }: LogoutButtonProps) => {
  const { logout } = useAuth0();

  const logoutHandler = () => logout();

  return (
    <Button onClick={logoutHandler} className={className}>
      Log Out
    </Button>
  );
};
