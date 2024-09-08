import cors from 'cors'

export const corsMiddleware = () => cors({
    origin: (origin, callback) => {
        const ACCEPTED_ORIGINS = [
            '*'
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