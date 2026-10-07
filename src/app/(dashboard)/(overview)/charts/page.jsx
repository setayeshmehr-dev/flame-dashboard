import React from 'react'


import TeamSkillsAssessment from '@/components/chart/TeamSkillsAssessment'
import DeviceUsage from '@/components/chart/DeviceUsage'
import MarketingSpendChart from '@/components/chart/MarketingSpendChart'
import BudgetAllocation from '@/components/chart/BudgetAllocation'

export default function page() {
  return (
    <>
      <p className='text-2xl font-bold tracking-tight sm:text-3xl'>Charts</p>
      <p className='tmt-1 text-sm text-muted-foreground'>Explore different chart types available in the dashboard.</p>
      <div className='grid grid-cols-1 gap-4 xl:grid-cols-2 mt-6'>
        <TeamSkillsAssessment />
        <DeviceUsage />
      </div>
      <div className='grid grid-cols-1 gap-4 xl:grid-cols-12 mt-6'>
        <MarketingSpendChart />
        <BudgetAllocation />
      </div>
    </>
  )
}
