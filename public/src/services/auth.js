export default function Auth($firebaseAuth) {
    return $firebaseAuth();
}

Auth.$inject = ['$firebaseAuth'];