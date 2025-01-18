export interface IMessage {
  text: string;
  username: string;
  id: string;
  socketId: string;
}

export interface IUser {
  username: string;
  socketId: string;
}
