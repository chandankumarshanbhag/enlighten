import _instituion from "models/institutions"
import { Response, ResponseCodes } from "utils/http"

export default (req, res) => {
    if (req.query.addInstitution == '' && req.body) {
        _instituion.create({
            name: "",
            type: "",
            shortName: "",
            address: "",
            ...req.body
        }).then((doc) => {
            res.json(
                new Response()
                    .data(doc)
                    .json()
            );
        }).catch(e => {
            console.log(e)
            res.json(
                new Response()
                    .code(ResponseCodes.DB_ERROR)
                    .errorMessage("Create Error")
                    .json()
            );

        })
    }
    else if (req.query.list == '') {
        _instituion.findAll({}).then((docs) => {
            res.json(
                new Response()
                    .data(docs)
                    .json()
            );
        }).catch(e => {
            res.json(
                new Response()
                    .code(ResponseCodes.DB_ERROR)
                    .errorMessage("Create Error")
                    .json()
            );

        })
    }
    else if (req.query.instituteStatusChange == '' && req.body) {
        console.log(req.body)
        _instituion.findByPk(req.body.instituteId)
            .then((doc) => {
                doc.update({ status: req.body.status })
                    .then((doc) => {
                        res.json(
                            new Response()
                                .data(doc)
                                .json()
                        );
                    })
                    .catch(e => {
                        console.log(e)
                        res.json(
                            new Response()
                                .code(ResponseCodes.DB_ERROR)
                                .errorMessage("Update Error")
                                .json()
                        );
                    })
            })
            .catch(e => {
                console.log(e)
                res.json(
                    new Response()
                        .code(ResponseCodes.DB_ERROR)
                        .errorMessage("Update Error")
                        .json()
                );
            })
    }
    else if (req.query.save == '' && req.body) {
        console.log(req.body.id)
        _instituion.findByPk(req.body.id)
            .then((doc) => {
                doc.update(req.body)
                    .then((doc) => {
                        res.json(
                            new Response()
                                .data(doc)
                                .json()
                        );
                    })
                    .catch(e => {
                        console.log(e)
                        res.json(
                            new Response()
                                .code(ResponseCodes.DB_ERROR)
                                .errorMessage("Update Error")
                                .json()
                        );
                    })
            })
            .catch(e => {
                console.log(e)
                res.json(
                    new Response()
                        .code(ResponseCodes.DB_ERROR)
                        .errorMessage("Update Error")
                        .json()
                );
            })
    }
    else if (req.query.delete == '' && req.body) {

        _instituion.destroy({
            where: {
                id: req.body.id
            }
        }).then((doc) => {
            res.json(
                new Response()
                    .data(doc)
                    .json()
            );
        }).catch(e => {
            console.log(e)
            res.json(
                new Response()
                    .code(ResponseCodes.DB_ERROR)
                    .errorMessage("Update Error")
                    .json()
            );
        })
    }
}

