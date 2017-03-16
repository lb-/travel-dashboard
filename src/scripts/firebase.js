const firebase = `
<script src="https://www.gstatic.com/firebasejs/3.7.2/firebase.js"></script>
<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCAKy4AtmT0dkZxvRJRJzsStJdYuVUC6kM",
    authDomain: "travel-dashboard.firebaseapp.com",
    databaseURL: "https://travel-dashboard.firebaseio.com",
    storageBucket: "travel-dashboard.appspot.com",
    messagingSenderId: "62084682313"
  };
  firebase.initializeApp(config);
</script>
`
export default firebase
