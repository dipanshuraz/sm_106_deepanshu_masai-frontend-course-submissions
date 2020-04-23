import React, { Component } from 'react'
import { addArtist, addAlbum, editAlbum, deleteAlbum, filterByArtist } from '../redux/user/action'
import { connect } from 'react-redux'
import uniqid from 'uniqid'
import Pagination from '../components/Pagination'

export class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      artistInput: '',
      getArtist: '',
      getAlbum: '',
      getAlbumYear: '',
      EditAlbumName: '',
      EditAlbumYear: '',
      EditAlbumUniq: '',
      flag: false,
      album: [],
      id: 0
    }
  }

  handleInput = e => {

    this.setState({ [e.target.name]: e.target.value })

  }

  addArtistBtn = () => {
    const { addArtist } = this.props
    addArtist(this.state.artistInput)
  }

  addAlbumBtn = () => {
    const { addAlbum } = this.props
    this.setState({ id: this.state.id + 1 }, () => {
      console.log(this.state.id)
      let album = {
        id: this.state.id,
        artistName: this.state.getArtist,
        albumName: this.state.getAlbum,
        getAlbumYear: this.state.getAlbumYear,
        uniqid: uniqid(),
      }
      addAlbum(album)

    })

  }

  editAlbum = (elem) => {
    this.setState({
      EditAlbumUniq: elem.uniqid,
      EditAlbumName: elem.albumName,
      EditAlbumYear: elem.getAlbumYear
    })

  }
  edit = () => {
    const { editAlbum } = this.props
    let obj = {
      newAlbumName: this.state.EditAlbumName,
      newAlbumYear: this.state.EditAlbumYear,
      uniqid: this.state.EditAlbumUniq
    }
    editAlbum(obj)
  }

  delete = (id) => {
    const { deleteAlbum } = this.props

    deleteAlbum(id)
  }

  editMode = () => {
    return (<div className="form-group">
      <p className="lead font-weight-bold">Edit Album</p>
      <input type="text" placeholder='Edit Album' className='form-control' name='EditAlbumName' value={this.state.EditAlbumName} onChange={this.handleInput} />
      <input type="text" placeholder='Edit Year' className='form-control' name='EditAlbumYear' value={this.state.EditAlbumYear} onChange={this.handleInput} />
      <button className='btn btn-primary btn-block' onClick={this.edit}>Edit Album</button>

    </div>)
  }

  sortBy = () => {
    const { album } = this.props
    if (this.state.flag) {
      album.sort((a, b) => b.getAlbumYear - a.getAlbumYear);
      this.setState(pre => ({
        flag: !pre.flag
      }));
    } else {
      album.sort((a, b) => a.getAlbumYear - b.getAlbumYear);
      this.setState(pre => ({
        flag: !pre.flag
      }));
    }
  };

  filterBy = e => {
    const { filterByArtist } = this.props
    let findArtist = e.target.value;
    filterByArtist(findArtist)
  };
  render() {
    const { artist, album, page, perPage } = this.props
    return (

      <div className='container'>
        {this.pageList}
        < div className="form-group">
          <p className="lead font-weight-bold">Add Artist</p>
          <input type="text" placeholder='Add Artist Name' id='artist' name='artistInput' value={this.artistInput} onChange={this.handleInput} className='form-control' />
          <button className='btn btn-primary btn-block' onClick={this.addArtistBtn}>Add Artist</button>
        </div>

        <div className="form-group">
          <p className="lead font-weight-bold">Add Album</p>
          <select name="" id="" className='form-control' name='getArtist' onChange={this.handleInput}>
            {artist.map(elem => {

              return <option value={elem}>{elem}</option>
            })}
          </select>
          <input type="text" placeholder='Add Album' className='form-control' name='getAlbum' onChange={this.handleInput} />
          <input type="text" placeholder='Add Year' className='form-control' name='getAlbumYear' onChange={this.handleInput} />
          <button className='btn btn-primary btn-block' onClick={this.addAlbumBtn}>Add Album</button>

        </div>

        <p className="lead font-weight-bold">Filter</p>
        <div className="row">
          <select name="" id="" className='form-control' name='getArtist' onChange={this.filterBy}>
            {artist.map(elem => {
              return <option value={elem}>{elem}</option>
            })}
          </select>
          <button
            onClick={this.sortBy}
            className="btn btn-outline-dark m-3 btn-block"
          >
            Sort By
              </button>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Artist</th>
              <th scope="col">Album</th>
              <th scope="col">Year</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* {album && album.filter((a, i) => i >= perPage * (page - 1) && i < perPage * page).map(elem =>
              <tr key={elem.id}>
                <th scope="row">{elem.uniqid}</th>
                <td>{elem.artistName}</td>
                <td>{elem.albumName}</td>
                <td>{elem.getAlbumYear}</td>
                <td><button className='btn btn-success' onClick={() => this.editAlbum(elem)}>edit</button></td>
                <td><button className='btn btn-danger' onClick={() => this.delete(elem.uniqid)}>delete</button></td>
              </tr>)} */}
            <Pagination />
            {album.map((elem, i) => {
              return <tr key={elem.uniqid}>
                <th scope="row">{i + 1}</th>
                <td>{elem.artistName}</td>
                <td>{elem.albumName}</td>
                <td>{elem.getAlbumYear}</td>
                <td><button className='btn btn-success' onClick={() => this.editAlbum(elem)}>edit</button></td>
                <td><button className='btn btn-danger' onClick={() => this.delete(elem.uniqid)}>delete</button></td>
              </tr>
            })}
          </tbody>
        </table>
        <this.editMode />

      </div >

    )
  }
}

const mapStateToProps = (state) => ({
  artist: state.userReducer.artist,
  album: state.userReducer.album,

  page: state.userReducer.page,
  perPage: state.userReducer.page,
  isLoading: state.authReducer.isLoading,

})

const mapDispatchToProps = dispatch => ({
  addArtist: payload => dispatch(addArtist(payload)),
  addAlbum: payload => dispatch(addAlbum(payload)),
  editAlbum: payload => dispatch(editAlbum(payload)),
  deleteAlbum: payload => dispatch(deleteAlbum(payload)),
  filterByArtist: payload => dispatch(filterByArtist(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
