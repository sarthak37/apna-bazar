import mongoose from 'mongoose'


const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@apnabazar.nt4pn.mongodb.net/APNABAZAR?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Database connected');
    } catch (error) {
        console.log('Error: ', error.message)
    }
}

export default Connection;