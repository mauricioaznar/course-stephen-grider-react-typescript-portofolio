import {Command} from "commander";
import path from "path";
import {serve} from "@maguastupaguas/local-api";


const isProduction = process.env.NODE_ENV === 'production'

export const serveCommand = new Command()
    .command('serve [filename]')
    .description('Open a file for edting')
    .option('-p, --port <number>', 'port to run server on', '4005')
    .action(async (filename = 'notebook.js', options: { port: string }) => {
        try {
            const dir = path.join(process.cwd(), path.dirname(filename))
            await serve(parseInt(options.port), path.basename(filename), dir, !isProduction)
            console.log(`Opened ${filename}, Navigate to http://localhost:${options.port} to edit the file.`)
        } catch (err) {
            if (err.code === 'EADDRINUSE') {
                console.error('Port is in use. Try running on a different port.')
            } else {
                console.log('Here the problem', err.message)
            }
            process.exit(1)
        }
    })