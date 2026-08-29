// figma node: 143:71 Trustpilot star + bg
export function TrustpilotStarBg(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 197.5,
      height: 197.5,
      backgroundColor: "rgb(0,181,122)",
      display: "flex",
      flexDirection: "row",
      gap: 100,
      padding: "20px 20px 20px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 149.791,
        height: 142.46,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 149.791,
          height: 142.46,
          border: "1px dashed currentColor",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontSize: 10,
          opacity: 0.45,
        }}>Subtract</div>
      </div>
    </div>
  );
}
export default TrustpilotStarBg;
