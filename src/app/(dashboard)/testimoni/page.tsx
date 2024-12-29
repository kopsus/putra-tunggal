import Breadcrumb from "@/components/(dashboard)/_global/Breadcrumb";
import { storeDialog } from "@/store/dialog";
import { useSetAtom } from "jotai";
import React from "react";

const Testimoni = () => {
  const setDialog = useSetAtom(storeDialog);

  return (
    <>
      <Breadcrumb
        pageName="Testimoni"
        onClick={() => {
          setDialog({
            type: "CREATE",
            show: true,
            data: null,
          });
        }}
      />
    </>
  );
};

export default Testimoni;
