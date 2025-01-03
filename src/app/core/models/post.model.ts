export interface PostModal {
    id: string
    content: string
    imageUrl: string
    hashtags: string
    comments: { id: string; content: string }[]
    likes: string[]
}