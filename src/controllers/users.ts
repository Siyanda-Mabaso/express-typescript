import {Request, Response} from "express"

let users = [
    {id: 1,name: "syanda" ,email: "syanda25@gmail.com" },
    {id: 2, name: "neliswa", email: "neliswa24@gmail.com"},
    {id: 3, name: "nokuphiwa", email: "nokuphiwa24@gmail.com"},
    {id: 4, name: "samkelo", email: "samkelo21@gmail.com"},
]
 export const getAllUsers =(req:Request, res:Response) =>{
    res.status(200).json(users)
 }

 export const getUserById =(req:Request, res:Response) =>{
    
 
 const { id } = req.params
    const user = users.find((user) => user.id === parseInt(id as string));

    if(!user){
        return res.status(404).send("user not found");
    }

    res.status(200).json(user);
}

export const createUser =(req: Request, res: Response) => {
    const {name, email} = req.body
        const newUser = {id: users.length + 1, name,email}
    
        users.push(newUser);
    
        res.status(201).json(newUser);
}