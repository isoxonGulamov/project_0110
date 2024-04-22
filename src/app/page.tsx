import MainComponent from "@/components/MainComponent";
import MainLayot from "@/layouts/main-layot";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayot>
      <div>
        <MainComponent />
      </div>
    </MainLayot>
  );
}
