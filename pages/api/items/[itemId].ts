import { NextApiRequest, NextApiResponse } from 'next';
import { Item } from '../types/item';
import { Author } from '../types/common'
import axios from 'axios';
import _ from 'lodash'

export default async function getitem(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { itemId } = req.query;
    console.log(itemId)
    const product = await axios.get(`https://api.mercadolibre.com/items/${itemId}`)
    const description = await axios.get(`https://api.mercadolibre.com/items/${itemId}/description`)

    const productInfo: Item =  {
        title: product.data.title,
        price: product.data.price,
        shipping: {
          store_pick_up: product.data.store_pick_up,
          free_shipping: product.data.free_shipping
        },
        thumbnail: product.data.thumbnail,
        currency_id: product.data.currency_id,
        available_quantity: product.data.available_quantity
    }

    const author: Author = {
      name: 'Micaela',
      last_name: 'Avigliano'
    }

    const data = {
      item: productInfo,
      desc: description.data.plain_text,
      author: author
    }

    res.status(200).json(data)
  } catch (error) {
    console.error('error fetching: ', error)
    res.status(500).json({ error: 'Error fetching data' });
  }
}