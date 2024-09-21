import { Hono } from "hono";

const app = new Hono();

//creating a http server using hono

// app.get("/", async (c) => {
//   const body = await c.req.json(); //accessing the body and storing it in a variable
//   console.log(body); //logging the body
//   console.log(c.req.header("Authorization")); //logging the Authorization in header
//   console.log(c.req.query("param")); //logging the query parameter

//   return c.text("Hello Hono!");
// });

export default app;

//Middlewares.

async function auth(c: any, next: any) {
  if (c.req.header("Authorization")) {
    await next();
  } else {
    return c.text("You don't have access");
  }
}

// app.use(auth); //using middleware in every request.

app.post("/", auth, async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.json({
    message: "success",
  });
});
