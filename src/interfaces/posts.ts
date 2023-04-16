export interface IPost {
  id: number,
  username: string,
  created_datetime: Date,
  title: string,
  content: string
}

export interface IPosts {
       data: { count: number,
        next: string | null,
        previous: string | null,
        results: Array<IPost>
      }
}

export interface IApi extends IPosts {
  status: number,
}