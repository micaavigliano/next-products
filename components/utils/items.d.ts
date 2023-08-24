export enum Conditions {
  New = "new",
  NotSpecified = "not_specified",
  Used = "used"
}

export interface Shipping {
  store_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  mode: string;
  tags: string[];
}

export interface Address {
  state_id: string;
  state_name: string;
  city_name: string;
}

export interface Path {
  id: string;
  name: string
}


export interface Filter {
  path_from_root: Path
}

export interface Items {
  currency_id: string;
  id: string;
  title: string;
  price: number;
  thumbnail: string;
  condition: Conditions;
  free_shipping: boolean;
  order_backend: number;
  shipping: Shipping;
  address: Address
}
