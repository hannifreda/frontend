import { HomeAssistant } from "../types";
import { DataEntryFlowStep } from "./data_entry_flow";

export const createOptionsFlow = (hass: HomeAssistant, handler: string) =>
  hass.callApi<DataEntryFlowStep>(
    "POST",
    "config/config_entries/options/flow",
    {
      handler,
    }
  );

export const fetchOptionsFlow = (hass: HomeAssistant, flowId: string) =>
  hass.callApi<DataEntryFlowStep>(
    "GET",
    `config/config_entries/options/flow/${flowId}`
  );

export const handleOptionsFlowStep = (
  hass: HomeAssistant,
  flowId: string,
  data: { [key: string]: any }
) =>
  hass.callApi<DataEntryFlowStep>(
    "POST",
    `config/config_entries/options/flow/${flowId}`,
    data
  );

export const deleteOptionsFlow = (hass: HomeAssistant, flowId: string) =>
  hass.callApi("DELETE", `config/config_entries/options/flow/${flowId}`);
