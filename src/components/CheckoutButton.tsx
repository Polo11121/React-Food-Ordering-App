import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button, Dialog, DialogContent, DialogTrigger } from "@/components/ui";
import { UserProfileForm } from "@/components/forms";
import { useGetMyUser } from "@/api/myUserApi";
import { UpdateUserSchema } from "@/validationSchemas/updateUserProfile";

type CheckoutButtonProps = {
  isDisabled?: boolean;
  onCheckout: (data: UpdateUserSchema) => void;
  isLoading?: boolean;
};

export const CheckoutButton = ({
  isDisabled,
  onCheckout,
  isLoading,
}: CheckoutButtonProps) => {
  const { data: user, isLoading: isUserLoading } = useGetMyUser();
  const {
    isAuthenticated,
    loginWithRedirect,
    isLoading: isAuthLoading,
  } = useAuth0();
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
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-orange-500 flex-1"
          disabled={isDisabled}
          isLoading={isAuthLoading}
        >
          {isDisabled ? "Add items to cart" : "Checkout"}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50">
        <UserProfileForm
          user={user}
          onSubmit={onCheckout}
          isLoading={Boolean(isUserLoading || isLoading)}
          title="Confirm Delivery Details"
          buttonText="Continue to Payment"
          isDisabled={false}
        />
      </DialogContent>
    </Dialog>
  );
};
