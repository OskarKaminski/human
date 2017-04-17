export const overlays = (state = '', action) => {
    switch(action.type){
        case 'SHOW_MARSHALL':
            return 'marshall'
        case 'HIDE_MARSHALL':
            return ''
    }
    return state;
}
