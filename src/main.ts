import * as core from '@actions/core';
import * as jwt from 'jsonwebtoken';

async function run() {
    try {
        const payload = core.getInput('payload');
        const privateKey = core.getInput('privateKey');
        const expiresIn = core.getInput('expiresIn');
        const token = jwt.sign(JSON.parse(payload), privateKey, { algorithm: 'RS256', expiresIn: expiresIn});
        
        core.setOutput('token', token);
    }
    catch (error) {
        core.setFailed(error.message);
    }
}

run();
