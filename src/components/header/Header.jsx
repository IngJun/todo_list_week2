import styled from 'styled-components';

const Header = () => {
  return (
    <NavBar>
      <div>My Todo List</div>
      <div><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png" width="25px"/>React</div>
    </NavBar>
  );
};

export {Header};

const NavBar = styled.div`
  background: white;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 10px;
  outline: solid #ccc 2px;
  
`;
