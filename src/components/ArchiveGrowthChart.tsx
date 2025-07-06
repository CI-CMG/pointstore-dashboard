import './ArchiveGrowthChart.css'
import * as Plot from "@observablehq/plot";
import { useRef, useEffect, useState } from "react";
import type { SummaryDataType } from '../types'

interface AppProps {
  data: SummaryDataType
}


export default function ArchiveGrowthChart({ data }: AppProps) {
  const baseClass = 'ArchiveGrowthChart'
  const plotRef = useRef<HTMLDivElement>(null)
  const annual_data = data.counts_by_year

  useEffect(() => {
    if (!annual_data) { return }
    
    const barChart = Plot.plot({
      x: {
        type: "band",
        tickFormat: "",
        label: ""
      },
      y: {
        label: "count (thousands)",
        grid: true,
        
      },
      marks: [
        Plot.barY(annual_data, {
          x: "year", 
          y: d => d.total / 1e6,
          fill: "provider", 
          title: (d) => `${d.provider}: ${d.percentage_of_archive ? d.percentage_of_archive : '<1' }% of archive`,
        }),
        Plot.ruleY([0], { stroke: "white", strokeWidth: 2}),
      ],
      color: {
        // range: ["red","green","blue", "yellow", "purple", "brown", "pink"]
        type: "categorical", scheme: "Category10"
      },
      marginLeft: 50,
      marginBottom: 40,
      marginTop: 20,
      height:1000,
      style: {
        fontSize: '12pt',
        background: 'slategray',
        color: 'white'
      }
    })
    plotRef.current?.append(barChart)

    return () => barChart.remove()
  }, [annual_data])

  return (
    <>
      <h4 className='caption'>Archive Growth</h4>
      <div className={baseClass} ref={plotRef}></div>
    </>
  )
}