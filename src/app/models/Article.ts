export interface Article {
    id?: string,
    image?: string,
    title?: string,
    content?: string,
    published?: Date,
    description?: string,
    comments?: {
        timeStamp: Date,
        comment: string,
        user: string
    }
}