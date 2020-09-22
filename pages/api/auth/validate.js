import { generate } from "utils/auth/token"
import { Response } from "utils/http"

export default function (req, res) {
    console.log(req.body)
    if (typeof req.body.auth_token=='string') {
        res.json(
            new Response()
                .data({
                    user: validate(req.body.auth_token) 
                })
                .json()
        );
    }
}