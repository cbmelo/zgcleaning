import { defineStore } from "pinia";
// import service from '../services/userService';

export const useUsersStore = defineStore('users', {

    state: () => (
        {
            users: [],
            userDetails: {},
            total: '',
            isLoading: false,
            query: '',
            errors: '',
            allRoles: [],
            allMessages: '',
            currentPage: 1,
            lastPage: 1,
        }
    ),
    
    // Getters
    getters:{
        allUsers:(state) => state.users,
        user: (state) => state.userDetails,
        roles: (state) => state.allRoles,
        totalUsers: (state) => (state.users && state.users.length) || 0,
        message: (state) => state.allMessages
    },
  
    // Actions
    actions: {
        // Get Roles
        async getRoles() {
            try {
                const axios = useNuxtApp().$api
                const resp = await axios.get('/api/v1/admin/roles')
                console.log(resp);
                this.allRoles = resp.data
                
            } catch (error) {
                if(error.response.status === 422) {
                    this.errors = error.response.data.errors
                }
            }
        },
      
        async getUsers(page) {
            try {
                this.isLoading = true;
                const axios = useNuxtApp().$api;
                const resp = await axios.get(`/api/v1/admin/users?page=${page}`);
                const { current_page, data, last_page, total } = resp.data.users;
        
                this.currentPage = current_page;
                this.lastPage = last_page;
                this.total = total;
                this.users = data;
                this.isLoading = false;
            } catch (error) {
                console.error('Error fetching users:', error);
                this.errors = error.response.data.errors;
            }
        },
        
        previousPage() {
            if (this.currentPage > 1) {
                this.getUsers(this.currentPage - 1);
            }
        },
        
        nextPage() {
            if (this.currentPage < this.lastPage) {
                this.getUsers(this.currentPage + 1);
            }
        },
        

        

        async getUserDetails(id) {
            try {
                this.isLoading = true
                const axios = useNuxtApp().$api
                const resp = await axios.get(`/api/v1/admin/users/${id}`)
                this.userDetails = resp.data
                this.isLoading = false
               
            } catch (error) {
                console.log(error);
            }
        },
        async addUser(form) {
            try {
                const axios = useNuxtApp().$api               
                const { data } = await axios.post('/api/register', form)
                const router = useRouter()
                router.push('/')
               
            } catch (error) {
                if(error.response.status === 422) {
                    this.errors = error.response.data.errors
                }
            }
        },
        async editUser(id, form) {
            try {
                // Log the information before sending
                // console.log('Updating user with ID:', id);
                console.log({form})
                const axios = useNuxtApp().$api  
                const resp = await axios.put(`/api/v1/admin/users/${id}`, form)
                // const data = await service.update(id, form)
                console.log(resp);
                const router = useRouter()
                router.push('/dashboard/users')
            } catch (error) {
                // if (error.response) {
                    // if(error.response.status === 422) {
                        // this.errors = error.response.data.errors
                    // }
                // }
                console.log(error)
            }
        },
        async deleteUser(id) {
           try {
            if(!window.confirm(`Are you sure?`)) {
                return ;
            }
            const axios = useNuxtApp().$api  
            const resp = await axios.delete(`/api/v1/admin/users/${id}`)
            console.log(resp);          
            await this.getUsers()
            this.message = resp.data.data.message
           } catch (error) {
            console.log(error);
           }
        },

        
    }
})