import axios from 'axios'
import { useQuery } from 'react-query'
import useLangContext from './useLangContext'


const useQueryData = (url, method, key, body= null) => {

    const {lang} = useLangContext()

    let getData = () => {
        return axios({
            url: url,
            method: method,
            data: body
        })
    }

    const {isLoading, isError, data, isFetching} = useQuery(key, getData)
        

    return {isLoading, isError, isFetching, data};
}

export default useQueryData





