import z from 'zod'

const shorturlsSchema = z.object({
    originalUrl: z.string().url({
        required_error: "La Url debe ser ingresada.",
        message: "La Url ingresada debe ser valida."
    })
})

export function validateShorturl(object) {
    return shorturlsSchema.safeParse(object);
}

export function validateParcialShorturl(object){
    return shorturlsSchema.partial().safeParse(object);
}