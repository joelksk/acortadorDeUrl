import cors from 'cors'
import 'dotenv/config'

export const corsMiddleware = () => cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [
            'http://localhost:1235',
            'http://localhost:3000',
            process.env.DOMAIN_CORS
        ]

        if(ACCEPTED_ORIGINS.includes(origin)) {
            return callback (null, true)
        }

        if(!origin) {
            return callback(null, true)
        }

        return callback(new Error('not allowed by CORS'))
    }
})