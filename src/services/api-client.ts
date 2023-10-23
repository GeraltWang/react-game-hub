import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '480194a2c53d4fc6a916c865bd798438'
  }
})