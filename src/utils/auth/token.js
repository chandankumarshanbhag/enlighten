import defaults from "./defaults"
import { sign,verify } from 'jsonwebtoken';


export function generate(data){
    return sign(data,defaults.secret);
}
export function validate(token){
    verify(token,defaults.secret);
}