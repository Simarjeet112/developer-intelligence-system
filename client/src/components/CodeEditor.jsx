import Editor from "@monaco-editor/react";

const CodeEditor = ({
  code,
  setCode,
  language = "javascript",
  theme = "vs-dark",
}) => {
  return (
    <div
      style={{
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        border: "1px solid #e0e0e0",
      }}
    >
      <div
        style={{
          backgroundColor: "#2d2d2d",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          borderBottom: "1px solid #404040",
        }}
      >
        <span
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#ff5f56",
          }}
        />
        <span
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#ffbd2e",
          }}
        />
        <span
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#27c93f",
          }}
        />
        <span
          style={{
            marginLeft: "auto",
            color: "#fff",
            fontSize: "0.9rem",
            fontFamily: "monospace",
            opacity: 0.7,
          }}
        >
          {language.toUpperCase()}
        </span>
      </div>
      <Editor
        height="350px"
        language={language}
        value={code}
        onChange={(value) => setCode(value)}
        theme={theme}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: false,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          padding: { top: 16, bottom: 16 },
        }}
      />
    </div>
  );
};

export default CodeEditor;