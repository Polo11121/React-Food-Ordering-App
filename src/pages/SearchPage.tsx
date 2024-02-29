import { useParams } from "react-router";

export const SearchPage = () => {
  const { city } = useParams();

  return <div>User searched for {city}</div>;
};
