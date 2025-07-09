import type { SummaryDataType } from '../types'
import './MetricsPanel.css'

interface AppProps {
  data: SummaryDataType
}

export default function MetricsPanel({data}: AppProps) {
  const baseClass = 'MetricsPanel'
  
  return (
    <div className={baseClass}>
      { data ?
        <>
        <p>Report Date: <span className='emphasis'>{data['report_date']}</span></p>
        <p>Total Count: <span className='emphasis'>{data['record_count'].toLocaleString("en-US")}</span></p>
        <p>Archive Dates:<br/><span className='emphasis'>{data['min_entry_date']} to {data['max_entry_date']}</span></p>
        <p><span className='emphasis'>{data.order_count.count}</span> orders in the last 30 days</p>
        </>
        : ''
      }
    </div>
  )
}