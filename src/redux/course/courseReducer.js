import { COURSE_DETAILS, SHOWING_COURSE_LIST, YOUTUBE_EMBED_ID } from "./courseTypes";

const initialState = {
    courseDetails: false,
    showingCourseList: false,
    youtubeEmbedId: 'nu_pCVPKzTk'
};


export const courseDetailsReducer = (state = initialState, action) => {

    switch(action.type) {
        case COURSE_DETAILS : 
            return {
                ...state,
                courseDetails: !state.courseDetails
            }
        case SHOWING_COURSE_LIST :
            return {
                ...state,
                showingCourseList: !state.showingCourseList
            }
        case YOUTUBE_EMBED_ID :
            return {
                ...state,
                youtubeEmbedId: action.payload
            }
        default:
           return state;
    }
}