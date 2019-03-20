import { createApi } from '../ApiClient'

const [MyApi, MyApiProvider, useMyApi] = createApi(
	'https://com.api.magazine.trv.cloud/wp-json/api/v1',
)

export { MyApi, MyApiProvider, useMyApi }
