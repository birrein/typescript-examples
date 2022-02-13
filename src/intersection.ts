type User = {
  name: string;
  startDate: Date;
};

type Admin = {
  name: string;
  permission: string[];
};

type UserAdmin = User & Admin;

const userAdmin: UserAdmin = {
  name: 'John',
  startDate: new Date(),
  permission: ['read', 'write'],
};
