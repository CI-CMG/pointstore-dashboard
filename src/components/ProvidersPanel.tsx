import './ProvidersPanel.css'
import type { SummaryDataType } from '../types'

interface AppProps {
  data: SummaryDataType
}

export default function ProvidersPanel({data}: AppProps) {
  const baseClass = 'ProvidersPanel'

  
  function reshapeData(data) {
    if (!data) { return undefined }

    // transform from object w/ one key per provider to array with one object per provider
    const providers = Object.keys(data).map( key => {
      const count = parseInt(data[key])
      let pct = (Math.round((count / totalPoints) * 100)).toString()
      if (pct === '0') { pct = '<1' }
      const label = `${count.toLocaleString("en-US")} (${pct}%)`
      return ({ provider: key, count: count, label: label })
    })

    // sort by count in desc order
    providers.sort((a, b) => b.count - a.count)

    return (providers)
  }


  const totalPoints = data.record_count
  const providers = reshapeData(data.counts_by_provider)

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