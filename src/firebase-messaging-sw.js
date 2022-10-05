importScripts('https://www.gstatic.com/firebasejs/11.13.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.13.0/firebase-messaging.js');

var config = {
	apiKey: "AIzaSyAcTj2Z9G1g1_vCqXcjH3V_iFWOqyL-u4s",
	authDomain: "assign-pwa.firebaseapp.com",
	databaseURL: "https://assign-pwa-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "assign-pwa",
	storageBucket: "assign-pwa.appspot.com",
	messagingSenderId: "192755878920",
	appId: "1:192755878920:web:7c480fdd94e95ed30b95bd",
	measurementId: "G-V4LQHB19Y3"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
	const title = 'Hello World';
	const options = {
		body: payload.data.body
	};
	return self.registration.showNotification(title, options);
});