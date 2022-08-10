import openDatabase from "../../database/sqlite";
import connectToDatabase from '../../database';
import Photo from '../../database/schemas/Photo';
import axios from 'axios';
import { createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url'
import { saveAs } from 'file-saver'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const api = axios.create({
    baseURL: 'https://wedd-ichihara7l.vercel.app/api'
})

export default async function handler(request, response) {

    if (request.method === 'GET' ) {
        const database = await openDatabase();
        const connection = await connectToDatabase();

        // Added code just restar process - more easier
        // Photo.updateMany({download_date : null}).exec();
        // await database.exec(`
        //    DELETE FROM photos 
        // `);
        // const data1 = await database.all(`SELECT * FROM photos`);
        // return response.status(201).json({ message: 'reset table to test!', data: data1 });

        const Photos = await Photo.find({ download_date : null }).exec();
        
        if (!Photos) {
            await connection.disconnect();
            return response.status(500).json({ message: 'Without photos to update!' });
        }

        console.log(Photos);

        await Promise.all(
            Photos.map(async photo => {
                let namePhoto = photo.url.split('/')[8];
                let path = resolve('public', 'photos', namePhoto);                
                try {
                    const dowloadPhotos = await axios.get(photo.url, { responseType: 'stream'})    
                    if (dowloadPhotos.status !== 404) {
                        dowloadPhotos.data.pipe(createWriteStream(path)).on('finish', async () => {

                            // if (connection.readyState == 0) await connection.connect()

                            const photoData = await Photo.findById(photo._id).exec();
                            photoData.download_date = new Date();
                            photoData.save();

                            // await connection.disconnect();

                            await database.exec(`
                                INSERT INTO photos (url, path) VALUES ('${photo.url}','${path.replace("\\","\/")}')
                             `);
                 
                        });                                            
                    }
    
                } catch (error) {
                            
                }
               
            })
        );

        const data = await database.all(`SELECT * FROM photos`);
    
        // await connection.disconnect();

        return response.status(201).json(data);
    }
}
