/**
 * Inner mandala surrounding diya with fast rotation
 * Mobile only - decorative element around the diya
 */
export function InnerMandala() {
  return (
    <div
      className="absolute w-[50vw] h-[50vw] opacity-[0.25] vibes-mandala-fast"
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cg fill='none' stroke='%23FFD700' stroke-width='1'%3E%3Ccircle cx='100' cy='100' r='95'/%3E%3Ccircle cx='100' cy='100' r='75'/%3E%3Ccircle cx='100' cy='100' r='55'/%3E%3Ccircle cx='100' cy='100' r='35'/%3E%3Ccircle cx='100' cy='100' r='15'/%3E%3C!-- 12-point lotus petals --%3E%3Cellipse cx='100' cy='20' rx='6' ry='14' fill='%23FFD700' opacity='0.3'/%3E%3Cellipse cx='100' cy='20' rx='6' ry='14' fill='%23FFD700' opacity='0.3' transform='rotate(30 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='6' ry='14' fill='%23FFD700' opacity='0.3' transform='rotate(60 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='6' ry='14' fill='%23FFD700' opacity='0.3' transform='rotate(90 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='6' ry='14' fill='%23FFD700' opacity='0.3' transform='rotate(120 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='6' ry='14' fill='%23FFD700' opacity='0.3' transform='rotate(150 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='6' ry='14' fill='%23FFD700' opacity='0.3' transform='rotate(180 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='6' ry='14' fill='%23FFD700' opacity='0.3' transform='rotate(210 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='6' ry='14' fill='%23FFD700' opacity='0.3' transform='rotate(240 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='6' ry='14' fill='%23FFD700' opacity='0.3' transform='rotate(270 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='6' ry='14' fill='%23FFD700' opacity='0.3' transform='rotate(300 100 100)'/%3E%3Cellipse cx='100' cy='20' rx='6' ry='14' fill='%23FFD700' opacity='0.3' transform='rotate(330 100 100)'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
}
