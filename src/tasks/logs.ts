import { API_CALL_COUNTER, API_CALL_COUNTER_MAX } from "../libs/constants";

export function start_counter() {
    setInterval(() => {
        console.log(`CURRENT API CALLS IN 1 MINUTE: ${API_CALL_COUNTER}`);
        if (API_CALL_COUNTER > API_CALL_COUNTER_MAX) API_CALL_COUNTER_MAX = API_CALL_COUNTER;
        console.log(`MAX API CALLS IN 1 MINUTE: ${API_CALL_COUNTER_MAX}`);
        API_CALL_COUNTER = 0;
    }, 60000);
}


export function apicall() {
    API_CALL_COUNTER++;
}

export function start_ratelimit() {
    setInterval(() => {
        console.log(RATELIMIT_MAP);
        RATELIMIT_MAP.clear();
    }, 60000);
}
