import './TogglePanel.css'
import ArchiveGrowthChart from './ArchiveGrowthChart'
import FiscalYearCountsPanel from './FiscalYearCountsPanel'
import { useState } from 'react'
import type { SummaryDataType } from '../types'

interface AppProps {
  data: SummaryDataType
}

export default function TogglePanel({data}: AppProps) {
  const [visibleComponent, setVisibleComponent] = useState('chart')
  const baseClass = 'TogglePanel'


  function toggleVisible() {
    if (visibleComponent === 'chart') {
      setVisibleComponent('table')
    } else {
      setVisibleComponent('chart')
    }
  }

  return(
    <div className={baseClass}>
      <button onClick={toggleVisible} disabled={visibleComponent === 'chart'? true : false}>Growth Chart</button>
      <button onClick={toggleVisible} disabled={visibleComponent === 'table'? true : false}>Fiscal Year Table</button>
      {visibleComponent === 'chart' ? <ArchiveGrowthChart data={data} /> : null }
      {visibleComponent === 'table' ?<FiscalYearCountsPanel data={data} /> : null }
    </div>
  )
}
