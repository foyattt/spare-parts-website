import { useMemo, useState } from 'react';
import { PRODUCTS, ITEMS_PER_PAGE } from '../data/products';

export function useProductFilter(initialCategory = 'All') {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(initialCategory);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return PRODUCTS.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category;
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));

  const paginated = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filtered.slice(start, start + ITEMS_PER_PAGE);
  }, [filtered, page]);

  const handleSearchChange = (value) => {
    setSearch(value);
    setPage(1);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(Math.min(Math.max(1, newPage), totalPages));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return {
    search,
    category,
    page,
    filtered,
    paginated,
    totalPages,
    setSearch: handleSearchChange,
    setCategory: handleCategoryChange,
    setPage: handlePageChange,
  };
}
