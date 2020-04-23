import React from 'react'
import { connect } from 'react-redux'

const Data = ({
  page,
  data,
  perPage
}) => {
  return (
    <div>
      {data && data.filter((a, i) => i >= perPage * (page - 1) && i < perPage * page).map(item =>
        <div key={item.id}>
          <div>SNO. {item.id}</div>
          <div>USERID: {item.userId}</div>
          <div>TITLE: {item.title}</div>
          <div>STATUS: {item.completed.toString()}</div>
        </div>)}
    </div>
  )
}


const mapStateToProps = state => ({
  page: state.userReducer.page,
  perPage: state.userReducer.perPage
  // album

})

export default connect(mapStateToProps)(Data)