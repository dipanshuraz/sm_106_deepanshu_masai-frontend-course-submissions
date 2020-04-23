import {
  ADD_ARTIST,
  ADD_ALBUM,
  EDIT_ALBUM,
  DELETE_ALBUM,
  FILTER_BY_ARTIST,
  CHANGE_PAGE_NO,

} from './action'

const initialState = {
  artist: [],
  album: [],
  page: 1,
  perPage: 10,
  length: 0,
  totalPages: 0
}

const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_ARTIST:
      return {
        ...state,
        artist: [...state.artist, action.payload]
      }
    case ADD_ALBUM:
      return {
        ...state,
        album: [...state.album, action.payload]
      }
    case EDIT_ALBUM:
      {
        let newEdit = action.payload
        let arr = [...state.album]
        arr = arr.map(elem => {
          if (elem.uniqid == newEdit.uniqid) {
            elem.albumName = newEdit.newAlbumName
            elem.getAlbumYear = newEdit.newAlbumYear
          }
          return elem
        })

        return {
          ...state, album: [...arr]
        }
      }
    case DELETE_ALBUM:
      {
        let id = action.payload
        let arr = [...state.album]
        arr.forEach((elem, i) => {
          if (elem.uniqid == id) {
            arr.splice(i, 1)
          }
        })
        return {
          ...state, album: arr.length > 0 ? [...arr] : []
        }
      }
    case FILTER_BY_ARTIST:
      console.log('filter called')
      return {
        ...state
      }
    case CHANGE_PAGE_NO:
      return {
        ...state,
        page: action.payload
      }


    default:
      return state;
  }

}

export default userReducer