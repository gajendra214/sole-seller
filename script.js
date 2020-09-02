(function() {
  const firebaseConfig = {
    apiKey: "AIzaSyBseIEX1CrMzn9mo1bdlAZw2J-OCyg_6qQ",
    authDomain: "web-app-753ea.firebaseapp.com",
    databaseURL: "https://web-app-753ea.firebaseio.com",
    projectId: "web-app-753ea",
    storageBucket: "web-app-753ea.appspot.com",
    messagingSenderId: "766347398543",
    appId: "1:766347398543:web:ef7fdccfb9b8e78d76cffa"
  };

  firebase.initializeApp(firebaseConfig);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  btnLogin.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email,pass);
    promise.catch(e => console.log(e.message));

  });

  btnSignUp.addEventListener('click', e => {
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email,pass);
    
    promise.catch(e => console.log(e.message));
  });

  btnSignOut.addEventListener('click', e =>{
    firebase.auth().signOut();
  });
  
  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      console.log(firebaseUser);
      btnSignOut.classList.remove('hide')
    }else{
      console.log('not logged in');
      btnSignOut.classList.add('hide')


    }
  })



});