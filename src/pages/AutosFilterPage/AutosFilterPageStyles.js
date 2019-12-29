import styled, { css } from 'styled-components';

const AutosFilterContentBlock = styled.div`
    display: flex-block;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    padding-top: 40px;
    padding-left: 16px;
`
const DropItemBlock = styled.div`
  padding-bottom: 20px;
`

const LabelDropDown = styled.span`
  padding-right: 40px;
`

const DropItem = styled.div`
  text-align: center;
  &:hover {
    background: #6c757d;
    cursor: pointer;
  }
`
const TableTr = styled.tr`
  &:hover {
    background: #6c757d;
    opacity: 0.5;
    cursor: pointer;
    color: #fff
  }
`
const FilterInfoBlock = styled.div`
  display:flex;
  width: 100%;

`
const FilterTitle = styled.p`
  font-weight: 700;
  font-size: 30px;
`

const FilterImage = styled.img`
  width: 300px;
  heigth: 300px;
`

const FilterItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 40px;
  padding-left: 10px;
  margin-bottom: 40px;
  border-right: 1px solid #6c757d;
`

export {
  AutosFilterContentBlock,
  LabelDropDown,
  DropItemBlock,
  DropItem,
  TableTr,
  FilterInfoBlock,
  FilterTitle,
  FilterImage,
  FilterItemBlock,
}
