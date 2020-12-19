import _courses from "models/courses"
import _sections from "models/sections"
import _sections from "models/"
import { Response, ResponseCodes } from "utils/http"

export default async (req, res) => {
    if (req.query.addCourse == '' && req.body) {
        _courses.create(req.body).then((doc) => {
            res.json(
                new Response()
                    .data(doc)
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
    else if(req.query.list){
        let courses = _courses.findAll({});
        for(let i=0;i<courses.length;i++){
            courses[i] = _courses.findAll({});
        }
    }
}