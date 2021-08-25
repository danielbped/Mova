import React, { useContext } from "react";
import Context from "../context/Context";
import SelectFilter from "./SelectFilter";
import SelectFilterOption from "./SelectFilterOption";

const SELECT_OPTIONS = [
  { name: "Escolha uma opção", value: "" },
  { name: "País", value: "country" },
  { name: "Região", value: "region" },
  { name: "Língua", value: "language" },
  { name: "Capital", value: "capital" },
  { name: "Código de Ligação", value: "call-code" },
];

function SelectArea() {
  const {
    filters: { filter, filterOptions, loaded },
  } = useContext(Context);

  const options = filterOptions;
  const SELECT_COUNTRY = !loaded
    ? "Carregando..."
    : options
        .map(({ alpha2Code, name }) => [name, alpha2Code])
        .reduce(
          (array, item) => (array.some((obj) => obj.name === item) || item === '' ? array : [...array, {name: item[0], value: item[1]}]),
          []
        );
  const SELECT_REGION = !loaded
    ? "Carregando..."
    : options
        .map(({ region }) => region)
        .reduce((array, item) => (array.some((obj) => obj.name === item) || item === '' ? array : [...array, {name: item, value: item}]), []
        );
  const SELECT_LANGUAGE = !loaded
    ? "Carregando..."
    : options
        .map(({ languages }) => languages[0])
        .reduce(
          (array, item) => (array.some((obj) => obj.name === item) || item === '' ? array : [...array, {name: item.name, value: item.iso639_1}]),
          []
        );

  const SELECT_CALLCODE = !loaded
    ? "Carregando..."
    : options
        .map(({ callingCodes }) => callingCodes[0])
        .reduce(
          (array, item) => (array.some((obj) => obj.name === item) || item === '' ? array : [...array, {name: item, value: item}]),
          []
        );

  const SELECT_CAPITAL = !loaded
    ? "Carregando..."
    : options
        .map(({ capital }) => capital)
        .reduce(
          (array, item) => (array.some((obj) => obj.name === item) || item === '' ? array : [...array, {name: item, value: item}]),
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
    case "capital":
      selectOptions = SELECT(SELECT_CAPITAL);
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
