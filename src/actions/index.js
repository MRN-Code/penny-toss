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

export const ADD_UPLOAD = 'ADD_UPLOAD';

export function addUpload(upload) {
    return {
        type: ADD_UPLOAD,
        upload,
    };
}

export const EDIT_UPLOAD = 'EDIT_UPLOAD';

export function editUpload(upload) {
    return {
        type: EDIT_UPLOAD,
        upload,
    };
}
