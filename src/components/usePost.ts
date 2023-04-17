import axios from 'axios';
import { UseQueryResult, useQuery } from 'react-query'
import { useSelector } from 'react-redux';
import { IApi } from '../interfaces/posts';

function usePost():UseQueryResult {
    const { page } = useSelector((globalState: any) => globalState.pagination)

    const fetch = async () => {
        const result = axios.create({baseURL: "http://dev.codeleap.co.uk/"})
        const { data } = await result
        .get(`/careers/?limit=10&offset=${10 * (page - 1)}/`) as IApi
        return data
    }

    return useQuery(['posts', { page }], fetch)  
}

export default usePost;
