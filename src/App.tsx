import React, { useState } from "react";
import IconExplorer from "./components/IconExplorer";

// --- Theme Definitions ---
export const THEMES = {
  light: {
    bg: "#FFFFFF",
    panelBg: "#FFFFFF",
    headerBg: "#FFFFFF",
    border: "#DCDFE4",
    textPrimary: "#172B4D",
    textSecondary: "#626F86",
    hoverBg: "#F1F2F4",
    selectedBg: "#E9F2FF",
    selectedBorder: "#0C66E4",
    inputBg: "#FFFFFF",
    inputText: "#172B4D",
    codeBg: "#F7F8F9",
    accent: "#0C66E4",
    iconColor: "#44546F", // Default icon color in grid
  },
  dark: {
    bg: "#1D2125",
    panelBg: "#1D2125",
    headerBg: "#1D2125",
    border: "#2C333A",
    textPrimary: "#B6C2CF",
    textSecondary: "#8590A2",
    hoverBg: "#2C333A",
    selectedBg: "#1C2B41",
    selectedBorder: "#579DFF",
    inputBg: "#1D2125",
    inputText: "#FFFFFF",
    codeBg: "#22272B",
    accent: "#579DFF",
    iconColor: "#B6C2CF",
  },
};

export type Theme = typeof THEMES.light;

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [size, setSize] = useState<"xs" | "sm" | "md" | "lg" | "xl">("md");

  const activeTheme = darkMode ? THEMES.dark : THEMES.light;

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: activeTheme.bg,
        color: activeTheme.textPrimary,
        display: "flex",
        flexDirection: "column",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        transition: "background-color 0.2s, color 0.2s",
        position: "relative",
      }}
    >
      {/* Navigation Bar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          borderBottom: `1px solid ${activeTheme.border}`,
          padding: "0 24px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: activeTheme.headerBg,
          transition: "border-color 0.2s, background-color 0.2s",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              fontSize: "16px",
              fontWeight: 700,
              color: activeTheme.textPrimary,
            }}
          >
            Icon Explorer
          </span>
        </div>

        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              padding: "6px 12px",
              borderRadius: "3px",
              border: `1px solid ${activeTheme.border}`,
              backgroundColor: "transparent",
              color: activeTheme.textPrimary,
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {darkMode ? "🌙 Dark" : "☀️ Light"}
          </button>

          <select
            value={size}
            onChange={(e) => setSize(e.target.value as any)}
            style={{
              padding: "6px 8px",
              borderRadius: "3px",
              backgroundColor: activeTheme.bg,
              border: `1px solid ${activeTheme.border}`,
              color: activeTheme.textPrimary,
              fontSize: "14px",
            }}
          >
            <option value="md">Size: Medium</option>
            <option value="lg">Size: Large</option>
            <option value="xl">Size: XL</option>
          </select>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1, overflow: "hidden" }}>
        <IconExplorer size={size} theme={activeTheme} />
      </main>
    </div>
  );
};

export default App;
