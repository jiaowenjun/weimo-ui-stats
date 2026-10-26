import { useState } from 'react'

import { ComponentPreviewCard } from 'weimo-ui-core/components/component-preview-card'
import {
  Heatmap,
  formatHeatmapDateKey,
  type HeatmapDailyCount,
} from 'weimo-ui-stats/components/heatmap'
import { StatGroup } from 'weimo-ui-stats/components/stat-group'
import type { ComponentDefinition } from '../../component-docs'

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
  // 初始无选中单元格,空串即 Heatmap 的「无 active」约定
  const [activeDate, setActiveDate] = useState('')

  return (
    <ComponentPreviewCard
      className="stat-page__card"
      label="热力图"
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

function formatWordCountMetric(wordCount: number) {
  if (wordCount < 1000) {
    return { value: String(wordCount), label: '字' }
  }
  if (wordCount < 10000) {
    return { value: (wordCount / 1000).toFixed(1), label: '千字' }
  }
  return { value: (wordCount / 10000).toFixed(1), label: '万字' }
}

const wordMetric = formatWordCountMetric(12345)

const sidebarStatsItems = [
  { key: 'notes', value: '128', label: '笔记' },
  { key: 'words', value: wordMetric.value, label: wordMetric.label },
  { key: 'days', value: '36', label: '天' },
]

function StatGroupDemo() {
  return (
    <ComponentPreviewCard
      className="stat-page__card"
      label="统计组"
    >
      <div className="stat-page__stat-group-preview">
        <StatGroup aria-label="笔记统计" items={sidebarStatsItems} />
      </div>
    </ComponentPreviewCard>
  )
}

function HeatmapPageDemo() {
  return (
    <>
      <StatGroupDemo />
      <HeatmapDemo />
    </>
  )
}

export const heatmapDefinition = {
  id: 'heatmap',
  summary: '按周排列的 13 周日期活动热力图,附带统计组',
  status: 'Ready',
  frame: 'plain',
  preview: () => <HeatmapPageDemo />,
} satisfies ComponentDefinition
