// Add your code here
function submitData(userName, userEmail) {
  const userData = {
    name: userName,
    email: userEmail,
  };
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData),
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then((resp) => resp.json())
    .then((object) => document.body.innerHTML = object['id'])
    .catch((error) => document.body.innerHTML = error.message);
}
