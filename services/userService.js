import instance from "./config"

const userService = {
    update: async (id, form) => {
        try {
            const data = await instance.put(`/api/v1/admin/users/${id}`, form)
            return data
        }
        catch ( error ){
            console.log(error)
        }
    }
}

export default userService;