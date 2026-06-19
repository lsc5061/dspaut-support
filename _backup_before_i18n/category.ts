export const categoryMapping: Record<string, { main: string, sub: string }> = {
  'B3': { main: 'Product Manual', sub: 'DEEPSOUND B3' },
  'P5': { main: 'Product Manual', sub: 'DEEPSOUND P5' },
  'T3': { main: 'Product Manual', sub: 'DEEPSOUND T3' },
  'R5': { main: 'Product Manual', sub: 'DEEPSOUND R5' },
  'DSViewer': { main: 'Software Manual', sub: 'DSViewer' },
  'DSVision': { main: 'Software Manual', sub: 'DSVision' },
  'Software': { main: 'Software Manual', sub: 'Software General' },
};

export const getCategoryInfo = (id: string) => {
  const normalizedId = id.toLowerCase().replace(/\\/g, '/');
  
  if (normalizedId.includes('b3')) return { main: 'Product Manual', sub: 'DEEPSOUND B3' };
  if (normalizedId.includes('p5')) return { main: 'Product Manual', sub: 'DEEPSOUND P5' };
  if (normalizedId.includes('t3')) return { main: 'Product Manual', sub: 'DEEPSOUND T3' };
  if (normalizedId.includes('r5')) return { main: 'Product Manual', sub: 'DEEPSOUND R5' };
  
  if (normalizedId.includes('dsviewer')) return { main: 'Software Manual', sub: 'DSViewer' };
  if (normalizedId.includes('dsvision')) return { main: 'Software Manual', sub: 'DSVision' };
  
  if (normalizedId.includes('equipment_manual')) return { main: 'Product Manual', sub: 'Others' };
  if (normalizedId.includes('software_manual')) return { main: 'Software Manual', sub: 'Others' };
  
  return { main: 'General', sub: 'Others' };
};
