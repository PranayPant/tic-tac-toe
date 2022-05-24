import { USER_AUTH_ENDPOINT, MOVE_ENDPOINT } from "constants/app";
import { UserRequest, UserResponse } from "types/UserAuth";
import { MoveRequest, MoveResponse } from "types/Move";

export const authenticateUser = async (
    params: UserRequest
): Promise<UserResponse> => {
    const res = await fetch(USER_AUTH_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params)
    });
    return (await res.json()) as Promise<UserResponse>;
};

export const fetchNextMove = async (
    params: MoveRequest
): Promise<MoveResponse> => {
    const res = await fetch(MOVE_ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
                window.sessionStorage.getItem("access-token") as string
            }`
        },
        body: JSON.stringify({
            board: params.board
        })
    });
    return (await res.json()) as Promise<MoveResponse>;
};
