import { v4 as uuidv4 } from "uuid";

export interface ConfigurationEntry {
  id: string;
  key: string;
  value: string;
}

export const configEntries: ConfigurationEntry[] = [
  { id: uuidv4(), key: "Common.Component.Name", value: "Configurator" },
  { id: uuidv4(), key: "Common.Logging.Target", value: "Nlog" },
  { id: uuidv4(), key: "Communicator.Refresh.Intervall", value: "00:00:10" },
  { id: uuidv4(), key: "Dispatcher.Refresh.Intervall", value: "00:00:15" },
];
