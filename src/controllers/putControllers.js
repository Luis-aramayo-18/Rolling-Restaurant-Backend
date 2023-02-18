import { validateContent } from '../helpers/validateContent';
import { validateData } from '../helpers/validateData';
import { validateContentP } from '../helpers/validateContentPed';
import { validateDataP } from '../helpers/validateData';

import ProductsDb from '../models/ProductSchema';
import PedidosDb from '../models/PedidoSchema';

export const putProduct = async (req, res) => {
  // Traemos el id del producto a actualizar
  const params = req.params;
  const { id } = params;

  // Traemos el contenido (nuevos datos)
  const body = req.body;

  // 1era validacion - Contenido
  if (!validateContent('POST_PRODUCT', body)) {
    //error de contenido
    res.status(400).json({
      message: 'Campos invalidos',
    });
    return;
  }

  // 2da validacion - Campo por campo
  if (!validateData(body)) {
    res.status(400).json({
      message: 'Campos invalidos',
    });
    return;
  }

  try {
    //filter,newData,options
    const updated = await ProductsDb.findOneAndUpdate({ id }, body, {
      new: true,
    });

    res.json({
      message: 'Producto actualizado',
      updatedProduct: updated,
    });
  } catch (err) {
    res.status(500).json({
      message: 'ERROR: ' + err,
    });
  }
};

// PEDIDO

export const putPedido = async (req, res) => {
  // Traemos el id del producto a actualizar
  const params = req.params;
  const { id } = params;

  // Traemos el contenido (nuevos datos)
  const body = req.body;

  // 1era validacion - Contenido
  if (!validateContentP('POST_PEDIDO', body)) {
    //error de contenido
    res.status(400).json({
      message: 'Campos invalidos',
    });
    return;
  }

  // 2da validacion - Campo por campo
  if (!validateDataP(body)) {
    res.status(400).json({
      message: 'Campos invalidos',
    });
    return;
  }

  try {
    //filter,newData,options
    const updated = await PedidosDb.findOneAndUpdate({ id }, body, {
      new: true,
    });

    res.json({
      message: 'Pedido actualizado',
      updatedPedido: updated,
    });
  } catch (err) {
    res.status(500).json({
      message: 'ERROR: ' + err,
    });
  }
};
