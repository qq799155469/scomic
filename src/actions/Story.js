import * as types from './actionTypes'

export function GetStoryDetail(story_id) {
	return {
		type: types.GET_STORY_DETAIL,
		storyId: story_id
	}
}