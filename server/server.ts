import express from "express";
import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

// type
interface Todo {
    id: string;
    content: string;
}

// todolist
const todoList: Todo[] = [
    {
        "id": "1",
        "content": "散歩",
    },
    {
        "id": "2",
        "content": "買い物",
    },
    {
        "id": "3",
        "content": "掃除",
    }
]

const app = express();
const PORT = 2000;
// app.get("/", (req, res) => res.send("Hello"));

const t = initTRPC.create();
const router = t.router;
const publicProcedure = t.procedure;

// endpoint
const appRouter = router({
    // プロシージャの名前
    test: publicProcedure.query(() => {
        return "TEST TRPC";
    }),
    getTodos: publicProcedure.query(() => {
        return todoList;
    })
})

app.use("/trpc", trpcExpress.createExpressMiddleware({
    router: appRouter,
}))


app.listen(PORT);

export type AppRouter = typeof appRouter;