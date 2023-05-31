import User from "../interfaces/User";

export default async function getUsers(input: string) {
  const users: User[] = [];

  // Fetch users from API
  users.push({id: 1, name: "John Doe", gender:'m'});
  return users;
};