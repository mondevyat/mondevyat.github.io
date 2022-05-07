function checkPassword() {
  const result = prompt("Введите пароль", "");
  return result === '123' ? window.location.href = `${window.location}/cw/coursework.docx` : alert("Неверный пароль");
};
