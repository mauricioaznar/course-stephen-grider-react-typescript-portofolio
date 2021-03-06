#!/usr/bin/env node

import {program} from 'commander'
import {serveCommand} from "./commands/serve";

// comment

program
    .addCommand(serveCommand)

program.parse(process.argv)