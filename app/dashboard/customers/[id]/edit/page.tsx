import Form from '@/app/ui/customers/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomerById } from '@/app/lib/data';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {  title: 'Edit Invoice' };

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;
  const customer = await fetchCustomerById(id);

  if (!customer) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customer', href: '/dashboard/customer' },
          {
            label: 'Edit Customer',
            href: `/dashboard/customer/${id}/edit`,
            active: true,
          },
        ]}
      />
      <Form customer={customer} />
    </main>
  );
}
