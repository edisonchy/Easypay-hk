import Title from "@/components/title";

export default function Shoplayout({ children }) {
  return (
    <div>
      <div className={"backdrop-blur-sm w-full h-screen fixed -z-1"} />
      <Title />
      {children}
    </div>
  );
}
