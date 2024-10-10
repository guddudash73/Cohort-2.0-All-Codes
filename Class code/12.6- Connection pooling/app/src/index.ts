import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { env } from 'hono/adapter';

const app = new Hono();

app.use('/', async (c) => {
	const { DATABASE_URL } = env<{ DATABASE_URL: string }>(c);

	const prisma = new PrismaClient({
		datasourceUrl: DATABASE_URL,
	}).$extends(withAccelerate());

	const response = await prisma.log.create({
		data: {
			level: 'info',
			message: 'asdasd',
			meta: {
				headers: JSON.stringify(c.req.header),
			},
		},
	});

	console.log(JSON.stringify(response));

	return c.json({ response });
});

export default app;

// export interface Env {
// 	DATABASE_URL: string;
// }

// export default {
// 	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
// 		const prisma = new PrismaClient({
// 			datasourceUrl: env.DATABASE_URL,
// 		}).$extends(withAccelerate());

// 		const response = await prisma.log.create({
// 			data: {
// 				level: 'info',
// 				message: 'asdasd',
// 				meta: {
// 					headers: JSON.stringify(request.headers),
// 				},
// 			},
// 		});

// 		console.log(JSON.stringify(response));

// 		return Response.json(response);
// 	},
// };
