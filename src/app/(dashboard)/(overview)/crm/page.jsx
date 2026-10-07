import React from 'react'
import CRMStats from '@/components/crm/CRMStats'
import DealPipeline from '@/components/crm/DealPipeline'
import MonthlyDealFlow from '@/components/crm/MonthlyDealFlow'
import TopDeals from '@/components/crm/TopDeals'
import TeamPerformance from '@/components/crm/TeamPerformance'
import RecentActivities from '@/components/crm/RecentActivities'


export default function page() {
  return (
    <>
      <p className='text-2xl font-bold tracking-tight sm:text-3xl'>Pipeline & Deals</p>
      <p className='tmt-1 text-sm text-muted-foreground'>Track your sales funnel, monitor deal velocity, and close faster.</p>
      <CRMStats />
      <DealPipeline />
      <div className='mt-6 grid grid-cols-1 gap-4 xl:grid-cols-12'>
        <MonthlyDealFlow />
        <TopDeals />
      </div>
      <div className='mt-6 grid grid-cols-1 gap-4 xl:grid-cols-12'>
        <TeamPerformance />
        <RecentActivities />
      </div>

    </>
  )
}
