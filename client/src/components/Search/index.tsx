import React, { useState } from "react";
// import { useSearchUserByNameQuery } from "javascript/__generated__/network_gql";
import { SearchUI } from "./SearchUI";
interface ISearchProps {}
export const Search: React.FC<ISearchProps> = ({}) => {
  //search term state
  const [searchTerm, setSearchTerm] = useState<string>("");
  //query to get suggestions
  const { data, loading } = useSearchUserByNameQuery({
    variables: {
      input: searchTerm,
    },
  });
  return (
    <SearchUI
      loading={loading}
      data={data} // search suggestions returned
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
    />
  );
};