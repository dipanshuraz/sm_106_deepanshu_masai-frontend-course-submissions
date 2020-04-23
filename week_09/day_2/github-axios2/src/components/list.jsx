import React, { Component } from "react";

export class list extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: props.data
    };
    console.log(this.state);
  }

  render() {
    const items = this.state.data.map((item, index) => {
      return (
        <tr>
          <td>
            <p>{item.login}</p>
          </td>
          <td>
            <img src={item.avatar_url} alt="" height="100px" width="100px" />
          </td>
          <td>
            <p>{item.type}</p>
          </td>
          <td>{item.score}</td>
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
                      <p className="lead">{item.login}</p>
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
                        <img
                          id="img_repos"
                          src={item.avatar_url}
                          height="200px"
                          width="200px"
                          alt="Avatar"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a
                          type="button"
                          class="btn btn-primary"
                          href={item.html_url}
                        >
                          Check Profile
                        </a>
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
        <tbody>{items}</tbody>
      </div>
    );
  }
}

export default list;
