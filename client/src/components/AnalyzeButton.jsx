const AnalyzeButton = ({ onClick, isLoading = false }) => {
    return (
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          onClick={onClick}
          disabled={isLoading}
          style={{
            padding: "12px 32px",
            fontSize: "1rem",
            fontWeight: "600",
            color: "white",
            backgroundColor: isLoading ? "#ccc" : "#4a90e2",
            border: "none",
            borderRadius: "8px",
            cursor: isLoading ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
            boxShadow: isLoading ? "none" : "0 2px 8px rgba(74, 144, 226, 0.3)",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            outline: "none",
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.target.style.backgroundColor = "#357abd";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 4px 12px rgba(74, 144, 226, 0.4)";
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.target.style.backgroundColor = "#4a90e2";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 2px 8px rgba(74, 144, 226, 0.3)";
            }
          }}
        >
          {isLoading ? (
            <>
              <span
                style={{
                  width: "20px",
                  height: "20px",
                  border: "3px solid #f3f3f3",
                  borderTop: "3px solid #4a90e2",
                  borderRadius: "50%",
                  animation: "spin 1s linear infinite",
                }}
              />
              Analyzing...
            </>
          ) : (
            <>
              <span style={{ fontSize: "1.2rem" }}></span>
              Analyze Code
            </>
          )}
        </button>
        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  };
  
  export default AnalyzeButton;
  