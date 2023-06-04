import { Category } from "./category"

 export interface Tool {
        name: string
        desc: string
        website:   string
        image:    string
        category: Category | null
  }