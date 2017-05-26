import React, { Component } from 'react';
import { MenuLine, TopLink, SubLink, Icon, Wrapper } from './styled';
import dropdownIcon from './dropdownicon.svg';

class menuItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isOpened: false };
  }

  handleClick() {
    this.setState(prevState => ({ isOpened: !prevState.isOpened }));
  }

  render() {
    return (
      <div>
        {this.state.isOpened &&
          <div>
            <MenuLine onClick={this.handleClick}>
              <TopLink to="/">
                {this.props.title} <Icon src={dropdownIcon} alt="drop-down icon" />
              </TopLink>
            </MenuLine>
            <Wrapper>
              <SubLink to="/">Shoes</SubLink>
              <SubLink to="/">Clothing</SubLink>
              <SubLink to="/">Accessories</SubLink>
            </Wrapper>
          </div>}
        {!this.state.isOpened &&
          <MenuLine onClick={this.handleClick}>
            <TopLink to="/">
              {this.props.title} <Icon src={dropdownIcon} alt="drop-down icon" />
            </TopLink>
          </MenuLine>}
      </div>
    );
  }
}
export default menuItem;
