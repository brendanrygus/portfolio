import React from "react";
import { userPrefersDark } from "theme";

import { getFlagFromQueryParams } from "./feature-flags.utils";

// Set flags at runtime based on user preferences, or query param overrides
const FEATURE_FLAGS = {
  darkModeDefault: getFlagFromQueryParams("darkMode", userPrefersDark()),
  unlocked: getFlagFromQueryParams("unlocked", true),
};

const FeatureFlagContext = React.createContext({});
export const useFeatureFlags = () => React.useContext(FeatureFlagContext);

export const FeatureFlagProvider = ({ children }) => {
  return (
    <FeatureFlagContext.Provider value={FEATURE_FLAGS}>
      {children}
    </FeatureFlagContext.Provider>
  );
};
