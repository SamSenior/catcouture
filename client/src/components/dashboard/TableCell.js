import styled from "styled-components";

const StyledTableCell = styled.td`
  padding: 0.5em;
  border: 1px solid grey;
  background-color: #e0ae4c;
`;
const TableCell = ({ children, className }) => {
  return <StyledTableCell className={className}>{children}</StyledTableCell>;
};

export default TableCell;
