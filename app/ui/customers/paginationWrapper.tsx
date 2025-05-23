import { fetchCustomersPages } from "@/app/lib/data";
import Pagination from "@/app/ui/invoices/pagination";

export default async function PaginationWrapper({ query }: { query: string }) {
  const totalPages = await fetchCustomersPages(query);

  return (
    <div className="mt-5 flex w-full justify-center">
      <Pagination totalPages={totalPages} />
    </div>
  )
}
