import { useChainStateQuery } from "../hooks/useChainStateQuery";
import { Entity, Realm as RealmType } from "../types";
import { useHistoryQuery } from "../hooks/useHistoryQuery";
import { fetchRPC } from "../api";
import Button from "../elements/Button";

interface Props {
  entity_id: number;
}

export const Realm = ({ entity_id }: Props) => {
  // component data
  // const promises: any = [
  //   fetchRPC({ entity_id: entity_id, component: "" }),
  //   fetchRPC({ entity_id: entity_id, component: "" }),
  //   fetchRPC({ entity_id: entity_id, component: "" }),
  // ];

  // const {
  //   data: RealmState,
  //   loading: RealmStateLoading,
  //   error: RealmStateError,
  // } = useChainStateQuery<RealmType>(promises, entity_id, Entity.Realm);
  // const {
  //   data: Realm,
  //   loading: RealmLoading,
  //   error: RealmError,
  // } = useHistoryQuery<RealmType>(entity_id, Entity.Realm);
  return (
    <div>
      {/* <h1 className="text-white">{Realm?.name}</h1> */}
      <Button onClick={() => console.log("this")}>Realm</Button>
    </div>
  );
};
