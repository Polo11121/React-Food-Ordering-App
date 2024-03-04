import { FallbackProps } from "react-error-boundary";
import { Button } from "@/components/ui";
import { Footer, Header } from "@/components";
import { useNavigate } from "react-router-dom";

export const ErrorScreen = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/");
    resetErrorBoundary();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header showNav={false} />
      <div className="flex flex-col flex-1 items-center justify-center">
        <img src="/errorPizza.png" className="w-96 h-96" />
        <div className="text-center leading-none -mt-10">
          <h1 className="text-[4rem] font-semibold text-orange-500 line">
            {error.message}
          </h1>
          <h2 className="text-[rem]">
            Something went wrong. Please try again later.
          </h2>
          <Button onClick={clickHandler} className="mt-2">
            Home Page
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};
