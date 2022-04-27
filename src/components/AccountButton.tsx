import { observer } from "mobx-react-lite";
import React from "react";
import { useStore } from "../stores/storeContext";

const AccountButton = () => {
  const store = useStore();

  const { user, isLoading } = store.userStore;

  console.log(isLoading);

  return (
    <div>
      <h2>{`user: ${user?.name}`}</h2>
    </div>
  );
};

export default observer(AccountButton);
