// import { useState, useEffect, ReactNode } from 'react'
import { useQuery } from '@tanstack/react-query'
import './SidePanel.css'
import MetricsPanel from './MetricsPanel'
import type { SummaryDataType } from '../types'
import ProvidersPanel from './ProvidersPanel'
import TogglePanel from './TogglePanel'


const getCsbStatistics = async (): Promise<SummaryDataType> => {
  const response = await fetch(
    'https://order-pickup.s3.amazonaws.com/csb_statistics.json',
  )
  return await response.json()
}


function useCsbStatistics() {
  return useQuery({
    queryKey: ['csbStatistics'],
    queryFn: () => getCsbStatistics()
  })
}


export default function SidePanel() {
  const baseClass = 'SidePanel'
  
  const { status, data, error, isFetching } = useCsbStatistics()
  
  return (
    <div className={baseClass}>
      {status === 'pending' ? (
          'Loading...'
        ) : status === 'error' ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
          <MetricsPanel data={data} />
          <hr/>
          <ProvidersPanel data={data} />
          <hr/>
          <TogglePanel data={data} />
          </>
        )
      }
    </div>
  )
}