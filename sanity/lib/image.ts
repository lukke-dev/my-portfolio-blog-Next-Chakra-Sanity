import type { Image } from 'sanity'
import { dataset, projectId } from '../env'
import createImageUrlBuilder from '@sanity/image-url'

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
