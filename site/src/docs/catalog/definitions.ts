import { heatmapDefinition } from './packages/weimo-ui-stats/heatmap'
import { statGroupDefinition } from './packages/weimo-ui-stats/stat-group'
import type { ComponentId } from './manifest'
import type { ComponentDefinition } from './types'

export const componentDefinitionsById = {
  heatmap: heatmapDefinition,
  'stat-group': statGroupDefinition,
} satisfies Record<ComponentId, ComponentDefinition>
