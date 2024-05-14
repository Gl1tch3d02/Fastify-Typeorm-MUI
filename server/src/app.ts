import { fastifyCookie } from "@fastify/cookie"
import fastifySwagger from "@fastify/swagger"
import fastifySwaggerUi from "@fastify/swagger-ui"
import fastify, { type FastifyInstance } from "fastify"
import {
    type ZodTypeProvider,
    jsonSchemaTransform,
    serializerCompiler,
    validatorCompiler
} from "fastify-type-provider-zod"
import * as fs from "fs"
import z from "zod"

export const createApp = async (): Promise<FastifyInstance> => {
    const app: FastifyInstance = fastify({
        logger: true,
        https: {
            key: fs.readFileSync(process.env.PRIVATE_KEY_PATH),
            cert: fs.readFileSync(process.env.CERTIFICATE_PATH)
        }
    })

    await app.register(fastifyCookie)
    app.setValidatorCompiler(validatorCompiler)
    app.setSerializerCompiler(serializerCompiler)

    await app.register(fastifySwagger, {
        openapi: {
            openapi: "3.0.0",
            info: {
                title: "Template",
                version: "1.0.0"
            }
        },
        transform: jsonSchemaTransform
    })

    await app.register(fastifySwaggerUi, {
        routePrefix: "/docs"
    })

    app.withTypeProvider<ZodTypeProvider>().get(
        "/echo",
        {
            schema: {
                summary: "Echo a message",
                description: "Sends you back the message you entered in the querystring",
                querystring: z.object({
                    message: z.string().min(3)
                }),
                response: {
                    200: z.string()
                }
            }
        },
        (request, reply) => {
            reply.send(request.query.message)
        }
    )

    return app
}

export default createApp
