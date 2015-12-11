export const ADD_FILES = 'ADD_FILES';

export function addFiles(files) {
    return {
        type: ADD_FILES,
        files,
    };
}

export const REMOVE_FILES = 'REMOVE_FILES';

export function removeFiles(files) {
    return {
        type: REMOVE_FILES,
        files,
    };
}

export const UPLOAD_NEW = 'UPLOAD_NEW';

export function uploadNew(upload) {
    upload.date = Date.now(); //TODO: Add this at upload network initiation
    upload.id = Math.random(); //TODO: Use a guid
    upload.status = 'active';

    return {
        type: UPLOAD_NEW,
        upload,
    };
}

export const UPLOAD_EDIT = 'UPLOAD_EDIT';

/** @todo  Make signature the same as other upload action creators */
export function uploadEdit(id, upload) {
    return {
        type: UPLOAD_EDIT,
        id,
        upload,
    }
}

export const UPLOAD_PAUSE = 'UPLOAD_PAUSE';

export function uploadPause(id) {
    return {
        type: UPLOAD_PAUSE,
        id,
    };
}

export const UPLOAD_REMOVE = 'UPLOAD_REMOVE';

export function uploadRemove(id) {
    return {
        type: UPLOAD_REMOVE,
        id,
    };
}

export const UPLOAD_NETWORK_PROGRESS = 'UPLOAD_NETWORK_PROGRESS';

export function uploadNetworkProgress(id, progress) {
    return {
        type: UPLOAD_NETWORK_PROGRESS,
        id,
        progress,
    };
}

export const UPLOAD_NETWORK_ERROR = 'UPLOAD_NETWORK_ERROR';

export function uploadNetworkError(id) {
    return {
        type: UPLOAD_NETWORK_ERROR,
        id,
    };
}

export const UPLOAD_COMPLETE = 'UPLOAD_COMPLETE';

export function uploadComplete(id) {
    return {
        type: UPLOAD_COMPLETE,
        id,
    };
}
