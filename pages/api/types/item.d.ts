export interface Item {
  title: string;
  price: string;
  category_id: string;
  shipping: {
    store_pick_up: boolean;
    free_shipping: boolean;
  };
  thumbnail: string;
  currency_id: string;
  available_quantity: number;
  condition: {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    value_struct: null | string;
    values: any[];
    attribute_group_id: string;
    attribute_group_name: string;
    value_type: string;
  }
}

export interface Filter {
  path_from_root: Path[] 
}

export interface Path {
  id: string;
  name: string
}