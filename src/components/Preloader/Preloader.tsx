import React, { useEffect, useState } from "react";
import s from "./Preloader.module.scss";
import Loader from "../Loader/Loader";

type Props = {
  children: React.ReactNode;
};

const Preloader: React.FC<Props> = ({ children }) => {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setLoadingPage(false);
  }, []);

  const classes = loadingPage ? s.bg : `${s.bg} ${s.__hide}`;

  return (
    <>
      <div className={classes}>
        <Loader absolute={true} />
      </div>
      {children}
    </>
  );
};

export default Preloader;
