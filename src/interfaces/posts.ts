export interface IPost {
  id: number,
  username: string,
  created_datetime: Date,
  title: string,
  content: string
}

export interface IPosts {
    status: number,
    data: {
        count: number,
        next: string | null,
        previous: string | null,
        results: Array<IPost>
    }
}