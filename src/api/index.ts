import { USER_AUTH_ENDPOINT } from '../constants'
import { UserRequest, UserResponse } from '../types/UserAuth'

export const authenticateUser = async (params: UserRequest): 
Promise<UserResponse> => {
    const res = await fetch(USER_AUTH_ENDPOINT, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(params)
    })
    return await res.json()
}