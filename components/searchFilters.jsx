import React, { useState } from 'react';
import { filterData, getFilterValues } from '../utils/filterData';
import { filter, Select } from '@chakra-ui/react';
import router from 'next/router';
const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);
    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        console.log('ho');
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };
  return (
    <div className="flex justify-center  bg-gray-100 p-4 flex-wrap">
      {filters.map((filter) => (
        <div key={filter.queryName}>
          <Select
            width="fit-content"
            p="2"
            placeholder={filter.placeholder}
            onChange={(e) => {
              searchProperties({
                [filter.queryName]: e.target.value,
              });
            }}
          >
            {filter.items.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </div>
      ))}
    </div>
  );
};

export default SearchFilters;
