import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { categoryDrink, oneItemtObject } from "../interface";
import Arrow from "./Arrow";
import { changeData } from "./ChangeData";
import { LigneList } from "./LineTable";
import HorizontalPagination from "./Pagination";
import "./style.css";

interface props {
  items: categoryDrink[];
  functionChangID: (number: number) => void;
  functionFermetur: () => void;
  functionFermeturPost: () => void;
  setItems:React.Dispatch<React.SetStateAction<categoryDrink[]>>;
  setLoaling:React.Dispatch<React.SetStateAction<number>>;
  actualisationAllData:() => void;
  returnAllValur:() => void;
  setActivUpdat: React.Dispatch<React.SetStateAction<boolean>>;
  PutPostCategori: (id: number | null, fermetur: () => void, category: categoryDrink | undefined) => JSX.Element;
}

export const ListTableCategories: React.FC<props> = (props) => {
  const [valuNumbur, setValuNumbur] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [tri, setTri] = useState("");
  const [activTri, setActivTTri] = useState<boolean[]>([
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
      <h2 className="titleCoctail"> LIST CATEGORIES</h2>
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
                    setTri("idCategory");
                    setActivTTri([true, false]);
                  }}
                >
                  id {Arrow(activTri[0])}
                </th>
                <th
                  onClick={() => {
                    setTri("nameCategory");
                    setActivTTri([false, true]);
                  }}
                >
                  nom {Arrow(activTri[1])}
                </th>
                <th
                  onClick={() => {
                    setTri("comp3");
                  }}
                >
                  modifier {Arrow(activTri[2])}
                </th>
                <th
                  onClick={() => {
                    setTri("comp4");
                  }}
                >
                  supprimer {Arrow(activTri[3])}
                </th>
              
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th
                  onClick={() => {
                    setTri("idCategory");
                    setActivTTri([true, false]);
                  }}
                >
                  id {Arrow(activTri[0])}
                </th>
                <th
                  onClick={() => {
                    setTri("nameCategory");
                    setActivTTri([false, true]);
                  }}
                >
                  nom {Arrow(activTri[1])}
                </th>
                <th
                  onClick={() => {
                    setTri("comp3");
                  }}
                >
                  modifier {Arrow(activTri[2])}
                </th>
                <th
                  onClick={() => {
                    setTri("comp4");
                  }}
                >
                  supprimer {Arrow(activTri[3])}
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
                    PutPostCategori={props.PutPostCategori}
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
