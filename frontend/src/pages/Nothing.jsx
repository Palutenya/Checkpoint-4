import React, { Suspense, useEffect, useState } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Nettoyage du listener lorsqu'un composant est démonté
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Le tableau de dépendances est vide, ce qui signifie que cela s'exécutera une seule fois à l'initialisation du composant

  return windowSize;
}

function Nothing() {
  const windowSize = useWindowSize();

  return (
    <div className="Nothing-body-content">
      {windowSize.width > 1240 ? (
        <Suspense
          fallback={
            <div className="banter-loader">
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
            </div>
          }
        >
          <Spline
            className="spline"
            scene="https://prod.spline.design/Yj-vQYUXirJoGtG4/scene.splinecode"
          />
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <div className="banter-loader">
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
              <div className="banter-loader__box" />
            </div>
          }
        >
          <Spline
            className="spline"
            scene="https://prod.spline.design/JfMMsIHTS1I-eKHt/scene.splinecode"
          />
        </Suspense>
      )}
    </div>
  );
}

export default Nothing;
