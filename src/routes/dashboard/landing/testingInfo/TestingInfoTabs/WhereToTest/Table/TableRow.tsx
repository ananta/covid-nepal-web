import React, { FC } from 'react';
import { IHospital } from 'src/services/hospitals';
import { useHistory } from 'react-router-dom';

interface ITableRowProps {
  hospital: IHospital;
}

const TableRow: FC<ITableRowProps> = props => {
  const history = useHistory();
  const { hospital } = props;
  return (
    <tr onClick={() => history.push(`/hospital/${hospital.nameSlug}`)} style={{ cursor: 'pointer' }}>
      <td>
        <div>{hospital.name}</div>
      </td>
      <td className="text-center">
        <div>{(hospital.availableTime && hospital.availableTime.length && hospital.availableTime[0]) || ''}</div>
        <small>{hospital.openDays}</small>
      </td>
      <td className="align-middle">
        {/* <div className="h5 text-warning font-weight-bold text-right"> */}
        {hospital.contact && hospital.contact.join(', ')}
        {/* </div> */}
      </td>
      <td>
        <a href="#" className="text-white small">
          More info
        </a>
      </td>
    </tr>
  );
};

export default TableRow;
