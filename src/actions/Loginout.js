import * as types from './actionTypes'

export function LoginoutAction() {
	return {
		type: types.LOGINOUT,
		is_online: false
	}
}