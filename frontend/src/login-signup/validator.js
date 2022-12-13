function validator(e, username, email, password, confPassword, checkbox) {
  // console.log(e);
  clearPreviousErrors();

  const hasUser = checkUsername(username);
  const hasMail = checkEmail(email);
  const hasPass = checkPassword(password);
  const hasConPas = checkConfPassword(confPassword, password);
  const hasChecked = checkCheckBox(checkbox);
  if (!hasUser || !hasMail || !hasPass || !hasConPas || !hasChecked) {
    e.preventDefault();
  }
}

function clearPreviousErrors() {
  const errors = document.body.querySelectorAll('.error');
  errors.forEach((error) => {
    error.remove();
  });
}
export function loginValidator(e, email, password) {
  clearPreviousErrors();
  const hasMail = checkEmail(email);
  const hasPass = checkPassword(password);
  if (!hasMail || !hasPass) {
    e.preventDefault();
  }
}

export function checkUsername(username) {
  if (username.value.length < 3) {
    callInvalid(username);
    createError(username, 'Username at least 3 characters');
    return false;
  }
  callValid(username);
  return true;
}

export function checkEmail(email) {
  if (email.value.length <= 0) {
    callInvalid(email);
    createError(email, 'Enter a valid email');
    return false;
  } else if (!validateEmail(email.value)) {
    callInvalid(email);
    createError(email, 'You have entered an invalid email address!');
  } else {
    callValid(email);
    return true;
  }
}

function validateEmail(mail) {
  // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
  if (mail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    return true;
  }
  return false;
}
export function checkPassword(password) {
  if (password.value.length < 6) {
    callInvalid(password);
    createError(password, 'Password must be at least 6 characters');
    return false;
  }
  callValid(password);
  return true;
}
export function checkConfPassword(confPassword, password) {
  if (confPassword.value.length <= 0) {
    callInvalid(confPassword);
    createError(confPassword, 'Confirm your password');
    return false;
  } else if (confPassword.value !== password.value) {
    callInvalid(confPassword);
    createError(confPassword, 'Both passwords must match');
    return false;
  } else {
    callValid(confPassword);
    return true;
  }
}

export function checkCheckBox(checkbox) {
  if (!checkbox.checked) {
    createError(checkbox, 'Required');
    return false;
  }
  return true;
}

function callInvalid(element) {
  element.classList.add('invalid');
}

function callValid(element) {
  element.classList.add('valid');
}

function createError(element, message) {
  const span = document.createElement('span');
  span.innerText = message;
  span.classList.add('error');
  element.parentNode.appendChild(span);
}

export default validator;
