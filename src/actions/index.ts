export const PAGE = "PAGE"
export const  NICKNAME = "NICKNAME"

export const setPage = (payload: any) => ({
    type: PAGE,
    payload
})

export const setNickName = (payload: any) => ({
  type: NICKNAME,
  payload
})