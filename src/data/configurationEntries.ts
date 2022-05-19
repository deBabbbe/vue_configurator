import { v4 as uuidv4 } from "uuid";

interface IConfigurationEntry {
  id: string;
  key: string;
  value: string;
}

export const configEntries: IConfigurationEntry[] = [
  { id: uuidv4(), key: "Common.Component.Name", value: "Configurator" },
  { id: uuidv4(), key: "Common.Logging.Target", value: "Nlog" },
  { id: uuidv4(), key: "Communicator.Refresh.Intervall", value: "00:00:10" },
  { id: uuidv4(), key: "Dispatcher.Refresh.Intervall", value: "00:00:15" },
];
