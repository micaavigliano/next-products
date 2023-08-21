import { NextApiRequest, NextApiResponse } from 'next';
import { Items, Path, Filter } from './types/products'
import {Author} from './types/common'
import axios from 'axios';
import _ from 'lodash'

export default async function getprops(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { q } = req.query;

    if (!q) {
      return res.status(400).json({ error: 'Missing query parameter' });
    }

    if (typeof q !== 'string') {
      return res.status(400).json({ error: 'Invalid search query' });
    }

    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`)

    const results = response.data.results?.map((item: Items) => {
      return {
        id: item.id,
        title: item.title,
        price: item.price,
        thumbnail: item.thumbnail,
        condition: item.condition,
        order_backend: item.order_backend,
        free_shipping: item.shipping.free_shipping,
        shipping: item.shipping,
        address: item.address,
        currency_id: item.currency_id
      }
    })

    const categories = !_.isEmpty(response.data.filters) ? response.data.filters.map((filter: Filter) => {
      const path_values = filter.values[0].path_from_root?.map((path: Path) => path)
      return path_values
    }) : []

    const author: Author = {
      name: 'Micaela',
      last_name: 'Avigliano'
    }

    const data = {
      item: results,
      category: categories,
      author: author
    }

    res.status(200).json(data)
  } catch (error) {
    console.error('error fetching: ', error)
    res.status(500).json({ error: 'Error fetching data' });
  }
}