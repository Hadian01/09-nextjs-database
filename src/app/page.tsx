//import CardWrapper, { Card } from '@/app/components/molecules/card';
import RevenueChart from '@/app/components/molecules/revenue-chart';
import LatestInvoices from '@/app/components/molecules/latest-invoices';
import { lusitana } from '@/app/components/atoms/fonts';

export default async function Page() {
  return (
    <main>
      <div className='p-8'>
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
          Dashboard
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
       
        </div>
        <div className="flex flex-rows gap-8">
          <RevenueChart />
          <LatestInvoices />
        </div>
      </div>
    </main>
  );
}