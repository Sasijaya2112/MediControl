import Card from 'react-bootstrap/Card';
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

function VisitCard({value}) {

    const [db_report, db_getReport] = useState([]);

    const loadPatients = useCallback(async () => {
        const report = await axios.get(`http://localhost:8080/getReport/${value}`)
        db_getReport(report.data);
    }, [value])

    const [rowCount, setRowCount] = useState(0);

    useEffect(() => {
        loadPatients();
        setRowCount(db_report.length);
    }, [loadPatients,db_report.length]);

  return (
    <Card style={{ width: '18rem', marginBottom:"2%",color:"white"}} className='bg-primary'>
      <Card.Body>
        <Card.Title>Number of Visits</Card.Title>
        <Card.Text className='fs-1'>
          {rowCount}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default VisitCard;