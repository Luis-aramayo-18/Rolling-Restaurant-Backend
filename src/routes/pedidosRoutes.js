import express from 'express';

import {
  getHome,
  getPedido,
  getPedidos,
  getUsers,
} from '../controllers/getControllers';
import { postPedido, postUser } from '../controllers/postControllers';
import { deletePedido } from '../controllers/deleteController';
import { putPedido } from '../controllers/putControllers';

import { isAuthenticated } from '../middlewares/isAuthenticated';

export const routerPedidos = express.Router();

// path (endpoint), callback a ejecutar cuando se haga esta peticion
// request, response

// GET ---------------------------
// router.get('/', getHome);
// router.get('/users', getUsers);
routerPedidos.get('/pedido', getPedidos);
//routerPedidos.get('/pedido/:id', getPedido);

// POST ---------------------------
// router.post('/user', postUser);
routerPedidos.post('/pedido', isAuthenticated, postPedido);

// PUT ----------------------------
routerPedidos.put('/pedido/:id', isAuthenticated, putPedido);

// DELETE -------------------------
routerPedidos.delete('/pedido/:id', isAuthenticated, deletePedido);
