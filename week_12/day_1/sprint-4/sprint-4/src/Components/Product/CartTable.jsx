import React from "react";

function CartTable(props) {
  console.log(props.itemsData);
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.itemsData.map(item => {
            return (
              <tr>
                <td></td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.cat}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
          <tr>
            <td>Demo #</td>
            <td>Demo</td>
            <td>Demo</td>
            <td>Demmo</td>
            <td>Demo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
