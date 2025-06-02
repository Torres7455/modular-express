export default function DescripcionProducto (data) {
    console.log(data)
    return <>
    <p>{data?.data?.tipo}</p>
    <p>{data?.data?.descripcion}</p>
    <p>{data?.data?.direccion}</p>
     <p>{data?.data?.detalles}</p>
    <p>{data?.data?.precio}</p>
       
    </>
}
