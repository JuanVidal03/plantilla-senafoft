import React from 'react'
import statisticsChartsData from '../data/statistics-charts-data'
import StatisticsChart from '../components/statistics-chart'
import { SideBar } from '../components/SideBar'

export const Charts = () => {
  return (
    <section className='flex  mt-10 gap-5'>
        <SideBar/>
    <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">

    {statisticsChartsData && statisticsChartsData.map((props) => (
      <StatisticsChart
        key={props.title}
        {...props}
      />
    ))}
  </div>
    </section>
  )
}
