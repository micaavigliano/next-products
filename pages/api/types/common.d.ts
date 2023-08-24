export interface Author {
  name: string;
  last_name: string;
}

export interface Attributes {
  id:string;
  name: string;
  value_id: string;
  value_name: string;
  value_struct: any;
  values: [
    {
      id: string;
      name: string;
      struct: any;
    }
  ]
}