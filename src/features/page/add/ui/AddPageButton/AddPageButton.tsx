import { useAddPageMutation } from "@/shared/api";

export const AddPageButton = () => {
  const [addPage] = useAddPageMutation();

  return <button onClick={addPage}>+</button>;
};
