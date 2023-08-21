import { log } from 'console';
import app from './src/app';

const port:number = 3000; 


app.listen(port, () => {
    console.log(`Server run in port ${port}`);
    
})