import React, { Component } from "react";

export class list extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repoData: props.repoData
    };
    // console.log(this.state);
  }

  render() {
    const repos = this.state.repoData.map((item, index) => {
      return (
        <tr>
          <td>
            <p>{item.name}</p>
          </td>
          <td>
            <p>{item.description}</p>
          </td>
          <td>
            <p>{item.created_at}</p>
          </td>

          <td>
            <button
              type="button"
              class="btn btn-primary"
              data-toggle="modal"
              data-target={"#" + item.id}
            >
              Details
            </button>

            <div
              class="modal fade"
              id={item.id}
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">
                      <p className="lead">{item.name}</p>
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <tr>
                      <td>
                        {" "}
                        <p>{item.clone_url}</p>
                        <p>{item.language}</p>
                      </td>
                    </tr>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <tbody>{repos}</tbody>
      </div>
    );
  }
}

export default list;
