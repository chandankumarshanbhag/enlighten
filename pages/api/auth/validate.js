import { generate, validate } from "utils/auth/token"
import { Response, ResponseCodes } from "utils/http"

export default function (req, res) {
    console.log(req.body)
    if (typeof req.body.auth_token == 'string') {
        try {
            res.json(
                new Response()
                    .data({
                        user: validate(req.body.auth_token)
                    })
                    .code(ResponseCodes.AUTH_VALID_TOKEN)
                    .json()
            );
        } catch (e) {
            res.json(
                new Response()
                    .code(ResponseCodes.AUTH_INVALID_TOKEN)
                    .errorMessage("Token Error")
                    .json()
            );

        }
    }
}