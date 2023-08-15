import {FC} from 'react';

export type Props = {
    tablesets: number[],
};

const Table: FC<Props> = ({ tablesets }) => {

  
  return (
    <table className="table mt-5 table-striped">
        <thead>
          <tr>
            <th scope="col">Bps in</th>
            <th scope="col">Bps out</th>
            <th scope="col">Packets in</th>
            <th scope="col">Packets out</th>
            <th scope="col">Speed</th>
          </tr>
        </thead>
        <tbody>
        {tablesets.map((set:any, key) => (
          <tr key={key}>
            <td>{set[0]}</td>
            <td>{set[1]}</td>
            <td>{set[2]}</td>
            <td>{set[3]}</td>
            <td>{set[4]}</td>
          </tr>
      ))}
        </tbody>
      </table>
  );
}

export default Table;
