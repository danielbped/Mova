import React, { useContext } from "react";
import Context from "../context/Context";
import SelectFilter from "./SelectFilter";
import SelectFilterOption from "./SelectFilterOption";

const SELECT_OPTIONS = [
  { name: "Escolha uma opção", value: "" },
  { name: "País", value: "country" },
  { name: "Região", value: "region" },
  { name: "Língua", value: "language" },
  { name: "Código de Ligação", value: "call-code" },
];

function SelectArea() {
  const {
    data: { countries, loading, filter },
  } = useContext(Context);

  const SELECT_COUNTRY = loading
    ? "Carregando..."
    : countries
        .map(({ name }) => name)
        .reduce(
          (array, item) => (array.includes(item) ? array : [...array, item]),
          []
        );

  const SELECT_REGION = loading
    ? "Carregando..."
    : countries
        .map(({ region }) => region)
        .reduce(
          (array, item) => (array.includes(item) ? array : [...array, item]),
          []
        );

  const SELECT_LANGUAGE = loading
    ? "Carregando..."
    : countries
        .map(({ languages }) => languages[0].name)
        .reduce(
          (array, item) => (array.includes(item) ? array : [...array, item]),
          []
        );

  const SELECT_CALLCODE = loading
    ? "Carregando..."
    : countries
        .map(({ callingCodes }) => callingCodes[0])
        .reduce(
          (array, item) => (array.includes(item) ? array : [...array, item]),
          []
        );

  const SELECT = (select) =>
    select ? ["Escolha uma opção", ...select] : ["Escolha uma opção"];
  let selectOptions;
  switch (filter) {
    case "country":
      selectOptions = SELECT(SELECT_COUNTRY);
      break;
    case "region":
      selectOptions = SELECT(SELECT_REGION);
      break;
    case "language":
      selectOptions = SELECT(SELECT_LANGUAGE);
      break;
    case "call-code":
      selectOptions = SELECT(SELECT_CALLCODE);
      break;
    default:
      selectOptions = SELECT();
  }

  return (
    <div className='flex'>
      <SelectFilter options={SELECT_OPTIONS} />
      {filter !== "" && <SelectFilterOption options={selectOptions} />}
    </div>
  );
}

export default SelectArea;
