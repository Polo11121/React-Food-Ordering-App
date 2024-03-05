import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui";

type CheckoutButtonProps = {
  isDisabled?: boolean;
};

export const CheckoutButton = ({ isDisabled }: CheckoutButtonProps) => {
  const { isAuthenticated, loginWithRedirect, isLoading } = useAuth0();
  const { pathname } = useLocation();

  const loginHandler = async () =>
    await loginWithRedirect({ appState: { returnTo: pathname } });

  if (!isAuthenticated) {
    return (
      <Button onClick={loginHandler} className="bg-orange-500 flex-1">
        Log in to checkout
      </Button>
    );
  }

  return (
    <Button
      className="bg-orange-500 flex-1"
      disabled={isDisabled}
      isLoading={isLoading}
    >
      {isDisabled ? "Add items to cart" : "Checkout"}
    </Button>
  );
};
