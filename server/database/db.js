import mongoose from 'mongoose';


const Connection = async (username = 'sanchit', password = 'sanchit') => {
    const URL = `mongodb+srv://${username}:${password}@google-docs-clone.tyk810b.mongodb.net/GOOGLEDOCS?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true})
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with db', error);
    }
}

export default Connection;



