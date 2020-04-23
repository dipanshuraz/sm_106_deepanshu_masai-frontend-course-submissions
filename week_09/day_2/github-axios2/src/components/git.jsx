import React, { Component } from "react";
import axios from "axios";
import List from "./list";
import Repos from "./repos";
export class git extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      user: "",
      repoData: [],
      repo: "",
      lang: ""
    };
  }

  inputHandler = e => {
    this.setState({ user: e.target.value });
  };

  inputRepoHandler = e => {
    this.setState({ repo: e.target.value });
  };

  onSelectChange = e => {
    this.setState({ lang: e.target.value });
  };

  getGitData = () => {
    axios
      .get(`https://api.github.com/search/users?q=${this.state.user}`)
      .then(res => {
        const data = res.data.items;

        this.setState({
          data: data
        });
        // console.log(data);
        // console.log(this.state.data);
      })
      .catch(error => console.log(error));
  };

  // "https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc";

  getGitDataRepo = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=${this.state.repo}+language:${this.state.lang}`
      )
      .then(res => {
        const data = res.data.items;

        this.setState({
          repoData: data
        });
        console.log(data);
        // console.log(this.state.repoData);
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div
        className="container-fluid
      "
      >
        <div className="row">
          <div className="col-6">
            <input
              onKeyPress={e => {
                if (e.key === "Enter") {
                  this.getGitData();
                }
              }}
              type="text"
              value={this.state.user}
              onChange={this.inputHandler}
            />
            {this.state.data.length ? <List data={this.state.data} /> : ""}
          </div>
          <div className="col-6">
            <tr>
              <td>
                {" "}
                <select name="lang" id="lang" onChange={this.onSelectChange}>
                  <option value="java">Java</option>
                  <option value="python">Python</option>
                  <option value="html">Html</option>
                </select>
              </td>
              <td>
                <input
                  onKeyPress={e => {
                    if (e.key === "Enter") {
                      this.getGitDataRepo();
                    }
                  }}
                  type="text"
                  value={this.state.repo}
                  onChange={this.inputRepoHandler}
                />
              </td>
            </tr>

            {this.state.repoData.length ? (
              <Repos repoData={this.state.repoData} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default git;
