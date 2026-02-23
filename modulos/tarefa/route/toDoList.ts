import {Router} from "express";
import { criarTarefa, consultarTarefas } from "../controller/criar.ts";

export const tarefaRoutes = Router();


tarefaRoutes.post(
    "/criar",
    criarTarefa,
)

tarefaRoutes.get(
    "/consultar",
    consultarTarefas,
)