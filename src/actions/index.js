export const ADD_FILES = 'ADD_FILES';

export function addFiles(files) {
    return {
        type: ADD_FILES,
        response: {
            entities: {
                files,
            }
        },
    };
}
