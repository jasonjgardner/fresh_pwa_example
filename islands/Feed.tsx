import { useSignal } from "@preact/signals";
import { Button } from "../components/Button.tsx";

interface FeedProps {
}

export default function Feed(props: FeedProps) {
  const service = useSignal("Fresh island");
  const handleClick = async () => {
    const res = await fetch("/api");
    const json = await res.json();
    service.value = json.service;
  };

  return (
    <div class="flex gap-8 py-6">
      <p>{service}</p>
      <Button onClick={handleClick}>Update</Button>
    </div>
  );
}
