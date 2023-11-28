import React from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { SearchUserByNameQueryResult } from "javascript/__generated__/network_gql";
interface ISearchUIProps {
  loading: boolean;
  data: SearchUserByNameQueryResult["data"];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}
export const SearchUI: React.FC<ISearchUIProps> = ({
  data,
  loading,
  searchTerm,
  setSearchTerm,
}) => {
return (
    <Autocomplete
      // suggestions return from query
      options={data?.searchByUser?.userProfiles || []}
      loading={loading} // query loading state
      renderInput={(params) => (
        <TextField
          {...params}
          value={searchTerm} //search term value
          //update search term state on field change
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      )}
    />
  );
};