import { v4 as uuidv4 } from "uuid";

export interface IConfigurationEntry {
  id: string;
  key: string;
  value: string;
  type: string;
}

export const configEntries: IConfigurationEntry[] = [
  {
    id: uuidv4(),
    key: "Common.Imap.Username",
    type: "string",
    value: "Schorsch",
  },
  {
    id: uuidv4(),
    key: "Common.Imap.Password",
    type: "string",
    value: "*****",
  },
  {
    id: uuidv4(),
    key: "Common.Imap.Url",
    type: "string",
    value: "[PLEASE FILL VALUE]",
  },
  {
    id: uuidv4(),
    key: "Common.Imap.UseSsl",
    type: "bool",
    value: "true",
  },
  {
    id: uuidv4(),
    key: "Common.Send.Timeout",
    type: "DateTime",
    value: "2022-01-18T23:35:27",
  },
  {
    id: uuidv4(),
    key: "Common.Imap.Glubsch",
    type: "string",
    value: "",
  },
];
