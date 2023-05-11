<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from "react";

const Table = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.data);
  }, []);
  return (
    <div>
      {data == [] ? (
        setData(props.data)
      ) : (
        <table class="table-auto">
          <tbody>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>age</td>
              <td>email</td>
            </tr>
            ;{console.log(data)}
            {data.map((item, index) => {
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
              </tr>;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
=======
import { useEffect, useState } from "react";

const Table = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.data);
  }, []);
  return (
    <div>
      {data == [] ? (
        setData(props.data)
      ) : (
        <table class="table-auto">
          <tbody>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>age</td>
              <td>email</td>
            </tr>
            ;{console.log(data)}
            {data.map((item, index) => {
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
              </tr>;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
>>>>>>> 67bf36377577b46be472058945021139905c4fa3
=======
import { useEffect, useState } from "react";

const Table = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(props.data);
  }, []);
  return (
    <div>
      {data == [] ? (
        setData(props.data)
      ) : (
        <table class="table-auto">
          <tbody>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>age</td>
              <td>email</td>
            </tr>
            ;{console.log(data)}
            {data.map((item, index) => {
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
              </tr>;
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
>>>>>>> 67bf36377577b46be472058945021139905c4fa3
