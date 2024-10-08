import {TAG_DOCUMENT_NAME, CATEGORY_DOCUMENT_NAME} from '../constants'
import TagIcon from '../components/TagIcon'

export default {
  title: 'Media Tag',
  icon: TagIcon,
  name: TAG_DOCUMENT_NAME,
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'slug'
    },
    {
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{type: CATEGORY_DOCUMENT_NAME}]
    }
  ],
  preview: {
    select: {
      name: 'name'
    },
    prepare(selection: any) {
      const {name} = selection
      return {
        media: TagIcon,
        title: name?.current
      }
    }
  }
}
