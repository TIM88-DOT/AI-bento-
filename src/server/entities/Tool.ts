import { ToolCategory } from "./ToolCategory";

export type Tool = {
      id?: string;
      name: string;
      website: string;
      desc: string;
      image: string;
      categories: ToolCategory[];
    }
    