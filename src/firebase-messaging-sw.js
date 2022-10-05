importScripts('https://www.gstatic.com/firebasejs/11.13.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.13.0/firebase-messaging.js');

var config = {
	apiKey: "AIzaSyBQuY8dr9B2qQmktHC0YTD9L4QlT5gX8is",
	authDomain: "pwa240-214.firebaseapp.com",
	databaseURL: "https://pwa240-214-default-rtdb.firebaseio.com",
	projectId: "pwa240-214",
	storageBucket: "pwa240-214.appspot.com",
	messagingSenderId: "905276096160",
	appId: "1:905276096160:web:0fb139f85b27f0519093c5",
	measurementId: "G-5PYQ944LRM"
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