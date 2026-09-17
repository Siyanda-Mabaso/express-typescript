import express , { Express } from 'express';
import bodyParser from 'body-parser';
import { loggerMiddleware } from './middleware/logger';
import router from './routes/user';
import { notFoundHandler } from './middleware/error';

const app: Express = express();
const PORT = process.env.PORT || 4000;

//examples of builtin middleware there are essential for passing incoming json from the body of request
app.use(express.json());
app.use(bodyParser.json());

app.use(loggerMiddleware)
app.use("/v1/users", router)

app.use(notFoundHandler)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 