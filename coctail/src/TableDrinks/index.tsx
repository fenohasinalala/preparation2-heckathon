import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { drink, oneItemtObject } from "../interface";
import Arrow from "./Arrow";
import { changeData } from "./ChangeData";
import { LigneList } from "./LineTable";
import HorizontalPagination from "./Pagination";
import "./style.css";

interface props {
  items: drink[];
  functionChangID: (number: number) => void;
  functionFermetur: () => void;
  functionFermeturPost: () => void;
  setItems:React.Dispatch<React.SetStateAction<drink[]>>;
  setLoaling:React.Dispatch<React.SetStateAction<number>>;
  actualisationAllData:() => void;
  returnAllValur:() => void;
  setActivUpdat: React.Dispatch<React.SetStateAction<boolean>>;
  PutPostDrink:(id: number | null, fermetur: () => void, drink:drink | undefined) => JSX.Element;
}

export const ListTableDrinks: React.FC<props> = (props) => {
  const [valuNumbur, setValuNumbur] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [tri, setTri] = useState("");
  const [activTri, setActivTTri] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    setPage(1);
  }, [valuNumbur]);

  const items = props.items;
  const functionChangID = props.functionChangID;
  const functionFermetur = props.functionFermetur;
  const functionFermeturPost = props.functionFermeturPost;
  return (
    <div className="d-flex flex-column mb-3 ForcedFisplayColone">
      <h2 className="titleCoctail"> LIST DRINKS</h2>
      <div className="dataTable-header p-2">
        <div className="dataTable-dropdown">
          <label>
            <select className="dataTable-selector">
              <option value="5" onClick={() => setValuNumbur(5)}>
                5
              </option>
              <option value="10" onClick={() => setValuNumbur(10)} selected>
                10
              </option>
              <option value="15" onClick={() => setValuNumbur(15)}>
                15
              </option>
              <option value="20" onClick={() => setValuNumbur(20)}>
                20
              </option>
              <option value="25" onClick={() => setValuNumbur(25)}>
                25
              </option>
            </select>{" "}
            entries per page
          </label>
        </div>
        <div className="dataTable-search">
          <Button variant="primary" onClick={()=>{functionFermeturPost();props.setActivUpdat(true)}}>add</Button>
        </div>
      </div>
      <div className="dataTable-container p-2 bd-highlight">
        <Table striped bordered hover className="tableBody">
          <thead>
            <tr>
              <th
                onClick={() => {
                  setTri("idDrink");
                  setActivTTri([true, false, false, false]);
                }}
              >
                id {Arrow(activTri[0])}
              </th>
              <th
                onClick={() => {
                  setTri("nameDrink");
                  setActivTTri([false, true, false, false]);
                }}
              >
                nom {Arrow(activTri[1])}
              </th>
              <th
                onClick={() => {
                  setTri("priceDrink");
                  setActivTTri([false, false, true, false]);
                }}
              >
                prix {Arrow(activTri[2])}
              </th>
              <th
                onClick={() => {
                  setTri("category");
                  setActivTTri([false, false, false, true]);
                }}
              >
                categorie {Arrow(activTri[3])}
              </th>
              <th
                onClick={() => {
                  setTri("comp3");
                }}
              >
                modifier {Arrow(activTri[4])}
              </th>
              <th
                onClick={() => {
                  setTri("comp4");
                }}
              >
                supprimer {Arrow(activTri[5])}
              </th>
              
            </tr>
          </thead>
          <tfoot>
            <tr>
            <th
                onClick={() => {
                  setTri("idDrink");
                  setActivTTri([true, false, false, false]);
                }}
              >
                id {Arrow(activTri[0])}
              </th>
              <th
                onClick={() => {
                  setTri("nameDrink");
                  setActivTTri([false, true, false, false]);
                }}
              >
                nom {Arrow(activTri[1])}
              </th>
              <th
                onClick={() => {
                  setTri("priceDrink");
                  setActivTTri([false, false, true, false]);
                }}
              >
                prix {Arrow(activTri[2])}
              </th>
              <th
                onClick={() => {
                  setTri("category");
                  setActivTTri([false, false, false, true]);
                }}
              >
                categorie {Arrow(activTri[3])}
              </th>
              <th
                onClick={() => {
                  setTri("comp3");
                }}
              >
                modifier {Arrow(activTri[4])}
              </th>
              <th
                onClick={() => {
                  setTri("comp4");
                }}
              >
                supprimer {Arrow(activTri[5])}
              </th>
            </tr>
          </tfoot>
          <tbody>
            {changeData(items, valuNumbur, page, tri).map((item) => {
              if (true)
                return (
                  <LigneList
                    idLine={1}
                    item={item}
                    functionChangID={functionChangID}
                    functionFermetur={functionFermetur}
                    PutPostDrink={props.PutPostDrink}
                    actualisationAllData={props.actualisationAllData}
                  />
                );
            })}
          </tbody>
        </Table>
      </div>
      <div className="dataTable-bottom p-2">
        <div className="dataTable-info">
          {"Morte " +
            (page * valuNumbur - valuNumbur + 1) +
            " à " +
            Math.min(page * valuNumbur, items.length) +
            " sur " +
            items.length +
            " données"}
        </div>
        <nav className="dataTable-pagination">
          {HorizontalPagination(items.length, valuNumbur, page, setPage, tri)}
        </nav>
      </div>
    </div>
  );
};
