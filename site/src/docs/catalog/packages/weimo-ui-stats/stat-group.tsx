import { ComponentPreviewCard } from 'weimo-ui-core/components/component-preview-card'
import { StatGroup } from 'weimo-ui-stats/components/stat-group'
import type { ComponentDefinition } from '../../component-docs'
import { ComponentCardTitle } from '../../component-card-title'

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
      label={
        <ComponentCardTitle componentName="stat-group">统计组</ComponentCardTitle>
      }
    >
      <div className="stat-page__stat-group-preview">
        <StatGroup aria-label="笔记统计" items={sidebarStatsItems} />
      </div>
    </ComponentPreviewCard>
  )
}

export const statGroupDefinition = {
  id: 'stat-group',
  summary: '一组大数字小标签的统计指标,横向等分排列',
  status: 'Ready',
  frame: 'plain',
  preview: () => <StatGroupDemo />,
} satisfies ComponentDefinition
