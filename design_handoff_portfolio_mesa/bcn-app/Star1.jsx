// figma node: 143:131 Star 1
export function Star1(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 56,
      height: 56,
      position: "relative",
      color: "rgb(247,135,27)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 56,
        height: 56,
        border: "1px dashed currentColor",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        fontSize: 10,
        opacity: 0.45,
      }}>Star 1</div>
    </div>
  );
}
export default Star1;
