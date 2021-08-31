// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDMLXfZq6oEWt7TqX1HFK6_Qb7VO7WFx_Y",
	authDomain: "sistema-escola-5d430.firebaseapp.com",
	projectId: "sistema-escola-5d430",
	storageBucket: "sistema-escola-5d430.appspot.com",
	messagingSenderId: "848184685281",
	appId: "1:848184685281:web:60f2b2e7ca590d795a7da0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();


function cadastro(newEmail, newPassword){

	auth.createUserWithEmailAndPassword(newEmail, newPassword)
		.then(newUser => {
			console.log(newUser);
		})
		.catch(err =>{
			console.log(err);
		})

}


function login(email, password){

	auth.signInWithEmailAndPassword(email, password)
		.then((loggedUser) => {
			console.log(loggedUser);
		})
		.catch((error) => {
			console.log(error);
		});
}

