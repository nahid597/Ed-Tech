import { COURSE_DETAILS, SHOWING_COURSE_LIST, YOUTUBE_EMBED_ID } from "./courseTypes"

export const courseDetails = () => {
    return {
        type: COURSE_DETAILS
    }
}

export const showingCourseList = () => {
    return {
        type: SHOWING_COURSE_LIST
    }
};

export const youtubeEmbedId = (embedId) => {
    return {
        type: YOUTUBE_EMBED_ID,
        payload: embedId
    }
};