export const categoryMapping: Record<string, { main: string, sub: string }> = {
  'B3': { main: 'Product Manual', sub: 'DEEPSOUND B3' },
  'P5': { main: 'Product Manual', sub: 'DEEPSOUND P5' },
  'T3': { main: 'Product Manual', sub: 'DEEPSOUND T3' },
  'R5': { main: 'Product Manual', sub: 'DEEPSOUND R5' },
  'DSViewer': { main: 'Software Manual', sub: 'DSViewer' },
  'DSVision': { main: 'Software Manual', sub: 'DSVision' },
  'DSK': { main: 'Software Manual', sub: 'DSK(SDK)' },
  'Software': { main: 'Software Manual', sub: 'Software General' },
};

export const getCategoryInfo = (id: string) => {
  const normalizedId = id.toLowerCase().replace(/\\/g, '/');
  for (const key in categoryMapping) {
    if (normalizedId.includes(key.toLowerCase())) {
      return categoryMapping[key];
    }
  }
  
  // 폴더 이름 기반 기본 분류
  if (normalizedId.includes('equipment_manual')) return { main: 'Product Manual', sub: 'Others' };
  if (normalizedId.includes('software_manual')) return { main: 'Software Manual', sub: 'Others' };
  
  return { main: 'General', sub: 'Others' };
};
