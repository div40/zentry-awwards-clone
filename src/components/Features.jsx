import React, { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

const TiltingCard = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);
  const handleMouseMove = (e) => {
    // if not hovering on any card
    if (!itemRef.current) return;
    // when hovering
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98,0.98,0.98)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
      }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        playsInline
        disablePictureInPicture
        controls={false}
        className="absolute top-0 left-0 object-cover object-center size-full "
      />
      <div className="relative z-10 flex flex-col justify-between p-5 size-full text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 text-xs max-w-64 md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container px-3 mx-auto md:px-10">
        <div className="px-5 py-32">
          <p className="text-lg font-circular-web text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md text-lg opacity-50 font-circular-web text-blue-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In cum
            accusantium, odit amet impedit beatae reprehenderit natus
            praesentium quae odio!
          </p>
        </div>
        <TiltingCard className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maxime nostrum eligendi ab omnis iure."
          />
        </TiltingCard>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <TiltingCard className="row-span-1 bento-tilt_1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maxime nostrum eligendi ab omnis iure."
            />
          </TiltingCard>
          <TiltingCard className="row-span-1 bento-tilt_1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maxime nostrum eligendi ab omnis iure."
            />
          </TiltingCard>
          <TiltingCard className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex maxime nostrum eligendi ab omnis iure."
            />
          </TiltingCard>
          <TiltingCard className="bento-tilt_2">
            <div className="flex flex-col justify-between p-5 size-full bg-violet-300">
              <h1 className="text-black bento-title special-font max-w-64">
                <b>M</b>ore comi<b>n</b>g s<b>o</b>on!
              </h1>
              <TiLocationArrow className="self-end m-5 scale-[5]" />
            </div>
          </TiltingCard>
          <TiltingCard className="bento-tilt_2">
            <video
              src="videos/feature-5.mp4"
              muted
              loop
              autoPlay
              playsInline
              controls={false}
              disablePictureInPicture
              className="object-cover object-center size-full"
            />
          </TiltingCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
