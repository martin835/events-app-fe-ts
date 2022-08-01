import Form from "react-bootstrap/Form";
import months from "../assets/months.json";

function MainFilter() {
  return (
    <Form.Select aria-label="Vyberte mesiac rozbaľovacie menu" className="mt-3">
      <option value="9999">Vyberte mesiac</option>
      {months.map((month) => (
        <option key={month.order} value={month.order}>
          {month["name-sk"]}
        </option>
      ))}
    </Form.Select>
  );
}

export default MainFilter;
