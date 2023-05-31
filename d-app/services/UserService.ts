import User from "../interfaces/User";

export default async function getUsers(input: string) {
  const users: User[] = [];

  // Fetch users from API
  const nameHack = input.length === 0 ? "John Doe" : input;
  users.push({id: 1, name: nameHack, gender:'m'});
  return users;
};