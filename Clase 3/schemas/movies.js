const z = require('zod')

const schema = z.object({
    title: z.string({
        invalid_type_error: 'Tittle must be a string',
        required_error: 'Tittle is required',
    }),
    year: z.number().int().min(1900).max(2024),
    director: z.string(),
    genre: z.array(
        z.enum(['Action', 'Terror', 'Drama', 'Romance', 'Adventure', 'Comedy', 'Fantasy', 'Thriller'])
    )
})

function validateMovie(object) {
    return schema.safeParse(object);
}

function validatePartialMovie (object){
    return schema.partial().safeParse(object)
}

module.exports = {
    validateMovie,
    validatePartialMovie
};