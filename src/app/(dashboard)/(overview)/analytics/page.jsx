import React from 'react'
import AnalyticsStats from '@/components/analytics/AnalyticsStats'
import ConversionFunnel from '@/components/analytics/ConversionFunnel'
import UserRetentionCohort from '@/components/analytics/UserRetentionCohort'
import TopUserActions from '@/components/analytics/TopUserActions'
import UsersByRegion from '@/components/analytics/UsersByRegion'
import ActiveUsersTrend from '@/components/analytics/ActiveUsersTrend'

export default function page() {
  return (
    <>
    <div className=' overflow-hidden rounded-2xl bg-linear-to-br from-primary to-secondary from-25%  to-85% p-6 text-white sm:p-8'>
      <h3 className='text-2xl font-bold tracking-tight sm:text-3xl' >Sales & Analytics</h3>
      <span className='mt-1 text-sm text-white/70'>Monitor revenue performance, sales metrics, customer activity, and growth trends</span>
    </div>
        <AnalyticsStats></AnalyticsStats>
        <ConversionFunnel></ConversionFunnel>
        <div className='mt-6 grid grid-cols-1 gap-4 xl:grid-cols-12'>
          <UserRetentionCohort></UserRetentionCohort>
          <TopUserActions></TopUserActions>
        </div>
        <div className='mt-6 grid grid-cols-1 gap-4 xl:grid-cols-12'>
          <UsersByRegion></UsersByRegion>
          <ActiveUsersTrend></ActiveUsersTrend>
        </div>
    </>
  )
}
