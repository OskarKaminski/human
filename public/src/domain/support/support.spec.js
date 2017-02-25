import {canSupport} from './support';
import moment from 'moment';

describe('Domain Support', () => {

    describe(`When user wants show appreciation for working over the habit, 
    he can send thank you once per day`, () => {

        it('Should return true if there is no date of last support', () => {
            expect(canSupport()).toBeTruthy();
        });

        describe('Checking if a date is older than today', () => {
            const today = moment('2000-01-02').toDate();
            jasmine.clock().mockDate(today);

            it(`Yesterday's date should return true`, ()=> {
                const yesterday = '2000-01-01';
                expect(canSupport(yesterday)).toBeTruthy();
            });

            it(`Today's date should return false`, ()=> {
                const yesterday = '2000-01-02';
                expect(canSupport(yesterday)).toBeFalsy();
            });
        });
    });
});
