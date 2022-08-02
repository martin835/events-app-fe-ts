import { useState } from "react";
import Form from "react-bootstrap/Form";
import months from "../assets/months.json";
import IFilterObj from "../Interfaces/mainFilter";

const MainFilter = () => {
  const [filterObject, setFilterObject] = useState<IFilterObj>({
    month: 9999,
    // startDate: new Date(),
    // endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    category: {
      theatre: true,
      movie: true,
      musical: true,
      concert: true,
    },
  });

  return (
    <>
      <div className="mt-3">Vyberte typ akcie: </div>
      <Form.Check
        type="checkbox"
        id="checkbox-divadlo"
        label="Divadlo"
        checked={filterObject.category.theatre}
        onChange={(e) => {
          setFilterObject({
            ...filterObject,
            category: { ...filterObject.category, theatre: e.target.checked },
          });
        }}
      />
      <Form.Check
        type="checkbox"
        id="checkbox-film"
        label="Film"
        checked={filterObject.category.movie}
        onChange={(e) => {
          setFilterObject({
            ...filterObject,
            category: { ...filterObject.category, movie: e.target.checked },
          });
        }}
      />
      <Form.Check
        type="checkbox"
        id="checkbox-muzikal"
        label="Muzikál"
        checked={filterObject.category.musical}
        onChange={(e) => {
          setFilterObject({
            ...filterObject,
            category: { ...filterObject.category, musical: e.target.checked },
          });
        }}
      />
      <Form.Check
        type="checkbox"
        id="checkbox-koncert"
        label="Koncert"
        checked={filterObject.category.concert}
        onChange={(e) => {
          setFilterObject({
            ...filterObject,
            category: { ...filterObject.category, concert: e.target.checked },
          });
        }}
      />

      <div className="mt-3">Zvolte mesiac: </div>
      <Form.Select
        aria-label="Vyberte mesiac rozbaľovacie menu"
        className="mt-3"
        value={filterObject.month}
        onChange={(e) => {
          setFilterObject({
            ...filterObject,
            month: parseInt(e.target.value),
          });
        }}
      >
        <option value="9999">Vyberte mesiac</option>
        {months.map((month) => (
          <option key={month.order} value={month.order}>
            {month["name-sk"]}
          </option>
        ))}
      </Form.Select>

      {/* <div className="mt-3">Alebo vyberte rozpätie dátumov: </div>
      <label htmlFor="startDate">Začiatok</label>
      <input id="startDate" type="date" />
      <label htmlFor="endDate">Koniec</label>
      <input id="endDate" type="date" /> */}
    </>
  );
};

export default MainFilter;
