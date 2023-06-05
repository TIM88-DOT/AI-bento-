import { ToolCategory } from "./ToolCategory";

export interface Tool {
      id?: string;
      name: string;
      website: string;
      desc: string;
      image: string;
      categories: ToolCategory[];
    }
    