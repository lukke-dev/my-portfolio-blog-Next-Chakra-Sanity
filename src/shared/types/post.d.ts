type Post = {
  id: number
  slug: string
  nameEN: string
  namePT: string
  createdAt: string
  minutesToRead: number
  contentEN: TypedObject | TypedObject[]
  contentPT: TypedObject | TypedObject[]
}
