import z from 'zod'

const shorturlsSchema = z.object({
    originalUrl: z.string().url({
        required_error: "The Url is required",
        message: "The Url must be a valid Url"
    }),
    isPublic: z.boolean().optional()
})

export function validateShorturl(object) {
    return shorturlsSchema.safeParse(object);
}

export function validateParcialShorturl(object){
    return shorturlsSchema.partial().safeParse(object);
}