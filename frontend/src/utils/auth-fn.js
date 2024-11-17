export const isUserLoggedIn = () => {
  // Retrieve the user token or logged-in status from localStorage
  const userToken = localStorage.getItem("userToken");

  // Check if the token exists and is valid
  return userToken !== null && userToken !== "";
};

export const isAdminLoggedIn = () => {
  // Retrieve the user token or logged-in status from localStorage
  const userToken = localStorage.getItem("adminToken");

  // Check if the token exists and is valid
  return userToken !== null && userToken !== "";
};
