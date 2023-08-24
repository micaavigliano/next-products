import { NextApiRequest, NextApiResponse } from 'next';
import { Items, Filter, ExtraCategory } from './types/products'
import {Author} from './types/common'
import axios from 'axios';
import _ from 'lodash'

export default async function getprops(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { q } = req.query;

    if (!q) {
      return 
    }

    if (typeof q !== 'string') {
      return res.status(400).json({ error: 'Invalid search query' });
    }

    const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`)

    const results = response.data.results?.map((item: Items) => {

      const formattedPrice = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS'
      }).format(item.price);

      return {
        id: item.id,
        title: item.title,
        price: formattedPrice,
        thumbnail: item.thumbnail,
        condition: item.condition,
        order_backend: item.order_backend,
        free_shipping: item.shipping.free_shipping,
        shipping: item.shipping,
        address: item.address,
        currency_id: item.currency_id
      }
    })

    const categories = !_.isEmpty(response.data.filters) ? response.data.filters[0].values.flatMap((filter: Filter) => {
      const path_values = filter.path_from_root
      return path_values
    }) : []

    const available_filters = !_.isEmpty(response.data.filters) ? response.data.available_filters.filter((category: ExtraCategory) => category.id === 'category') : []

    const author: Author = {
      name: 'Micaela',
      last_name: 'Avigliano'
    }

    const data = {
      item: results,
      category: categories,
      extra_filters: available_filters,
      author: author
    }

    res.status(200).json(data)
  } catch (error) {
    console.error('error fetching: ', error)
    res.status(500).json({ error: 'Error fetching data' });
  }
}