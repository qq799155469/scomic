import * as types from './actionTypes'

export function GetComicDetail(comic_id) {
	return {
		type: types.GET_COMIC_DETAIL,
		comicId: comic_id
	}
}