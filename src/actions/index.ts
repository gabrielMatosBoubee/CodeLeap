export const PAGE = "PAGE"
export const  NICKNAME = "NICKNAME"
export const POPUP = "POPUP"

export const setPage = (payload: number) => ({
    type: PAGE,
    payload
})

export const setNickName = (payload: string) => ({
  type: NICKNAME,
  payload
})

export const setIsPopUpOpen = (payload: boolean) => ({
  type: POPUP,
  payload
})