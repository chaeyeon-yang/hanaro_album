export type TUserInfo = {
    id: number;
    name: string;
    username: string;
    isLogin: boolean;
};

export type TLoginAction = { type: "LOGIN"; value: TUserInfo };
