import { CustomersTableSkeleton } from "@/app/ui/skeletons";
import Table from '@/app/ui/customers/table';
import { Metadata } from "next";
import { Suspense } from "react";
import PaginationWrapper from "@/app/ui/customers/paginationWrapper";


export const metadata: Metadata = { title: 'Customers' };

export default async function Page(props: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const searchParams = await props.searchParams || {};
  const query = searchParams.query || '';
  const currentPage = Number(searchParams.page) || 1;

  return (
    <div className="w-full">
      <Suspense key={query + currentPage} fallback={<CustomersTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>
      <Suspense fallback={<div>Loading pagination...</div>}>
        <PaginationWrapper query={query} />
      </Suspense>
    </div>
  );
}
