import { getCollection } from 'astro:content';

export async function getManuals() {
    const manuals = await getCollection('manuals');
    console.log('Total manuals:', manuals.length);
    manuals.forEach(m => {
        console.log('ID:', m.id);
    });
}
