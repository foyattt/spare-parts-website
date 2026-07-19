import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import SearchBar from '../components/ui/SearchBar';
import CategoryChip from '../components/ui/CategoryChip';
import Pagination from '../components/ui/Pagination';
import SectionHeader from '../components/ui/SectionHeader';
import ProductCard from '../components/common/ProductCard';
import EmptyState from '../components/ui/EmptyState';
import LoadingSkeleton from '../components/ui/LoadingSkeleton';
import { CATEGORIES } from '../data/company';
import { useProductFilter } from '../hooks/useProductFilter';
import { fadeIn } from '../utils/animations';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [loading, setLoading] = useState(true);

  const {
    search,
    category,
    page,
    filtered,
    paginated,
    totalPages,
    setSearch,
    setCategory,
    setPage,
  } = useProductFilter(initialCategory);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (category === 'All') {
          next.delete('category');
        } else {
          next.set('category', category);
        }
        return next;
      },
      { replace: true },
    );
  }, [category, setSearchParams]);

  return (
    <div className="bg-background min-h-screen py-10 lg:py-14">
      <div className="container-custom">
        <motion.div variants={fadeIn} initial="hidden" animate="visible">
          <Breadcrumbs items={[{ label: 'Products' }]} />

          <SectionHeader
            align="left"
            title="Product Catalogue"
            subtitle="Browse our comprehensive range of genuine and high-quality Sinotruk spare parts for HOWO and SITRAK vehicles."
            className="mb-8"
          />

          <div className="mb-8 max-w-xl">
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search by product name, category, or description..."
            />
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <CategoryChip
                key={cat}
                label={cat}
                active={category === cat}
                onClick={() => setCategory(cat)}
              />
            ))}
          </div>

          <p className="mb-6 text-sm text-muted">
            Showing {paginated.length} of {filtered.length} products
            {category !== 'All' && ` in ${category}`}
          </p>
        </motion.div>

        {loading ? (
          <LoadingSkeleton count={8} />
        ) : paginated.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {paginated.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={setPage}
            />
          </>
        ) : (
          <EmptyState
            title="No products found"
            description="We couldn't find any products matching your search. Try a different keyword or category."
            actionLabel="Clear Filters"
            onAction={() => {
              setSearch('');
              setCategory('All');
            }}
          />
        )}
      </div>
    </div>
  );
}
