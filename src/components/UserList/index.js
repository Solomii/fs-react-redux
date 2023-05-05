import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getAllUsers } from '../../store/usersSlice';

const UsersList = (props) => {
  const { isFetching, error, users, loadUsers } = props;
  useEffect(()=>{
    loadUsers(13)
  }, [])
  return (
    <>
    <h1>UserList</h1>
      {isFetching && <h2>Loading...</h2>}
      {error && <h2>Error!</h2>}
      {!isFetching && !error && (
        <section>
          <ol>
            {users.map((user) => (
              <li key={user.login.uuid}>{JSON.stringify(user)}</li>
            ))}
          </ol>
        </section>
      )}
    </>
  );
};

//const mapStateToProps = (store) => store.users
const mapStateToProps = ({ users }) => users;
const mapDispatchToProps =(dispatch)=>({
  loadUsers: (currRes) => dispatch(getAllUsers({res:currRes}))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);