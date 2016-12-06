import firebase from './firebase';
import _ from 'lodash';

class ThankYou {

    constructor(){
    }

    send(item) {
        const ref = firebase.database().ref('thank-you');
        const itemToSend = {
            ..._.omit(item, ['$$hashKey']),
            createdAt: Date.now()
        };

        ref.child(item.sender.uid).push().set(itemToSend);
        ref.child(item.recipient.uid).push().set(itemToSend);
        const pointsRef = firebase.database().ref('habit-requests')
            .child(item.dbKey)
            .child('points');
        pointsRef.once('value', snapshot => {
            console.log(snapshot.val());
            const points = snapshot.val();
            pointsRef.set(points + 1);
        });
    }
}

export default new ThankYou();