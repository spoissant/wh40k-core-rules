import React, { useState, useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
import styled from "styled-components";

const updateMenus = (menus, id, forceSelect, forceUnselect) => {
  return menus.map((menu) => {
    return {
      ...menu,
      selected:
        (forceSelect || (menu.id === id ? !menu.selected : menu.selected)) &&
        !forceUnselect,
      subMenus:
        menu.subMenus &&
        updateMenus(
          menu.subMenus,
          id,
          forceSelect || (menu.id === id && !menu.selected),
          forceUnselect || (menu.id === id && menu.selected)
        ),
    };
  });
};

const MenuItem = ({ id, label, tags, subMenus, selected, setMenu }) => {
  const toggleMenuItem = (event, id) => {
    event.stopPropagation();
    setMenu((prev) => updateMenus(prev, id, false, false));
  };

  return (
    <li onClick={(event) => toggleMenuItem(event, id)}>
      <input type="checkbox" checked={!!selected} onChange={() => {}} />
      {label}
      {subMenus?.length ? (
        <ul>
          {subMenus.map((sm) => (
            <MenuItem key={sm.id} {...sm} setMenu={setMenu} />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

const Menu = ({ isOpen, menu, onChange, onClose }) => {
  const [menuState, setMenu] = useState(menu);

  useEffect(() => {
    onChange(menuState);
  }, [menuState, onChange]);

  if (!isOpen) {
    return null;
  }

  return (
    <StyledRoot>
      <div onClick={onClose} style={{ cursor: "pointer" }}>
        <FaWindowClose style={{ fontSize: "40px" }} />
      </div>
      <ul>
        {menuState.map((item) => (
          <MenuItem key={item.id} {...item} setMenu={setMenu} />
        ))}
      </ul>
    </StyledRoot>
  );
};

export default Menu;

const StyledRoot = styled.div`
  background: #979584;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: 0px 1px 12px 2px rgba(0, 0, 0, 0.5);

  & ul {
    background: transparent;
  }

  & ul:before {
    content: none;
  }

  & li:before {
    content: none;
  }

  & li:hover {
    background: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }
`;
