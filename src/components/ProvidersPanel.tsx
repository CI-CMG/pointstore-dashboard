import './ProvidersPanel.css'
import type { ProviderStats, SummaryDataType } from '../types'

interface AppProps {
  data: SummaryDataType
}

export default function ProvidersPanel({data}: AppProps) {
  const baseClass = 'ProvidersPanel'
  // console.log({data})
  const totalPoints = data.record_count


  // WARNING: mutates the provided array by modifying elements
  function augmentProviderData(data:Array<ProviderStats>, totalCount:number) {
    // shallow copy
    const clone = [...data]
    clone.forEach(i => {
      let pct = (Math.round((i.count / totalCount) * 100)).toString()
      if (pct === '0') { pct = '<1' }
      i.label = `${i.count.toLocaleString("en-US")} (${pct}%)`
    })
    // sort by count in desc order
    clone.sort((a, b) => b.count - a.count)
    return(clone)
  }

  const providers = augmentProviderData(data.counts_by_provider, totalPoints)

  return (
    <div className={baseClass}>
      { providers ?
        <>
        <div className='tableCaption'>Providers</div>
        <div className='tableContainer'>
        <table>
          {/* <caption className='tableCaption'>Providers</caption> */}
          <tbody>
          { 
            providers.map(item => {
              return (<tr key={item.provider}><td className='providerName'>{item.provider}</td><td className='providerLabel'>{item.label}</td></tr>)
            })
          }
          </tbody>
        </table>
        </div>
        </>
        : ''
      }
    </div>
  )
}