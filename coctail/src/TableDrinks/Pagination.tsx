import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

function HorizontalPagination(
    dataLength:number,
    valuNumbur:number,
    page:number,
    setPage:React.Dispatch<React.SetStateAction<number>>,
    tri:string|null
    ) {
        const maxpage=Math.round((dataLength/valuNumbur+1)-(dataLength/valuNumbur+1)%1)
        const [inferiorNumpubPage,setInferiorNumberPage]=useState(0);
        const [superiorNumpubPage,setSuperiorNumberPage]=useState(0);
    useEffect(()=>{
        setInferiorNumberPage(Math.max((page-page%10)-10,1));
        setSuperiorNumberPage(Math.min((page-page%10)+10,maxpage));
    },[page,valuNumbur])

  return (
    <ListGroup horizontal>
        <ListGroup.Item className='ItemPagination' action onClick={()=>{setPage(1)}}>
                {"<<"}
        </ListGroup.Item>
        <ListGroup.Item className='ItemPagination' action onClick={()=>{page==1?setPage(1):setPage(page-1)}}>
                {"<"}
        </ListGroup.Item>
        <ListGroup.Item className='ItemPagination' action onClick={()=>{setPage(inferiorNumpubPage)}}>
                {inferiorNumpubPage}
        </ListGroup.Item>
            <input type="number" name="pageActiv" id="pageActiv" value={""+page} onChange={(e)=>{
                ((Number(e.target.value))<=maxpage)&&((Number(e.target.value))>=1)?
                setPage(Number(e.target.value)):
                console.log("");
                }} />
        <ListGroup.Item className='ItemPagination' action onClick={()=>{setPage(superiorNumpubPage)}}>
                {superiorNumpubPage}
        </ListGroup.Item>
        <ListGroup.Item className='ItemPagination' action onClick={()=>{page==maxpage?setPage(maxpage):setPage(page+1)}}>
                {">"}
        </ListGroup.Item>
        <ListGroup.Item className='ItemPagination'  action onClick={()=>{setPage(maxpage)}}>
                {">>"}
        </ListGroup.Item>
    </ListGroup>
  );
}

export default HorizontalPagination;