// Thay đổi đường dẫn với URL của Google Apps Script bạn tạo sau khi triển khai.
const registerScriptUrl = 'https://script.google.com/macros/s/AKfycbyQVsWbUsrd-3Y-lfvUkQkf7ihdYOzdV47enMdIO8TO9v0jmxVa3am-BcLeqt0L-B9n/exec';
const loginScriptUrl = 'https://script.google.com/macros/s/AKfycbwiTHfsoT0bKo6qcSH2Q12bEqSUc06ueRTjjGBeCIV7gSzuZnf5ZxMPlansIHFnhkuB/exec';

// Đăng ký tài khoản
document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) {
    alert("Xác nhận mật khẩu không khớp.");
    return;
  }

  const data = {
    username: username,
    password: password,
    email: email
  };

  fetch(registerScriptUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    alert(data.message);
    document.getElementById('registerForm').reset();
  })
  .catch(error => console.error('Error:', error));
});

// Đăng nhập
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;

  const data = {
    username: loginUsername,
    password: loginPassword
  };

  fetch(loginScriptUrl, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Đăng nhập thành công.');
      // Xử lý chuyển hướng hoặc thực hiện các tác vụ sau khi đăng nhập thành công.
    } else {
      alert('Đăng nhập thất bại. Vui lòng kiểm tra lại tên đăng nhập và mật khẩu.');
    }
    document.getElementById('loginForm').reset();
  })
  .catch(error => console.error('Error:', error));
});
