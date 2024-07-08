const {success, info, warning, error} = require('./printer.js');
const {exit} = require('process');

async function self_test(client) {
    let channel = await client.channels.fetch(process.env.TEST_CHANNEL)
    try {
        info("Running self-test");
        if(Object.keys(client.commands) == 0)
            throw new Error("No commands were found to test. Failing on purpose.");

        for(let cmd_name in client.commands)
        {
            let cmd = client.commands[cmd_name];

            info(`Testing: ${cmd_name}`);                
            await cmd.self_test(channel);
        }
    } catch(e)
    {
        error(`Test failed with error: ${e}`);
        exit(1);
    }

    success("Tests passed.");
    exit(0);
}

module.exports = {
    self_test,
};