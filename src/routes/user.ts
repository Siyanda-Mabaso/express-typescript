import {Router ,Request, Response} from "express";
import {body, param, validationResult} from "express-validator";
import {getAllUsers, getUserById, createUser } from "../controllers/users"

const router = Router()

let users = [
    {id: 1,name: "syanda" ,email: "syanda25@gmail.com" },
    {id: 2, name: "neliswa", email: "neliswa24@gmail.com"},
    {id: 3, name: "nokuphiwa", email: "nokuphiwa24@gmail.com"},
    {id: 4, name: "samkelo", email: "samkelo21@gmail.com"},
]

router.get("/",getAllUsers)

//http://localhost:3000/:id
router.get("/:id" ,
    [param("id").isInt().withMessage("ID must bean integer")], 
    (req: Request , res: Response) =>{

    const errors = validationResult(req)
    console.log(errors, "errors from express-validator middleware");
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    getUserById(req, res)
})

router.post("/",[
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Must be a valid email address"),
],(req: Request, res: Response) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    createUser (req, res)
    
});
export default router;