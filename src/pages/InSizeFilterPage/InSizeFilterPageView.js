import React from 'react';

import {
  InSizeFilterContentBlock,
} from './InSizeFilterPageStyles';

const InSizeFilterPageView = (props) => {
  return (
    <InSizeFilterContentBlock>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Dнар</span>
        </div>
        <input type="text" className="form-control" value={props.D} onChange={(e) => props.setD(e.target.value)}/>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Внеш диаметр d1:</span>
        </div>
        <input type="text" className="form-control" value={props.d1} onChange={(e) => props.setd1(e.target.value)} />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Внут диаметр d2:</span>
        </div>
        <input type="text" className="form-control" value={props.d2} onChange={(e) => props.setd2(e.target.value)} />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Диаметр d3:</span>
        </div>
        <input type="text" className="form-control" value={props.d3} onChange={(e) => props.setd3(e.target.value)} />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Высота H:</span>
        </div>
        <input type="text" className="form-control" value={props.H} onChange={(e) => props.setH(e.target.value)} />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Ширина B:</span>
        </div>
        <input type="text" className="form-control" value={props.dB} onChange={(e) => props.setB(e.target.value)} />
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">Длина L:</span>
        </div>
        <input type="text" className="form-control" value={props.L} onChange={(e) => props.setL(e.target.value)} />
      </div>
      <button type="button" className="btn btn-primary" onClick={() => props.setIsSearch(true)}>Найти</button>
      {props.isSearch && (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Номер</th>
              <th scope="col">Фильтр</th>
            </tr>
          </thead>
          <tbody>
            {props.filters.map((item,index) => {
                let isCorrect = [];
                console.log('isCorrect', props.D);
                if (props.D !== '') {
                  isCorrect.push(Number(props.D) === Number(item.D));
                }
                if (props.d1 !== '') {
                  isCorrect.push(Number(props.d1) === Number(item.d1));
                }
                if (props.d2 !== '') {
                  isCorrect.push(Number(props.d2) === Number(item.d2));
                }
                if (props.d3 !== '') {
                  isCorrect.push(Number(props.d3) === Number(item.d3));
                }
                if (props.B !== '') {
                  isCorrect.push(Number(props.B) === Number(item.B));
                }
                if (props.H !== '') {
                  isCorrect.push(Number(props.H) === Number(item.H));
                }
                if (props.L !== '') {
                  isCorrect.push(Number(props.L) === Number(item.L));
                }
                console.log('isCorrect', isCorrect);

                if (isCorrect.indexOf(false) === -1) {
                  return (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                    </tr>)
                } else return null;

              }
            )}
          </tbody>
        </table>
      )}
    </InSizeFilterContentBlock>
  )
}

export default InSizeFilterPageView;
