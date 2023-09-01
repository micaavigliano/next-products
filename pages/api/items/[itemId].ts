import { NextApiRequest, NextApiResponse } from 'next';
import { Item } from '../types/item';
import { Author, Attributes } from '../types/common'
import axios from 'axios';

export default async function getitem(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { itemId } = req.query;
    const product = await axios.get(`https://api.mercadolibre.com/items/${itemId}`)
    const description = await axios.get(`https://api.mercadolibre.com/items/${itemId}/description`)

    const formattedPrice = new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS'
    }).format(product.data.price);

    const filterCondition = product.data.attributes.filter((item: Attributes) => item.id === "ITEM_CONDITION")

    const productInfo: Item =  {
        title: product.data.title,
        price: formattedPrice,
        category_id: product.data.category_id,
        sold_quantity: product.data.sold_quantity,
        shipping: {
          store_pick_up: product.data.store_pick_up,
          free_shipping: product.data.free_shipping
        },
        thumbnail: product.data.thumbnail,
        currency_id: product.data.currency_id,
        available_quantity: product.data.available_quantity,
        condition: filterCondition[0]
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