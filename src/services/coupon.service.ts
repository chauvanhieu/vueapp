import api from "./api"


type getCouponParams = {
    page?: number,
    limit?: number;
    slug?: string;
}
export const getAllCoupons = async ({ page = 1, limit = 15, slug }: getCouponParams) => {
    const url = slug ? `/coupons?page=${page}&limit=${limit}&domain=${slug}` : `/coupons?page=${page}&limit=${limit}`
    const { data } = await api.get(url)
    return data.data
}