import { RATELIMIT } from "../libs/constants";

let api_call_counter = 0;
let api_call_counter_max = 0;

let ratelimits = new Map();

export const log = {
    error: (msg: string, err?: any) => {
        console.log(`\x1b[31m[ E ]: ${msg} \x1b[0m`);
        if (err) console.error(err);
    },
    success: (msg: string) => {
        console.log(`\x1b[32m[ S ]: ${msg} \x1b[0m`);
    },
    info: (msg: string) => {
        console.log(`\x1b[34m[ I ]: ${msg} \x1b[0m`);
    },
    request: (ip: string, method: string, route: string) => {
        console.log(`[ R ]: ${ip.padStart(15, " ")} ${method.padStart(6, " ")}::/${route}`);
    },
    object: (msg: any) => {
        console.log(msg);
    },
};

export function osu_api_call_logger() {
    setInterval(() => {
        log.info(`CURRENT API CALLS IN 1 MINUTE: ${api_call_counter}`);
        api_call_counter_max = Math.max(api_call_counter, api_call_counter_max);
        log.info(`MAX API CALLS IN 1 MINUTE: ${api_call_counter_max}`);
        api_call_counter = 0;
    }, 60000);
}

export function apicall() {
    api_call_counter++;
}

export function ratelimit_logger() {
    setInterval(() => {
        log.object(ratelimits);
        ratelimits.clear();
    }, 60000);
}

export function below_ratelimit(ip: string): boolean {
    const req_count = ratelimits.get(ip) || 0;
    ratelimits.set(ip, req_count + 1);
    return req_count <= RATELIMIT;
}
