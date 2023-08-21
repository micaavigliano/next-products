export interface Item {
  title: string,
  price: number,
  shipping: {
    store_pick_up: boolean,
    free_shipping: boolean
  },
  thumbnail: string,
  currency_id: string,
  available_quantity: number
}