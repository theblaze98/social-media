enum MediaTypes {
  IMAGE = 'image',
  VIDEO = 'video',
}

type TMedia = {
  type: MediaTypes
  url: string
}

export interface IPost {
  id: string
  authorId: string
  content: string
  media: TMedia[]
  createdAt: Date
}
