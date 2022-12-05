import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mov, setMov] = useState({
    movementX: 0,
    movenmntY: 0,
  });
  const scrle = 1.5;
  const imageSize = {
    width: 240,
    height: 360,
  };

  const covW = imageSize.width / 4;
  const covH = imageSize.height / 4;

  const insetTop = () => {
    if (mov.movenmntY <= covH / 2) {
      return 0;
    }
    if (mov.movenmntY >= imageSize.height - covH / 2) {
      return imageSize.height - covH;
    }
    return mov.movenmntY - covH / 2;
  };

  const insetWidth = () => {
    if (mov.movementX <= covW / 2) {
      return 0;
    }
    if (mov.movementX > imageSize.width - covW / 2) {
      return imageSize.width - covW;
    }
    return mov.movementX - covW / 2;
  };

  const bottomHeight = () => {
    if (mov.movenmntY <= covH / 2) {
      return imageSize.height - covH;
    }

    if (mov.movenmntY >= imageSize.height - covH / 2) {
      return 0;
    }

    return imageSize.height - mov.movenmntY - covH / 2;
  };

  const bottomTop = () => {
    if (mov.movenmntY <= covH / 2) {
      return covH;
    }
    return mov.movenmntY + covH / 2;
  };

  const rightWidth = () => {
    if (mov.movementX <= covW / 2) {
      return imageSize.width - covW;
    }
    if (mov.movementX >= imageSize.width - covW / 2) {
      return 0;
    }
    return imageSize.width - (mov.movementX + covW / 2);
  };

  const insetLeft = () => {
    if (mov.movementX <= covW / 2) {
      return covW;
    }
    if (mov.movementX >= imageSize.width - covW / 2) {
      return imageSize.width;
    }
    return mov.movementX + covW / 2;
  };

  return (
    <div
      style={{
        display: "inline-flex",
      }}
    >
      <div
        style={{
          width: 240,
          position: "relative",
          cursor: "crosshair",
          border: "1px solid red",
        }}
        onMouseMove={(e) => {
          console.log(e.nativeEvent.clientX, e.nativeEvent.clientY);
          setMov({
            movementX: e.nativeEvent.offsetX,
            movenmntY: e.nativeEvent.offsetY,
          });
        }}
        onMouseLeave={() => {}}
      >
        <Image
          style={{
            display: "flex",
          }}
          src="/test.jpg"
          width={240}
          height={360}
          alt="image"
        />
        <div
          style={{
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: insetTop(),
              inset: `0 auto auto`,
              backgroundColor: "rgba(0,0,0,.6)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: insetWidth(),
              height: covH,
              inset: `${insetTop()}px auto auto auto`,
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: bottomHeight(),
              inset: `${bottomTop()}px auto auto auto`,
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: rightWidth(),
              height: covH,
              inset: `${insetTop()}px auto auto ${insetLeft()}px`,
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          />
        </div>
      </div>
      <div
        style={{
          border: "1px solid #000",
        }}
      >
        <div
          style={{
            width: 240,
            height: 360,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              transform: `translate(${
                (mov.movementX - covW / 2) * ((960 - 240) / (240 - covW)) * -1
              }px,${(mov.movenmntY - covH / 2) * ((1440 - 360) / (360 - covH)) * -1}px)`,
            }}
          >
            <img
              src="/test.jpg"
              alt="fdj"
              style={{
                width: 240 * 4,
                height: 360 * 4,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
