export default function ViewImage(data) {
  return (
    <>
      <img className="presentation-image"  src={data?.data?.imagen_default} alt="" />
    </>
  );
}
