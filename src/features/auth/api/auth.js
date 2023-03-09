import {AUTH_ENDPOINT, CLIENT_ID, CLIENT_SECRET, REDIRECT} from "@lp/shared/config";

export function auth(code){
    const params =new URLSearchParams({
        "grant_type": 'authorization_code',
        "code": code,
        "redirect_uri": `${REDIRECT}`
    })
    fetch(`${AUTH_ENDPOINT}/api/token`,{
        method: "POST",
        body:params,
        headers:{
            'Authorization': `Basic ${new Buffer(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then(response => response.json()).then(data=> data)
}