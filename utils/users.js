const users = [];

// Join user to chat
function userJoin(id, username, room, role) {
  const user = { id, username, room, role };

  users.push(user);

  return user;
}

// Get current user
function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}

// Get room users
function getRoomUsers(room) {
  return users.filter((user) => user.room === room);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    const leftUser = users.find((user) => user.id === id);
    users.splice(index, 1);

    return leftUser;
  }
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
};
