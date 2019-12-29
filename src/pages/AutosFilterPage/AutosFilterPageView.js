import React from 'react';

import {
  AutosFilterContentBlock,
  LabelDropDown,
  DropItemBlock,
  DropItem,
  TableTr,
  FilterInfoBlock,
  FilterTitle,
  FilterImage,
  FilterItemBlock,
} from './AutosFilterPageStyles';

const AutosFilterPageView = (props) => {
  return (
    <AutosFilterContentBlock>
      <DropItemBlock>
        <div className="dropdown">
          <LabelDropDown>
            Марка:
          </LabelDropDown>
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.markChoose.name ? props.markChoose.name : 'Выберите марку'}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {props.autos.map((item, index) =>
              <DropItem
                lassName="dropdown-item"
                aria-labelledby="dropdownMenuButton"
                onClick={() => {
                  props.setMarkChoose({
                    name: item.mark,
                    id: index,
                  })
                  props.setModelChoose({});
                  props.setEngineChoose([]);
                  props.setFilterChoose(null);
                }}>
                {item.mark}
              </DropItem>
            )
           }
          </div>
        </div>
      </DropItemBlock>
      {Object.keys(props.markChoose).length > 0 && (
        <DropItemBlock>
          <div class="dropdown">
            <LabelDropDown>
              Модель:
            </LabelDropDown>
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {props.modelChoose.name ? props.modelChoose.name : 'Выберите модель'}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {props.autos[props.markChoose.id].model.map((item,index) =>
              <DropItem
                lassName="dropdown-item"
                onClick={() => {
                  props.setModelChoose({
                    name: item.name,
                    id: index,
                  })
                  props.setEngineChoose([]);
                  props.setFilterChoose(null);
                }}>
                {item.name}
              </DropItem>
            )
           }
            </div>
          </div>
        </DropItemBlock>
      )}
      {Object.keys(props.modelChoose).length > 0 && (
        <DropItemBlock>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Тип двигателя</th>
              <th scope="col">Объем куб. см</th>
              <th scope="col">Название двигателя</th>
              <th scope="col">Лошадиных сил</th>
            </tr>
          </thead>
          <tbody>
            {props.autos[props.markChoose.id].model[props.modelChoose.id].engines.map(item =>
              <TableTr onClick={() => {
                props.setEngineChoose(item.filters);
                props.setFilterChoose(null);
              }}>
                <td>{item.type}</td>
                <td>{item.capacity}</td>
                <td>{item.name}</td>
                <td>{item.power}</td>
              </TableTr>
            )}
          </tbody>
        </table>
        </DropItemBlock>
      )}
      {props.engineChoose.length > 0 && (
        <DropItemBlock>
          <table class="table">
            <tbody>
              {props.engineChoose.map((item,index) => (
                <TableTr onClick={() => props.setFilterChoose(item)}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                </TableTr>
              ))}
            </tbody>
          </table>
        </DropItemBlock>
      )}

      {props.filterChoose && (
        <DropItemBlock>
          {props.filters.map(filter => {
            if (filter.personId === props.filterChoose.id) {
              return (
                <FilterInfoBlock>
                  <FilterItemBlock>
                    <FilterTitle>{filter.name}</FilterTitle>
                    <FilterImage src={filter.image} />
                  </FilterItemBlock>
                  <FilterItemBlock>
                    <p>Dнар: {filter.D ? filter.D : ""}</p>
                    <p>d1: {filter.d1 ? filter.d1 : ""}</p>
                    <p>d2: {filter.d2 ? filter.d2 : ""}</p>
                    <p>d3: {filter.d3 ? filter.d3 : ""}</p>
                    <p>F: {filter.F ? filter.F : ""}</p>
                    <p>G: {filter.G ? filter.G : ""}</p>
                    <p>L: {filter.L ? filter.L : ""}</p>
                    <p>B: {filter.B ? filter.B : ""}</p>
                    <p>H: {filter.H ? filter.H : ""}</p>
                  </FilterItemBlock>
                  <FilterItemBlock>
                    <p>Применяемость: {filter.applicability}</p>
                  </FilterItemBlock>
                </FilterInfoBlock>


              )
            }
          })}

        </DropItemBlock>

      )}

    </AutosFilterContentBlock>
  )
}

export default AutosFilterPageView;
