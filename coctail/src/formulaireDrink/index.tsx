import "./styles.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { categoryDrink, cocktail, compose, drink } from "../interface";
interface Props {
  drink: drink | undefined;
  actualisationAllData:() => void;
  returnAllValur:() => void;
  setActivUpdat: React.Dispatch<React.SetStateAction<boolean>>;
  id:number | null;
  fermetur:()=>void;
  dataCompose:categoryDrink[];
}

const FormulaireDrink: React.FC<Props> = (Props) => {
  const returnAllValur = Props.returnAllValur;
  const fermerFormulaire=()=>{Props.fermetur()};
  
  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  const formik = useFormik({
    initialValues: {
      nameDrink: (Props.drink==undefined?"":Props.drink.nameDrink),
      prix: (Props.drink==undefined?"":""+Props.drink.priceDrink),

      categorie: (Props.drink==undefined?"":Props.drink.category.nameCategory),
    },
    validationSchema: Yup.object({
      nameDrink: Yup.string()
        .max(50, "Caractère inferieur ou egale à 50")
        .required("Requis"),
      prix: Yup.number()
        .max(1000000, "Prix trop élevé")
        .required("Requis")
        .typeError('Saisissez des chiffres'),

      categorie: Yup.string()
        .max(50, "Caractère inferieur ou egale à 50")
        .required("Requis"),
    }),
    onSubmit: (values) => {
      console.log(values);
      try {
        axios[Props.id==null?"post":"put"]("http://localhost:8080/drinks"+(Props.id==null?"":"/"+Props.id), {
          nameDrink: values.nameDrink,
          priceDrink: values.prix,
          category: {
            idCategory: 1, // A VOIRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
            nameCategory: values.categorie // A VOIRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
          }
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
        <div className="form_fondsDrink">
          <button className="btn_cancel" onClick={fermerFormulaire}>
            X
          </button>
          <div className="titels">
            {'      '}<h2>FORMULAIRE BOISSON</h2>
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
                id="nameDrink"
                type="text"
                className="input_formulaire"
                placeholder="Nom de Boisson"
                value={formik.values.nameDrink}
                onChange={formik.handleChange}
              />
              {formik.errors.nameDrink ? (
                <p> {formik.errors.nameDrink} </p>
              ) : null}
            </div>

            <div className="form_contenu">
              <label htmlFor="id" className="label_input">
                Prix
              </label>
              <input
                id="prix"
                type="text"
                className="input_formulaire"
                placeholder="Prix"
                value={formik.values.prix}
                onChange={formik.handleChange}
              />
              {formik.errors.prix ? <p> {formik.errors.prix} </p> : null}
            </div>

            <div className="form_contenu">
              <label htmlFor="id" className="label_input">
                Catégorie
              </label>
              <select
                id="categorie"
                className="input_formulaire"
                placeholder="categorie"
                value={formik.values.categorie}
                onChange={formik.handleChange}
                >
                  {Props.dataCompose.map((donne)=>{return(
                      <option value="red" label={donne.nameCategory}>
                      {" "}
                      {donne.nameCategory}
                    </option>
                  )})}
                </select>

              {formik.errors.categorie ? (
                <p> {formik.errors.categorie} </p>
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

export default FormulaireDrink;
