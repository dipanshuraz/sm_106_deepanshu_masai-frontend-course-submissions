import React from 'react'
import { connect } from 'react-redux'
import { changePage } from '../redux/user/action'


const Pagination = ({
  page,
  totalPages,
  changePage
}) => {
  console.log('loading', page, totalPages)
  const pageList = []
  for (let i = page - 1; i >= 0 && i <= page + 3 && i <= totalPages; i++) {
    if (i === page - 1) {
      if (i !== 0)
        pageList.push(<div key={i} onClick={() => changePage(page - 1)}>Previous</div>)
      continue;
    }
    if (i === page + 3) {
      pageList.push(<div key={i} onClick={() => changePage(page + 1)}>Next</div>)
      continue;
    }
    pageList.push(<div key={i} style={{ color: `${page === i ? 'green' : 'black'}` }} onClick={() => changePage(i)}>{i}</div>)
  }
  return (
    <>
      {totalPages !== 0 && pageList}
    </>
  )
}
const mapStateToProps = state => ({
  page: state.userReducer.page,
  perPage: state.userReducer.perPage,
  totalPages: state.userReducer.totalPages
})

const mapDispatchToProps = dispatch => ({
  changePage: (payload) => dispatch(changePage(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)