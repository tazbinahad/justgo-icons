import React, { useState, useMemo, useEffect } from "react";
import * as AllIcons from "../index";
import { Theme } from "../App"; // Ensure you import the Type if in separate files

interface IconExplorerProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  theme: Theme;
}

// Mock Metadata Generator
const getIconMetadata = (name: string) => ({
  packageName: "@justgo/icons",
  importName: name,
  tags: ["ui", "interface", "system", name.toLowerCase().replace("icon", "")],
  maintainer: "Design Systems Team",
  description: "Reserved for system-wide navigation and interface actions.",
});

const IconExplorer: React.FC<IconExplorerProps> = ({ size = "md", theme }) => {
  const [query, setQuery] = useState("");
  const [selectedIconName, setSelectedIconName] = useState<string | null>(null);

  const iconList = useMemo(() => {
    return Object.entries(AllIcons)
      .filter(([name]) => name.startsWith("Icon"))
      .sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  const filteredIcons = useMemo(() => {
    if (!query) return iconList;
    const lowerQuery = query.toLowerCase();
    return iconList.filter(([name]) => name.toLowerCase().includes(lowerQuery));
  }, [query, iconList]);

  // Auto-select first icon on load/filter
  useEffect(() => {
    if (!selectedIconName && filteredIcons.length > 0) {
      setSelectedIconName(filteredIcons[0][0]);
    }
  }, [filteredIcons, selectedIconName]);

  const SelectedIconComponent = selectedIconName
    ? // @ts-ignore
      AllIcons[selectedIconName]
    : null;

  const metadata = selectedIconName ? getIconMetadata(selectedIconName) : null;

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        backgroundColor: theme.bg,
        color: theme.textPrimary,
        transition: "background-color 0.2s, color 0.2s",
      }}
    >
      {/* LEFT COLUMN: Search & Grid */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          borderRight: `1px solid ${theme.border}`,
          overflow: "hidden",
        }}
      >
        {/* Header Section */}
        <div style={{ padding: "32px 40px 24px 40px" }}>
          <h1
            style={{ margin: "0 0 16px 0", fontSize: "24px", fontWeight: 500 }}
          >
            Icon explorer
          </h1>
          <p
            style={{
              margin: "0 0 24px 0",
              color: theme.textSecondary,
              fontSize: "14px",
            }}
          >
            Search for icons, and select an icon to view usage and import
            details.
          </p>

          <div style={{ display: "flex", gap: "12px" }}>
            {/* Search Input */}
            <div style={{ position: "relative", flex: 1, maxWidth: "600px" }}>
              <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 12px 10px 36px",
                  fontSize: "14px",
                  borderRadius: "3px",
                  border: `2px solid ${theme.border}`,
                  backgroundColor: theme.inputBg,
                  color: theme.inputText,
                  outline: "none",
                  transition: "background-color 0.2s, border-color 0.2s",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: "12px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: theme.textSecondary,
                  fontSize: "14px",
                }}
              >
                🔍
              </span>
            </div>

            {/* Filter Button */}
            <button
              style={{
                padding: "0 12px",
                backgroundColor: "transparent",
                border: `2px solid ${theme.border}`,
                borderRadius: "3px",
                color: theme.textPrimary,
                fontSize: "14px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Filters
              <span
                style={{
                  backgroundColor: theme.textSecondary,
                  color: theme.bg, // Inverted text color for badge
                  fontSize: "10px",
                  padding: "0 4px",
                  borderRadius: "2px",
                }}
              >
                1
              </span>
            </button>
          </div>
        </div>

        <div style={{ padding: "0 40px 16px 40px" }}>
          <h2
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: theme.textSecondary,
              margin: 0,
            }}
          >
            Core <span style={{ fontWeight: 400 }}>@justgo/icons</span>
          </h2>
        </div>

        {/* Scrollable Grid */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "0 40px 40px 40px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
              gap: "8px",
            }}
          >
            {filteredIcons.map(([name, IconComponent]) => {
              // @ts-ignore
              const Component = IconComponent;
              const isSelected = selectedIconName === name;

              return (
                <div
                  key={name}
                  onClick={() => setSelectedIconName(name)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "120px",
                    borderRadius: "4px",
                    border: isSelected
                      ? `2px solid ${theme.selectedBorder}`
                      : `2px solid transparent`,
                    backgroundColor: isSelected
                      ? theme.selectedBg
                      : "transparent",
                    cursor: "pointer",
                    transition: "all 0.1s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected)
                      e.currentTarget.style.backgroundColor = theme.hoverBg;
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected)
                      e.currentTarget.style.backgroundColor = "transparent";
                  }}
                >
                  <div style={{ marginBottom: "12px", color: theme.iconColor }}>
                    <Component size={size} />
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: isSelected ? theme.accent : theme.textSecondary,
                      textAlign: "center",
                      wordBreak: "break-all",
                      padding: "0 8px",
                    }}
                  >
                    {name.replace("Icon", "")}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Details Sidebar */}
      <div
        style={{
          width: "360px",
          borderLeft: `1px solid ${theme.border}`,
          backgroundColor: theme.panelBg,
          display: "flex",
          flexDirection: "column",
          padding: "32px 24px",
          overflowY: "auto",
          transition: "background-color 0.2s",
        }}
      >
        {selectedIconName && SelectedIconComponent ? (
          <>
            {/* Big Icon Preview */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "24px",
                padding: "40px",
                color: theme.textPrimary,
              }}
            >
              {/* @ts-ignore */}
              <SelectedIconComponent
                size="xl"
                style={{ transform: "scale(2)" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                }}
              >
                <h2 style={{ fontSize: "20px", fontWeight: 600, margin: 0 }}>
                  {selectedIconName.replace("Icon", "")}
                </h2>
                <span
                  style={{
                    fontSize: "11px",
                    border: `1px solid ${theme.textSecondary}`,
                    borderRadius: "10px",
                    padding: "2px 8px",
                    color: theme.textSecondary,
                  }}
                >
                  Single purpose
                </span>
              </div>
              <p
                style={{
                  fontSize: "14px",
                  color: theme.textSecondary,
                  lineHeight: "1.5",
                }}
              >
                {metadata?.description}
              </p>
            </div>

            {/* Tags area */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                marginBottom: "32px",
              }}
            >
              {metadata?.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "12px",
                    backgroundColor: theme.hoverBg, // Using hover bg for tags
                    color: theme.textPrimary,
                    padding: "4px 8px",
                    borderRadius: "3px",
                    fontFamily: "monospace",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Meta Info */}
            <div style={{ marginBottom: "32px" }}>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                Maintained by
              </h3>
              <div style={{ fontSize: "14px", color: theme.textSecondary }}>
                {metadata?.maintainer}
              </div>
            </div>

            <div
              style={{
                height: "1px",
                backgroundColor: theme.border,
                marginBottom: "32px",
              }}
            />

            {/* React Code Snippet */}
            <div>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                React
              </h3>
              <div
                style={{
                  backgroundColor: theme.codeBg,
                  border: `1px solid ${theme.border}`,
                  borderRadius: "4px",
                  padding: "16px",
                  position: "relative",
                }}
              >
                <code
                  style={{
                    fontFamily: "monospace",
                    fontSize: "12px",
                    color: theme.textPrimary,
                    display: "block",
                    lineHeight: "1.6",
                  }}
                >
                  <span style={{ color: "#FF79C6" }}>import</span>{" "}
                  {selectedIconName}{" "}
                  <span style={{ color: "#FF79C6" }}>from</span>
                  <br />
                  <span style={{ color: theme.accent }}>
                    '{metadata?.packageName}/{metadata?.importName}';
                  </span>
                </code>
              </div>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  marginTop: "12px",
                  fontSize: "14px",
                  color: theme.accent,
                  textDecoration: "none",
                }}
              >
                View code examples ↗
              </a>
            </div>
          </>
        ) : (
          <div style={{ color: theme.textSecondary }}>Select an icon...</div>
        )}
      </div>
    </div>
  );
};

export default IconExplorer;
