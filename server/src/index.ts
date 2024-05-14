import { AppDataSource } from "./DataSource"
import createApp from "./app"

const main = async (): Promise<void> => {
    const app = await createApp()

    try {
        await AppDataSource.initialize()
        app.listen({ port: +process.env.PORT })
    } catch (error) {
        app.log.info(error)
    }
}

main()
