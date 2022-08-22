import "./styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { categoryDrink } from "../interface";
interface Props {
  category: categoryDrink | undefined;
  actualisationAllData:() => void;
  returnAllValur:() => void;
  setActivUpdat: React.Dispatch<React.SetStateAction<boolean>>;
  id:number | null;
  fermetur:()=>void;
}

const FormulaireCategory: React.FC<Props> = (Props) => {
  const returnAllValur = Props.returnAllValur;
  const fermerFormulaire=()=>{Props.fermetur()};

  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const formik = useFormik({
    initialValues: {
      nameCategory: (Props.category==undefined?"":Props.category.nameCategory),
    },
    validationSchema: Yup.object({
      nameCategory: Yup.string()
        .max(50, "Caractère inferieur ou egale à 50")
        .required("Requis"),
    }),
    onSubmit: (values) => {
      console.log(values);
      try {
        axios[Props.id==null?"post":"put"]("http://localhost:8080/categories"+(Props.id==null?"":"/"+Props.id), {
          nameCategory: values.nameCategory,
        });
        Props.actualisationAllData();
      } catch (error) {
        console.log(error);
      }
      returnAllValur();
    },
  });

  return (
    <>
      <div className="fonds2" onClick={fermerFormulaire}></div>
      <div className="fonds">
        <div className="form_fondsCategorie">
          <button className="btn_cancel" onClick={fermerFormulaire}>
            X
          </button>
          <div className="titels">
            {'       '}<h2>FORMULAIRE CATEGORIE</h2>
          </div>
          <form
            action=""
            className="form_class"
            onSubmit={formik.handleSubmit}
            onReset={formik.handleReset}
          >
            <div className="form_contenu">
              <label htmlFor="id" className="label_input">
                Nom
              </label>
              <input
                id="nameCategory"
                type="text"
                className="input_formulaire"
                placeholder="Nom categorie"
                value={formik.values.nameCategory}
                onChange={formik.handleChange}
              />
              {formik.errors.nameCategory ? (
                <p> {formik.errors.nameCategory} </p>
              ) : null}
            </div>

            <button type="submit" className="btn_envoie btn_type">
              {Props.id==null?"Ajouter":"Modifier"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormulaireCategory;
