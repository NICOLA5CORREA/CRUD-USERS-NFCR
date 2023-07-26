import { useState } from "react"
import axios from "axios"
const useFetch = (baseUrl, setCloseForm) => {

    const [infoApi, setInfoApi] = useState()

    //GET = lee la data de la api

    const getApi = (path) => {
        const url = `${baseUrl}${path}`
        axios.get(url)
        .then(res => setInfoApi(res.data))
        .catch(err => console.log(err))
    }
    //POST = crear nueva info
    const postApi = (path, data) => {
        const url = `${baseUrl}${path}/`
        axios.post(url, data)
            .then(res => {
                console.log(res.data)
                setInfoApi([ ...infoApi, res.data ])
                setCloseForm (true)
            })
            .catch(err => console.log(err))
    }


    //DELETE
    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(res => {
                console.log(res.data)
                const infoApiFiltered = infoApi.filter(element => element.id !== id)
                setInfoApi(infoApiFiltered)
            })
            .catch(err => console.log(err))
    }

    //UPDATE
    const updateApi = (path, id, data) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.patch(url, data)
            .then(res => {
                console.log(res.data)
                const infoApiMapped = infoApi.map (element => element.id === id ? res.data : element)
                setInfoApi(infoApiMapped)
                setCloseForm (true)
            })
            .catch(err => console.log(err))
    }

return [ infoApi, getApi, postApi, deleteApi, updateApi ]
}

export default useFetch
