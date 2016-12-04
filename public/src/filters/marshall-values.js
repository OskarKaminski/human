export function marshallValues(){

    const values = {
        more: 'Do more',
        less: 'Do less',
        start: 'Start doing',
        stop: 'Stop doing',
        continue: 'Continue'
    };

    return function(key){
        return values[key];
    }
}