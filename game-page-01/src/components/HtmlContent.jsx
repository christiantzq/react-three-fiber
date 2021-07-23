import { useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

export default function HtmlContent({ className, style, children, portal }) {
  const { size } = useThree();
  return (
    <Html
      portal={portal}
      style={{
        position: "absolute",
        top: -size.height / 2,
        left: -size.width / 2,
        width: size.width,
        height: size.height,
      }}
    >
      <div className={className} style={style}>
        {children}
      </div>
    </Html>
  );
}
