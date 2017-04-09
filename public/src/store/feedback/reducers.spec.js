import {feedback} from './reducers';

describe('Feedback reducers', () => {

    it(`Reject and accept feedback`, ()=> {
        const prevState = [
            {id: 1},
            {id: 2}
        ]
        const expected = [
            {id: 1}
        ]
        expect(feedback(prevState, {type: 'REJECT_FEEDBACK', id: 2}))
            .toEqual(expected)
        expect(feedback(prevState, {type: 'ACCEPT_FEEDBACK', id: 2}))
            .toEqual(expected)
    });
});
