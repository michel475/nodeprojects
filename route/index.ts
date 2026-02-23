import { Router } from "express"
 import { tarefaRoutes } from "../modulos/tarefa/route/toDoList.ts"

const routes = Router();

type Routes ={
    path:string;
    route: Router;
}

const rotas = [
    {
        path: "/tarefas",
        route: tarefaRoutes,
    }
] as Routes[];


rotas.forEach((route) => {
    routes.use(route.path, route.route);
})

export default routes;