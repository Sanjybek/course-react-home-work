import { App } from 'antd'
import axios from 'axios'
const API = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})


export {API}