import { SearchRestaurantsSchema } from "@/validationSchemas/searchRestaurants";
import { SearchBar } from "@/components";
import { useNavigate } from "react-router";

export const HomePage = () => {
  const navigate = useNavigate();

  const searchSubmitHandler = (data: SearchRestaurantsSchema) =>
    navigate(`/search/${data.searchQuery}`);

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-2xl md:text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <div className="text-xl">Food is just a click away!</div>
        <SearchBar
          onSubmit={searchSubmitHandler}
          placeholder="Search by City or Town"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src="/landing.png" alt="phones image" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3-xl tracking-tighter">
            Order takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src="/appDownload.png" alt="mobile applications image" />
        </div>
      </div>
    </div>
  );
};
