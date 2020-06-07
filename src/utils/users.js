const users = [];

// addUser, removeUser, getUser, getUsersInRoom

const addUser = ({ id, username, room }) => {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  if (!username || !room) {
    return {
      error: "username and room are required",
    };
  }

  const validateUser = users.find((user) => {
    return user.username === username && user.room === room;
  });

  if (validateUser) {
    return {
      error: "username is already in use!",
    };
  }

  const user = { id, username, room };
  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  const user = users.find((user) => user.id === id);
  if (user) {
    return user;
  }
  return undefined;
};

const getUsersInRoom = (room) => {
  return users.filter((user) => user.room === room);
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
