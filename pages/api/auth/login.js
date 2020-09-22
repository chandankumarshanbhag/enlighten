import { generate } from "utils/auth/token"
import { Response } from "utils/http"

export default function (req, res) {
    console.log(req.body)
    if (typeof req.body.username == 'string' && typeof req.body.password == 'string') {
        res.json(
            new Response()
                .data({
                    token: generate("hello"),
                    user: {}
                })
                .json()
        );
    }
}