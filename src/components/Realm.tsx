import Button from "../elements/Button";

interface Props {
  entity_id: number;
}

export const Realm = ({ entity_id }: Props) => {
  return (
    <div>
      <Button onClick={() => console.log("this")}>Realm</Button>
    </div>
  );
};
