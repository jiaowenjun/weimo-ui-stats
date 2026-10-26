import { useState } from 'react'

import { ComponentPreviewCard } from 'weimo-ui-core/components/component-preview-card'
import {
  HeatColor,
  getHeatColorToken,
  heatColorLevels,
  heatColorMap,
} from 'weimo-ui-stats/components/heat-color'
import {
  Heatmap,
  formatHeatmapDateKey,
  type HeatmapDailyCount,
} from 'weimo-ui-stats/components/heatmap'
import type { ComponentDefinition } from '../../component-docs'
import { ComponentCardTitle } from '../../component-card-title'

function dateOffset(days: number) {
  const date = new Date()

  date.setDate(date.getDate() + days)

  return formatHeatmapDateKey(date)
}

const demoDailyCounts: HeatmapDailyCount[] = [
  { date: dateOffset(-84), count: 1 },
  { date: dateOffset(-83), count: 2 },
  { date: dateOffset(-76), count: 4 },
  { date: dateOffset(-69), count: 6 },
  { date: dateOffset(-60), count: 1 },
  { date: dateOffset(-43), count: 3 },
  { date: dateOffset(-29), count: 5 },
  { date: dateOffset(-14), count: 1 },
  { date: dateOffset(-13), count: 2 },
  { date: dateOffset(-12), count: 4 },
  { date: dateOffset(-6), count: 6 },
  { date: dateOffset(-2), count: 3 },
  { date: dateOffset(0), count: 2 },
]

function HeatmapDemo() {
  const [activeDate, setActiveDate] = useState(dateOffset(-2))

  return (
    <ComponentPreviewCard
      className="stat-page__card"
      label={<ComponentCardTitle componentName="heatmap">热力图</ComponentCardTitle>}
    >
      <div className="stat-page__heatmap-preview">
        <Heatmap
          activeDate={activeDate}
          dailyCounts={demoDailyCounts}
          onDateSelect={(date) => setActiveDate(date)}
        />
      </div>
    </ComponentPreviewCard>
  )
}

function HeatColorDemo() {
  return (
    <ComponentPreviewCard
      className="stat-page__card"
      items={heatColorLevels.map((level) => {
        const item = heatColorMap[level]

        return {
          darkValue: item.value.dark,
          token: getHeatColorToken(level),
          value: item.value.light,
        }
      })}
      label={
        <ComponentCardTitle componentName="heat-color">热力色阶</ComponentCardTitle>
      }
    >
      <div className="stat-page__heat-color-preview">
        <HeatColor />
      </div>
    </ComponentPreviewCard>
  )
}

function HeatmapPageDemo() {
  return (
    <>
      <HeatmapDemo />
      <HeatColorDemo />
    </>
  )
}

export const heatmapDefinition = {
  id: 'heatmap',
  summary: '按周排列的 13 周日期活动热力图,附带热力色阶',
  status: 'Ready',
  frame: 'plain',
  preview: () => <HeatmapPageDemo />,
} satisfies ComponentDefinition
